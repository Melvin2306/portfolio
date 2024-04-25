import { CommandInput } from '@/types/input';

type commandFunction = (input: CommandInput) => Array<string>;

export type CommandMapping = {
  command: string;
  description: string;
  manual: Array<string>;
  usage: string;
  function: commandFunction;
};
