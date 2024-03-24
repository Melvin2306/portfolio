import { cd } from '@/lib/terminal/commands/cd';
import { clear } from '@/lib/terminal/commands/clear';
import { help } from '@/lib/terminal/commands/help';
import { ls } from '@/lib/terminal/commands/ls';
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
  {
    command: 'clear',
    description: 'Clear the terminal',
    usage: 'clear',
    function: clear,
  },
  {
    command: 'help',
    description: 'List all available commands',
    usage: 'help',
    function: help,
  },
  {
    command: 'ls',
    description: 'List directory contents',
    usage: 'ls',
    function: ls,
  },
  {
    command: 'pwd',
    description: 'Print working directory',
    usage: 'pwd',
    function: pwd,
  },
  {
    command: 'whoami',
    description: 'Print the current user',
    usage: 'whoami',
    function: whoami,
  },
];
