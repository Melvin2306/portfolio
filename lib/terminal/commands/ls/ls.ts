import { directoryStructure } from '@/lib/directory/directory-structure'; // Import the directory structure
import { Directory } from '@/types/directory'; // Import the Directory type
import { CommandInput } from '@/types/input';

export function ls(input: CommandInput): Array<string> {
  // Retrieve the current directory from the input
  // @ts-ignore
  const directory = directoryStructure[input.directory];
  console.log('directory input:', input.directory);
  console.log('directory structure:', directory);
  console.log('directory:', directory.contents);
  if (directory.contents && directory.contents['home']) {
    console.log('directory home:', directory.contents['home']);
    console.log('directory home content:', directory.contents['home'].contents);
  } else {
    console.log('directory home: undefined');
  }

  // If the directory does not exist, return an error message
  if (!directory) {
    return [`ls: cannot access '${input.directory}': No such directory`];
  }

  // Check for permissions for the current user
  if (!directory.permissions.read.includes(input.user)) {
    return [`ls: permission denied: ${input.directory}`];
  }

  // Function to determine if an item is visible
  const isVisible = (item: string, contents: Directory): boolean => {
    return (
      input.flags?.includes('-a') || contents[item].visibility !== 'hidden'
    );
  };

  // Get the names of all items in the directory that are visible
  const items = Object.keys(directory.contents).filter((item) =>
    isVisible(item, directory.contents as Directory)
  );

  return items;
}
