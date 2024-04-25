import { CommandInput } from '@/types/input';

export function commands(input: CommandInput): Array<string> {
  const commands = [
    'apt       - package management utility for Debian based systems. Usage: apt [options] [command]',
    'cd        - change directory. Usage: cd [directory]',
    'clear     - clear the terminal screen. Usage: clear',
    'commands  - list all available commands. Usage: commands',
    'df        - report file system disk space usage. Usage: df [options]',
    'echo      - display a line of text. Usage: echo [text]',
    'ifconfig  - configure network interface parameters. Usage: ifconfig [options]',
    'ls        - list directory contents. Usage: ls',
    'man       - manual page for a command. Usage: man [command]',
    'ps        - report a snapshot of the current processes. Usage: ps [options]',
    'pwd       - print working directory. Usage: pwd',
    'traceroute - print the route packets take to network host. Usage: traceroute [options] [host]',
    'theme     - change the terminal theme. Usage: theme [color]',
    'uname     - print system information. Usage: uname [options]',
    'whoami    - print the current user. Usage: whoami',
  ];
  const output = commands;

  return output;
}
