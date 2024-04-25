import { CommandInput } from '@/types/input';

export function df(input: CommandInput): Array<string> {
  return [
    `Filesystem     512-blocks      Used Available Capacity iused      ifree %iused  Mounted on`,
    '/dev/disk3s1s1  965595304  20009280 691351080     3%  403755 3456755400    0%   /',
    'devfs                 396       396         0   100%     686          0  100%   /dev',
  ];
}
