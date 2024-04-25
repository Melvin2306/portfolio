import { CommandInput } from '@/types/input';

export function uname(input: CommandInput): Array<string> {
  // Use uname -s to display the kernel name.
  // Use uname -n to display the hostname.
  // Use uname -r to display the kernel release.
  // Use uname -v to display the kernel version.
  // Use uname -m to display the machine hardware name.
  return [`${input.item}`];
}
