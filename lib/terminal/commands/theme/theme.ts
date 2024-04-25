import { CommandInput } from '@/types/input';
import { themeColors } from '@/lib/terminal/commands/theme/themeColors';

export function theme(input: CommandInput): Array<string> {
  if (input.item === undefined) {
    return ['No theme color selected - Usage: theme [color]'];
  }
  const newTheme = input.item;
  if (themeColors.includes(newTheme)) {
    return [`${newTheme}`];
  } else {
    return [`Invalid theme color - use 'man theme' to see available colors`];
  }
}
