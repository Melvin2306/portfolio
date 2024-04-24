import { TerminalOutput as TerminalOutputType } from '@/types/output';
import { emyptyOutput } from '@/lib/emptyOutput';
import { CommandInput } from '@/types/input';

export function commands(input: CommandInput): Array<string> {
  const commands = ['cd', 'clear', 'commands', 'ls', 'pwd', 'whoami'];
  const output = commands;

  return output;
}
