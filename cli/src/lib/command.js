import fs from "fs-extra";
import nconf from "nconf";
import chalk from "chalk";
import path from "path";

import commands from "./commands/index";
 
function command({
  command,
  program,
  cmd,
  options
}) {

  // Default to flock.json
  if(!program.file) program.file = "flock.json";

  console.log(`Loading ${program.file}..`);

  const flockConfig = nconf.argv()
    .file({ file: path.join(process.cwd(), program.file) });

  if(!flockConfig || !flockConfig.get("Flock")) {
    console.log(chalk.red("settings.json is incorrect, missing Flock"));
    process.exit();
  }

  if(!commands[command]) {
    console.log(chalk.red(`Invalid command ${command}`));
    process.exit();
  }

  commands[command]({
    program,
    cmd,
    options,
    flockConfig
  });

}

export default command;
