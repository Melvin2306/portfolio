import { homeDir } from './home';
import { varDir } from './var';
import { etcDir } from './etc';
import { binDir } from './bin';

export const directoryStructure = {
  '/': {
    type: 'directory',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: {
      homeDir,
      varDir,
      etcDir,
      binDir,
    },
  },
};
