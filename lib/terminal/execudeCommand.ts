import { terminalCommands } from '@/lib/terminal/terminalCommands';
import { TerminalOutput as TerminalOutputType } from '@/types/output';

let emyptyOutput: TerminalOutputType = {
  id: 0,
  user: '',
  output: [],
};

export function executeCommand(input: string): TerminalOutputType {
  const selectedCommand = terminalCommands.find((cmd) => cmd.command === input);

  if (selectedCommand) {
    const output = selectedCommand.function(input);
    return output;
  } else {
    console.log(`Command not found: ${input}`);
    const emyptyOutput: TerminalOutputType = {
      id: 0,
      user: '',
      output: [`Command not found: ${input}`],
    };
    return emyptyOutput;
  }
}
