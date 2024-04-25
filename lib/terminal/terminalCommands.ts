import { cd } from '@/lib/terminal/commands/cd/cd';
import { commands } from '@/lib/terminal/commands/commands/commands';
import { ls } from '@/lib/terminal/commands/ls/ls';
import { clear } from '@/lib/terminal/commands/clear/clear';
import { whoami } from '@/lib/terminal/commands/whoami/whoami';
import { pwd } from '@/lib/terminal/commands/pwd/pwd';
import { theme } from '@/lib/terminal/commands/theme/theme';
import { CommandMapping } from '@/types/commandMapping';
import { man } from './commands/man/man';

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
  {
    command: 'man',
    description: 'Manual',
    usage: 'man [command]',
    function: man,
  },
  {
    command: 'pwd',
    description: 'Print working directory',
    usage: 'pwd',
    function: pwd,
  },
  {
    command: 'theme',
    description: 'Change the terminal theme',
    usage: 'theme [color]',
    function: theme,
  },
  {
    command: 'whoami',
    description: 'Print the current user',
    usage: 'whoami',
    function: whoami,
  },
];
