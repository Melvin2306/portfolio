import { CommandInput } from '@/types/input';

export function clear(input: CommandInput): Array<string> {
  return ['clearCommandOutput'];
}
