import { TerminalOutput as TerminalOutputType } from '@/types/output';
import { emyptyOutput } from '@/lib/emptyOutput';

export function commands(input: string): Array<string> {
  const commands = ['cd', 'clear', 'commands', 'ls', 'pwd', 'whoami'];
  const output = commands;

  return output;
}
