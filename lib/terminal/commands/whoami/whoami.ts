import { CommandInput } from '@/types/input';

export function whoami(input: CommandInput): Array<string> {
  return [`${input.user}`];
}
