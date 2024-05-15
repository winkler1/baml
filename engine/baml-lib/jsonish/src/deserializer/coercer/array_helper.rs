use crate::deserializer::{deserialize_flags::Flag, types::BamlValueWithFlags};
use anyhow::Result;
use internal_baml_core::ir::FieldType;

use super::{ParsingContext, ParsingError};

pub fn coerce_array_to_singular(
    ctx: &ParsingContext,
    target: &FieldType,
    items: &[&crate::jsonish::Value],
    coercion: &dyn (Fn(&crate::jsonish::Value) -> Result<BamlValueWithFlags, ParsingError>),
) -> Result<BamlValueWithFlags, ParsingError> {
    let parsed = items.iter().map(|item| coercion(item)).collect::<Vec<_>>();
    match pick_best(ctx, target, &parsed) {
        Ok(v) => Ok(v),
        Err(e) => Err(e),
    }
}

pub(super) fn pick_best(
    ctx: &ParsingContext,
    target: &FieldType,
    res: &[Result<BamlValueWithFlags, ParsingError>],
) -> Result<BamlValueWithFlags, ParsingError> {
    if res.is_empty() {
        return Err(ctx.error_unexpected_empty_array(target));
    }

    if res.len() == 1 {
        return res.first().unwrap().clone();
    }

    let mut res_index = (0..res.len()).collect::<Vec<_>>();
    // Sort by score
    res_index.sort_by(|&a, &b| {
        let a_res = &res[a];
        let b_res = &res[b];

        match (a_res, b_res) {
            (Err(_), Err(_)) => a.cmp(&b),
            (Ok(_), Err(_)) => std::cmp::Ordering::Less,
            (Err(_), Ok(_)) => std::cmp::Ordering::Greater,
            (Ok(a_val), Ok(b_val)) => match a_val.score().cmp(&b_val.score()) {
                std::cmp::Ordering::Equal => a.cmp(&b),
                other => other,
            },
        }
    });

    log::warn!(
        "Picking {} from {:?} items:\n{}",
        target,
        res_index,
        res.as_ref()
            .iter()
            .enumerate()
            .filter_map(|(idx, r)| match r {
                Ok(r) => Some(format!("{idx} {:#}", r)),
                Err(e) => Some(format!("{idx} {:#}", e)),
            })
            .collect::<Vec<_>>()
            .join("\n")
    );

    match res_index.first() {
        Some(&i) => match res.get(i) {
            Some(Ok(v)) => {
                // Add some flags so we know which value we picked
                let mut v = v.clone();
                if res.len() > 1 {
                    v.add_flag(Flag::FirstMatch(i, res.to_vec()));
                }
                Ok(v.to_owned())
            }
            // TODO: @hellovai: Return all errors
            Some(Err(_)) => {
                let errors = res.iter().filter_map(|r| match r {
                    Ok(_) => None,
                    Err(e) => Some(e),
                });
                Err(ctx.error_merge_multiple(
                    &format!("Failed to find any {} in {} items", target, res.len()),
                    errors,
                ))
            }
            None => Err(ctx.error_internal("Index out of bounds")),
        },
        None => Err(ctx.error_unexpected_empty_array(target)),
    }
}