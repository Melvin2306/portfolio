import { allWorkFile } from './files/all-work';

export const workDir = {
  'all-projects': {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    contents: allWorkFile,
  },
};
