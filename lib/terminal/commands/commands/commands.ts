import { TerminalOutput as TerminalOutputType } from '@/types/output';
import { emyptyOutput } from '@/lib/emptyOutput';
import { CommandInput } from '@/types/input';

export function commands(input: CommandInput): Array<string> {
  const commands = [
    'cd - change directory. Usage: cd [directory]',
    'clear - clear the terminal screen. Usage: clear',
    'commands - list all available commands. Usage: commands',
    'ls - list directory contents. Usage: ls',
    'pwd - print working directory. Usage: pwd',
    'whoami - print the current user. Usage: whoami',
  ];
  const output = commands;

  return output;
}
