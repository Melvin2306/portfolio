import { TerminalOutput as TerminalOutputType } from '@/types/output';
import { emyptyOutput } from '@/lib/emptyOutput';
import { directoryStructure } from '@/lib/directory/directory-structure';
import { CommandInput } from '@/types/input';

export function cd(input: CommandInput): string {
  const files = ['file1', 'file2', 'file3'];
  const output = files;

  return output;
}
