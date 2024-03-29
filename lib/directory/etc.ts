import { Directory } from '@/types/directory';

export const etcDir: Directory = {
  etc: {
    type: 'directory',
    permissions: {
      read: ['guest', 'admin'],
    },
    contents: {
      hosts: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'hosts',
      },
    },
  },
};
