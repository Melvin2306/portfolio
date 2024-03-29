import { allEducationFile } from './files/all-education';

export const educationDir = {
  'all-education': {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    contents: allEducationFile,
  },
};
