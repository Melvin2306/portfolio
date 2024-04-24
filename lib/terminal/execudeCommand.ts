import { terminalCommands } from '@/lib/terminal/terminalCommands';
import { CommandInput, CommandSplit, TerminalInput } from '@/types/input';
import { TerminalOutput as TerminalOutputType } from '@/types/output';
import { splitCommand } from './splitcommand';

export function executeCommand(input: TerminalInput): TerminalOutputType {
  let terminalOutput: TerminalOutputType = {
    user: input.user,
    directory: input.directory,
    output: [],
  };
  const splitInput: CommandSplit = splitCommand(input.command);
  const command = splitInput.command;
  const user = input.user;
  const commandInput: CommandInput = {
    directory: input.directory,
    user: input.user,
    item: splitInput.item,
    flags: splitInput.flags,
  };
  
    const selectedCommand = terminalCommands.find((cmd) => cmd.command === command)
    if (selectedCommand) {
      if (selectedCommand.command === 'cd') {
        if (selectedCommand.function(commandInput)[0] === `cd: no such file or directory: ${commandInput.item}`) {
          const error = selectedCommand.function(commandInput)[0];
          terminalOutput.user = user;
          terminalOutput.output.push(error);
          return terminalOutput;
        }
        const directory = selectedCommand.function(commandInput);
        terminalOutput.user = user;
        terminalOutput.directory = directory[0];
        return terminalOutput;
      }
    const output = selectedCommand.function(commandInput);
    terminalOutput.output = output;
    terminalOutput.user = user;
    return terminalOutput;
    } else {
    const error: string = `Command not found: ${command}`;
    terminalOutput.user = user;
    terminalOutput.output.push(error);
    return terminalOutput;
  }
}
