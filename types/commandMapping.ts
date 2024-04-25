import { CommandInput } from '@/types/input';

type commandFunction = (input: CommandInput) => Array<string>;

export type CommandMapping = {
  command: string;
  manual: Array<string>;
  function: commandFunction;
};
