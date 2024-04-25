import { CommandInput } from '@/types/input';

export function traceroute(input: CommandInput): Array<string> {
  if (input.item === undefined) {
    return ['traceroute: missing host argument'];
  }
  return [
    `traceroute to ${input.item} (${input.item}), 64 hops max, 40 byte packets`,
    '1  10.65.0.1 (10.65.0.1)  17.082 ms  3.356 ms  3.032 ms',
    '2  185.199.104.13 (185.199.104.13)  4.052 ms  4.159 ms  3.440 ms',
    '3  185.199.104.129 (185.199.104.129)  4.391 ms !N *  4.326 ms !N',
  ];
}
