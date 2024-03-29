import { TerminalOutput as TerminalOutputType } from '@/types/output';

type commandFunction = (input: string) => TerminalOutputType;

export type CommandMapping = {
  command: string;
  description: string;
  usage: string;
  function: commandFunction;
};
