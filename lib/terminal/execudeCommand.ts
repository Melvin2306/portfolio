import { terminalCommands } from '@/lib/terminal/terminalCommands';

export function executeCommand(input: string): string {
  const selectedCommand = terminalCommands.find((cmd) => cmd.command === input);

  if (selectedCommand) {
    const output = selectedCommand.function(input);
    return output;
  } else {
    console.log(`Command not found: ${input}`);
    return '';
  }
}
