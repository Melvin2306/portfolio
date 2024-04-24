export type TerminalInput = {
  user: string;
  directory: string;
  command: string;
};

export type CommandSplit = {
  command: string;
  item: string;
  flags: Array<string>;
};

export type CommandInput = {
  directory: string;
  user: string;
  item?: string;
  flags?: Array<string>;
};
