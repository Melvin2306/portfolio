type commandFunction = (input: string) => string;

export type CommandMapping = {
  command: string;
  description: string;
  usage: string;
  function: commandFunction;
};
