use baml_runtime::runtime_interface::ExperimentalTracingInterface;
use baml_types::BamlValue;
use futures::executor::block_on;
use napi_derive::napi;

use super::runtime::BamlRuntime;
use super::runtime_ctx_manager::RuntimeContextManager;

crate::lang_wrapper!(BamlSpan,
  Option<baml_runtime::tracing::TracingSpan>,
  no_from,
  thread_safe,
  rt: std::sync::Arc<baml_runtime::BamlRuntime>
);

#[napi]
impl BamlSpan {
    #[napi(ts_return_type = "BamlSpan")]
    pub fn new(
        runtime: &BamlRuntime,
        function_name: String,
        args: serde_json::Value,
        ctx: &RuntimeContextManager,
    ) -> napi::Result<Self> {
        let args: BamlValue = serde_json::from_value(args)
            .map_err(|e| napi::Error::new(napi::Status::GenericFailure, e.to_string()))?;
        let Some(args_map) = args.as_map() else {
            return Err(napi::Error::new(
                napi::Status::GenericFailure,
                "Invalid span args",
            ));
        };

        let (span, _) = runtime
            .inner
            .start_span(&function_name, &args_map, &ctx.inner);
        log::trace!("Starting span: {:#?} for {:?}\n", span, function_name);
        Ok(Self {
            inner: std::sync::Arc::new(tokio::sync::Mutex::new(span)),
            rt: runtime.inner.clone(),
        })
    }

    // mthod to finish
    #[napi]
    pub async fn finish(
        &self,
        result: serde_json::Value,
        ctx: &RuntimeContextManager,
    ) -> napi::Result<serde_json::Value> {
        let result: BamlValue = serde_json::from_value(result)
            .map_err(|e| napi::Error::new(napi::Status::GenericFailure, e.to_string()))?;
        // log::info!("Finishing span: {:#?}\n", self.inner.lock().await);

        let span = {
            self.inner.lock().await.take().ok_or_else(|| {
                napi::Error::new(napi::Status::GenericFailure, "Already used span")
            })?
        };

        let result = self
            .rt
            .finish_span(span, Some(result), &ctx.inner)
            .await
            .map_err(|e| napi::Error::new(napi::Status::GenericFailure, e.to_string()))
            .map(|u| u.map(|id| id.to_string()))?;

        Ok(serde_json::json!(result))
    }

    #[napi]
    pub fn finish_sync(
        &self,
        result: serde_json::Value,
        ctx: &RuntimeContextManager,
    ) -> napi::Result<serde_json::Value> {
        let result: BamlValue = serde_json::from_value(result)
            .map_err(|e| napi::Error::new(napi::Status::GenericFailure, e.to_string()))?;
        // log::info!("Finishing span: {:#?}\n", self.inner.lock());

        // Acquire the lock synchronously
        let mut guard = block_on(self.inner.lock());

        // log::trace!("Finishing span: {:#?}", guard);

        // Take the span safely from the guard
        let span = guard
            .take()
            .ok_or_else(|| napi::Error::new(napi::Status::GenericFailure, "Already used span"))?;

        // Finish the span synchronously
        let future = self.rt.finish_span(span, Some(result), &ctx.inner);
        let result = block_on(future)
            .map_err(|e| napi::Error::new(napi::Status::GenericFailure, e.to_string()))
            .and_then(|u| {
                u.map(|id| id.to_string()).ok_or_else(|| {
                    napi::Error::new(
                        napi::Status::GenericFailure,
                        "No ID returned from finish_span",
                    )
                })
            })?;

        Ok(serde_json::json!(result))
    }
}