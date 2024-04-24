import { cd } from '@/lib/terminal/commands/cd/cd';
import { clear } from '@/lib/terminal/commands/clear';
import { commands } from '@/lib/terminal/commands/commands/commands';
import { ls } from '@/lib/terminal/commands/ls/ls';
import { pwd } from '@/lib/terminal/commands/pwd';
import { whoami } from '@/lib/terminal/commands/whoami';
import { CommandMapping } from '@/types/commandMapping';

export const terminalCommands: CommandMapping[] = [
  {
    command: 'cd',
    description: 'Change directory',
    usage: 'cd [directory]',
    function: cd,
  },
  // {
  //   command: 'clear',
  //   description: 'Clear the terminal',
  //   usage: 'clear',
  //   function: clear,
  // },
  {
    command: 'commands',
    description: 'List all available commands',
    usage: 'commands',
    function: commands,
  },
  {
    command: 'ls',
    description: 'List directory contents',
    usage: 'ls',
    function: ls,
  },
  // {
  //   command: 'pwd',
  //   description: 'Print working directory',
  //   usage: 'pwd',
  //   function: pwd,
  // },
  // {
  //   command: 'whoami',
  //   description: 'Print the current user',
  //   usage: 'whoami',
  //   function: whoami,
  // },
];
