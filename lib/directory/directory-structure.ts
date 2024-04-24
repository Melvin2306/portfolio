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
      home: homeDir,
      var: varDir,
      etc: etcDir,
      bin: binDir,
    },
  },
};
