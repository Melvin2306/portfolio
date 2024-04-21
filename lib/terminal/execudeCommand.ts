import { terminalCommands } from '@/lib/terminal/terminalCommands';
import { TerminalOutput as TerminalOutputType } from '@/types/output';

export function executeCommand(input: string): TerminalOutputType {
  const selectedCommand = terminalCommands.find((cmd) => cmd.command === input);
  const previousCommand = input;
  let output: TerminalOutputType = {
    user: '',
    output: [previousCommand],
  };

  if (selectedCommand) {
    const commandOutput = selectedCommand.function(input);
    output.output.push(...commandOutput);
    return output;
  } else {
    const error: string = `Command not found: ${input}`;
    output.output.push(error);
    return output;
  }
}
