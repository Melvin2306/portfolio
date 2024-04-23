import { terminalCommands } from '@/lib/terminal/terminalCommands';
import { CommandSplit, TerminalInput } from '@/types/input';
import { TerminalOutput as TerminalOutputType } from '@/types/output';
import { splitCommand } from './splitcommand';

export function executeCommand(input: TerminalInput): TerminalOutputType {
  const splitInput: CommandSplit = splitCommand(input.command);
  const command = splitInput.command;
  const user = input.user;
  const directory = input.directory;
  const selectedCommand = terminalCommands.find((cmd) => cmd.command === command[0]);
  const previousCommand = command[0];
  let output: TerminalOutputType = {
    user: '',
    output: [],
  };

  if (selectedCommand) {
    const commandOutput = selectedCommand.function(command[0]);
    output.output.push(...commandOutput);
    return output;
  } else {
    const error: string = `Command not found: ${previousCommand}`;
    output.output.push(error);
    return output;
  }
}
