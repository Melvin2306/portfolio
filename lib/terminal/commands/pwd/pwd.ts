import { CommandInput } from '@/types/input';

export function pwd(input: CommandInput): Array<string> {
  return [`${input.directory}`];
}
