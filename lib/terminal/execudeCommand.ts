import { terminalCommands } from '@/lib/terminal/terminalCommands';

export function executeCommand(input: string): void {
  const selectedCommand = terminalCommands.find((cmd) => cmd.command === input);

  if (selectedCommand) {
    selectedCommand.function(input);
  } else {
    console.log(`Command not found: ${input}`);
  }
}
