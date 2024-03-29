import { terminalCommands } from '@/lib/terminal/terminalCommands';
import { TerminalOutput as TerminalOutputType } from '@/types/output';

export function executeCommand(input: string): TerminalOutputType {
  const selectedCommand = terminalCommands.find((cmd) => cmd.command === input);

  if (selectedCommand) {
    const output = selectedCommand.function(input);
    return output;
  } else {
    const emyptyOutput: TerminalOutputType = {
      user: '',
      output: [`Command not found: ${input}`],
    };
    return emyptyOutput;
  }
}
