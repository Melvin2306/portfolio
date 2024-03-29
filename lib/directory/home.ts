import { educationDir } from './education';
import { aboutFile } from './files/about';
import { allEducationFile } from './files/all-education';
import { allWorkFile } from './files/all-work';
import { contactFile } from './files/contact';
import { projectsDir } from './projects';
import { workDir } from './work';

export const homeDir = {
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
        contents: aboutFile,
      },
      projects: {
        type: 'directory',
        permissions: {
          read: ['guest', 'admin'],
        },
        contents: {
          projectsDir,
        },
      },
      work: {
        type: 'directory',
        permissions: {
          read: ['guest', 'admin'],
        },
        contents: {
          workDir,
        },
      },
      education: {
        type: 'directory',
        permissions: {
          read: ['guest', 'admin'],
        },
        contents: {
          educationDir,
        },
      },
      contact: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        contents: contactFile,
      },
    },
  },
};
