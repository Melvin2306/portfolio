import { directoryStructure } from '@/lib/directory/directory-structure'; // Import the directory structure
import { Directory } from '@/types/directory'; // Import the Directory type
import { useDirectory } from '@/context/DirectoryContext'; // Import the useDirectory hook

export function ls(input: string): Array<string> {
  const { currentDirectory } = useDirectory(); // Use the hook to get the current directory

  // Access the current directory's contents from the directory structure
  const directoryContents: Directory = directoryStructure[currentDirectory]?.contents;
  if (!directoryContents) {
    return [`ls: cannot access '${currentDirectory}': No such file or directory`];
  }

  // Filter out the contents to return only visible items and sort them
  const visibleItems = Object.entries(directoryContents)
    .filter(([_, item]) => item.visibility === 'visible')
    .map(([name, _]) => name)
    .sort();

  return visibleItems;
}