import { allProjectsFile } from './files/all-projects';
import { Directory } from '@/types/directory';

export const projectsDir: Directory = {
  'all-projects': {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: allProjectsFile,
  },
};
