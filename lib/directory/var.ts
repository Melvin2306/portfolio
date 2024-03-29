export const varDir = {
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
