import { allEducationFile } from './files/all-education';
import { Directory } from '@/types/directory';

export const educationDir: Directory = {
  'all-education': {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: allEducationFile,
  },
};
