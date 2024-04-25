import { CommandInput } from '@/types/input';
import { terminalCommands } from '@/lib/terminal/terminalCommands';

export function man(input: CommandInput): Array<string> {
  if (!input.item) {
    return ['No command specified'];
  }
  const command = terminalCommands.find((cmd) => cmd.command === input.item);
  if (!command) {
    return ['No manual entry for this command'];
  }
  const manual = command.manual;
  const usage = command.usage;
  const description = command.description;
  return [
    `DESCRIPTION:`,
    `${description}`,
    `USAGE:`,
    `${usage}`,
    `MANUAL:`,
    ...manual,
  ];
}
