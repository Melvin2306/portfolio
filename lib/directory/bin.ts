import { Directory } from '@/types/directory';

export const binDir: Directory = {
  bin: {
    type: 'directory',
    permissions: {
      read: ['guest', 'admin'],
    },
    contents: {
      ls: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'ls',
      },
      cat: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'cat',
      },
      cd: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'cd',
      },
      pwd: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'pwd',
      },
      clear: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'clear',
      },
      rm: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'rm',
      },
      mkdir: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'mkdir',
      },
      touch: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'touch',
      },
      mv: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'mv',
      },
      cp: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'cp',
      },
      find: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'find',
      },
      grep: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'grep',
      },
      echo: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'echo',
      },
      more: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'more',
      },
      less: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'less',
      },
      head: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'head',
      },
      tail: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'tail',
      },
      wc: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'wc',
      },
      sort: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'sort',
      },
      uniq: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'uniq',
      },
      chmod: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'chmod',
      },
      chown: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'chown',
      },
      chgrp: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'chgrp',
      },
      date: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'date',
      },
      cal: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'cal',
      },
      who: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'who',
      },
      w: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'w',
      },
      ps: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'ps',
      },
      kill: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'kill',
      },
      su: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'su',
      },
      sudo: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'sudo',
      },
      passwd: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'passwd',
      },
      useradd: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'useradd',
      },
      userdel: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'userdel',
      },
      usermod: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'usermod',
      },
      groupadd: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'groupadd',
      },
      groupdel: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'groupdel',
      },
      groupmod: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'groupmod',
      },
      groups: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'groups',
      },
      id: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'id',
      },
      last: {
        type: 'file',
        permissions: {
          read: ['guest', 'admin'],
        },
        visibility: 'visible',
        contents: 'last',
      },
    },
  },
};
