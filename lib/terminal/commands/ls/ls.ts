const a = 1;
const l = 2;
import { TerminalOutput as TerminalOutputType } from '@/types/output';
import { emyptyOutput } from '@/lib/emptyOutput';

export function ls(input: string): Array<string> {
  const files = ['file1', 'file2', 'file3'];
  const output = files;

  return output;
}
