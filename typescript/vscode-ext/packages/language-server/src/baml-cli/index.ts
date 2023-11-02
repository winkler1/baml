const { exec } = require("child_process");

export function cliBuild(cliPath: string, workspacePath: string | null, onError?: (errorMessage: string) => void) {
  let buildCommand = `${cliPath} build`;

  if (!workspacePath) {
    return;
  }
  let options = {
    cwd: workspacePath,
  };

  exec(
    buildCommand,
    options,
    (error: Error | null, stdout: string, stderr: string) => {
      if (stdout) {
        console.log(stdout);
        // outputChannel.appendLine(stdout);
      }

      if (stderr) {
        // our CLI is by default logging everything to stderr
        console.info(stderr);
      }

      if (error) {
        console.error(`Error running the build script: ${JSON.stringify(error, null, 2)}`);
        onError?.(`Baml build error`)
        return;
      }
    }
  );
}