import { Directory } from '@/types/directory';
import { educationDir } from './home/education';
import { aboutFile } from './files/about';
import { contactFile } from './files/contact';
import { projectsDir } from './home/projects';
import { workDir } from './home/work';

export const homeDir: Directory = {
  home: {
    type: 'directory',
    permissions: {
      read: ['guest', 'admin'],
    },
    contents: {
      about: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: aboutFile,
      },
      projects: {
        type: 'directory',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: {
          projectsDir,
        },
      },
      work: {
        type: 'directory',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: {
          workDir,
        },
      },
      education: {
        type: 'directory',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: {
          educationDir,
        },
      },
      contact: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: contactFile,
      },
    },
  },
};
