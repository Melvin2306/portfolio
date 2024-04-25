import { CommandInput } from '@/types/input';
import { themeColors } from '@/lib/terminal/commands/theme/themeColors';

export function man(input: CommandInput): Array<string> {
  if (input.item === 'theme') {
    return [
      `Usage: theme [color] - Available colors: ${themeColors.join(', ')}`,
    ];
  }
  return ['No manual entry for this command'];
}
