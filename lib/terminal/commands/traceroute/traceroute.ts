import { CommandInput } from '@/types/input';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function traceroute(input: CommandInput): Array<string> {
  if (input.item === undefined) {
    return ['traceroute: missing host argument'];
  }
  const ipAddress1 = `${getRandomInt(255)}.${getRandomInt(255)}.${getRandomInt(255)}.${getRandomInt(255)}`;
  const ipAddress2 = `${getRandomInt(255)}.${getRandomInt(255)}.${getRandomInt(255)}.${getRandomInt(255)}`;
  const ipAddress3 = `${getRandomInt(255)}.${getRandomInt(255)}.${getRandomInt(255)}.${getRandomInt(255)}`;
  return [
    `traceroute to ${input.item} (${input.item}), 64 hops max, 40 byte packets`,
    `1  ${ipAddress1} (${ipAddress1})  ${getRandomInt(12)}.${getRandomInt(999)} ms  ${getRandomInt(12)}.${getRandomInt(999)} ms  ${getRandomInt(12)}.${getRandomInt(999)} ms`,
    `2  ${ipAddress2} (${ipAddress2})  ${getRandomInt(12)}.${getRandomInt(999)} ms  ${getRandomInt(12)}.${getRandomInt(999)} ms  ${getRandomInt(12)}.${getRandomInt(999)} ms`,
    `3  ${ipAddress3} (${ipAddress3})  ${getRandomInt(12)}.${getRandomInt(999)} ms !N *  ${getRandomInt(12)}.${getRandomInt(999)} ms !N`,
  ];
}
