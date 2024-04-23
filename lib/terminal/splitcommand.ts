import { CommandSplit } from "@/types/input";

export function splitCommand(input: string): CommandSplit {
  const args = input.match(/(?:[^\s"]+|"[^"]*")+/g) || [];
  const command = args.shift() || '';
  let item = '';
  const flags = [];

  // Process the remaining arguments
  for (const arg of args) {
    // If it's a flag, add it to the flags array
    if (arg.startsWith('-')) {
      // Remove the dash and split flags if they are not GNU style long options
      const flag = arg.replace(/^-+/,'');
        flags.push(flag);
    } else if (!item) {
      // If the item has not been set yet, set it to the current argument
      item = arg.replace(/"/g, ''); // Remove quotes from the item if present
    }
    // Otherwise, ignore additional arguments as they would be invalid for simple commands
  }
  return {
    command: command,
    item: item,
    flags: flags,
  };
}