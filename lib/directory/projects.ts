import { allProjectsFile } from './files/all-projects';

export const projectsDir = {
  'all-projects': {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    contents: allProjectsFile,
  },
};
