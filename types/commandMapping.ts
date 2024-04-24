import { CommandInput } from '@/types/input';

type commandFunction = (input: CommandInput) => Array<string>;

export type CommandMapping = {
  command: string;
  description: string;
  usage: string;
  function: commandFunction;
};
