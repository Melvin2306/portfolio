import { cd } from '@/lib/terminal/commands/cd/cd';
import { commands } from '@/lib/terminal/commands/commands/commands';
import { ls } from '@/lib/terminal/commands/ls/ls';
import { clear } from '@/lib/terminal/commands/clear/clear';
import { whoami } from '@/lib/terminal/commands/whoami/whoami';
import { pwd } from '@/lib/terminal/commands/pwd/pwd';
import { theme } from '@/lib/terminal/commands/theme/theme';
import { CommandMapping } from '@/types/commandMapping';
import { man } from './commands/man/man';
import { manual } from '@/lib/terminal/manual';

export const terminalCommands: CommandMapping[] = [
  {
    command: 'cd',
    description: 'Change directory',
    manual: manual.cd,
    usage: 'cd [directory]',
    function: cd,
  },
  {
    command: 'clear',
    description: 'Clear the terminal',
    manual: manual.clear,
    usage: 'clear',
    function: clear,
  },
  {
    command: 'commands',
    description: 'List all available commands',
    manual: manual.commands,
    usage: 'commands',
    function: commands,
  },
  {
    command: 'ls',
    description: 'List directory contents',
    manual: manual.ls,
    usage: 'ls',
    function: ls,
  },
  {
    command: 'man',
    description: 'Manual',
    manual: manual.man,
    usage: 'man [command]',
    function: man,
  },
  {
    command: 'pwd',
    description: 'Print working directory',
    manual: manual.pwd,
    usage: 'pwd',
    function: pwd,
  },
  {
    command: 'theme',
    description: 'Change the terminal theme',
    manual: manual.theme,
    usage: 'theme [color]',
    function: theme,
  },
  {
    command: 'whoami',
    description: 'Print the current user',
    manual: manual.whoami,
    usage: 'whoami',
    function: whoami,
  },
];
