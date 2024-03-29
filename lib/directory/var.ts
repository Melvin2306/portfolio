import { Directory } from '@/types/directory';

export const varDir: Directory = {
  var: {
    type: 'directory',
    permissions: {
      read: ['guest', 'admin'],
    },
    contents: {
      log: {
        type: 'directory',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: {
          syslog: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'syslog',
          },
        },
      },
    },
  },
};
