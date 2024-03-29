import { allWorkFile } from './files/all-work';
import { Directory } from '@/types/directory';

export const workDir: Directory = {
  'all-projects': {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: allWorkFile,
  },
};
