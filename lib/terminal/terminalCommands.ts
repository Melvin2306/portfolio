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
import { echo } from './commands/echo/echo';
import { uname } from './commands/uname/uname';
import { ps } from './commands/ps/ps';
import { ifconfig } from './commands/ifconfig/ifconfig';
import { df } from './commands/df/df';
import { apt } from './commands/apt/apt';
import { traceroute } from './commands/traceroute/traceroute';

export const terminalCommands: CommandMapping[] = [
  {
    command: 'apt',
    manual: manual.apt,
    function: apt,
  },
  {
    command: 'cd',
    manual: manual.cd,
    function: cd,
  },
  {
    command: 'clear',
    manual: manual.clear,
    function: clear,
  },
  {
    command: 'commands',
    manual: manual.commands,
    function: commands,
  },
  {
    command: 'df',
    manual: manual.df,
    function: df,
  },
  {
    command: 'echo',
    manual: manual.echo,
    function: echo,
  },
  {
    command: 'ls',
    manual: manual.ls,
    function: ls,
  },
  {
    command: 'ifconfig',
    manual: manual.ifconfig,
    function: ifconfig,
  },
  {
    command: 'man',
    manual: manual.man,
    function: man,
  },
  {
    command: 'pwd',
    manual: manual.pwd,
    function: pwd,
  },
  {
    command: 'ps',
    manual: manual.ps,
    function: ps,
  },
  {
    command: 'uname',
    manual: manual.uname,
    function: uname,
  },
  {
    command: 'traceroute',
    manual: manual.traceroute,
    function: traceroute,
  },
  {
    command: 'theme',
    manual: manual.theme,
    function: theme,
  },
  {
    command: 'whoami',
    manual: manual.whoami,
    function: whoami,
  },
];
