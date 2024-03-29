import { TerminalOutput as TerminalOutputType } from '@/types/output';
import { emyptyOutput } from '@/lib/emptyOutput';

export function pwd(input: string): TerminalOutputType {
  const files = ['file1', 'file2', 'file3'];
  const output = emyptyOutput;
  output.output = files;

  return output;
}
