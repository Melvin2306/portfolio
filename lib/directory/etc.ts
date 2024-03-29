export const etcDir = {
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
        contents: 'hosts',
      },
    },
  },
};
