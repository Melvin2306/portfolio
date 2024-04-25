import { CommandInput } from '@/types/input';

export function echo(input: CommandInput): Array<string> {
  if (input.item === undefined) {
    return ['No command specified'];
  } else {
    return [`${input.item}`];
  }
}
