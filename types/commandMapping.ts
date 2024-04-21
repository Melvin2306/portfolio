type commandFunction = (input: string) => Array<string>;

export type CommandMapping = {
  command: string;
  description: string;
  usage: string;
  function: commandFunction;
};
