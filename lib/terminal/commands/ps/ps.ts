import { CommandInput } from '@/types/input';

export function ps(input: CommandInput): Array<string> {
  return [
    ` PID TTY TIME CMD`,
    '44077 ttys001    0:00.17 /bin/zsh -il',
    '16499 ttys004    0:00.09 -zsh',
  ];
}
