type commandFunction = (currentDirectory: string, currentUser: string, flags?: Array<string>, ) => Array<string>;

export type CommandMapping = {
  command: string;
  description: string;
  usage: string;
  function: commandFunction;
};
