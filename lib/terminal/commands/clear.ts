import { TerminalOutput as TerminalOutputType } from '@/types/output';
import { emyptyOutput } from '@/lib/emptyOutput';

export function clear(input: string): TerminalOutputType {
  const files = ['file1', 'file2', 'file3'];
  const output = emyptyOutput;
  output.output = files;

  return output;
}
