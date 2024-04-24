import { TerminalOutput as TerminalOutputType } from '@/types/output';
import { emyptyOutput } from '@/lib/emptyOutput';

export function whoami(command: string, flags?: Array<string>): Array<string> {
  const files = ['file1', 'file2', 'file3'];
  const output = files;

  return output;
}
