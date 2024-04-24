import { terminalCommands } from '@/lib/terminal/terminalCommands';
import { CommandSplit, TerminalInput } from '@/types/input';
import { TerminalOutput as TerminalOutputType } from '@/types/output';
import { splitCommand } from './splitcommand';

export function executeCommand(input: TerminalInput, currentDirectory: string, currentUser: string): TerminalOutputType {
  let terminalOutput: TerminalOutputType = {
    user: '',
    output: [],
  };
  const splitInput: CommandSplit = splitCommand(input.command);
  const command = splitInput.command;
  const flags = splitInput.flags;
  const user = input.user;
  
    const selectedCommand = terminalCommands.find((cmd) => cmd.command === command)
    if (selectedCommand) {
    const output = selectedCommand.function(currentDirectory, currentUser, flags);
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
