import { CommandLineProcessor } from "https://deno.land/x/commandline_processor/commandline-processor.ts"

const commandToBeExecuted = './run-via-pm2.sh'

console.log(await CommandLineProcessor.process(commandToBeExecuted))
