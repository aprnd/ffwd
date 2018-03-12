import program from "commander";
import pkginfo from "./package.json";
import command from "./lib/command.js";

program
  .version(pkginfo.version)
  .option("-f, --file <file.json>", "Create flock from file");

program
  .command("run")
  .alias("r")
  .description("Run the ffwd app in your current directory")
  .action((cmd, options) => {
    command({
      command: "run",
      program,
      cmd,
      options
    });
  });

program.parse(process.argv);
 
