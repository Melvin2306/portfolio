export const directoryStructure = {
  '/': {
    type: 'directory',
    permissions: {
      read: ['guest', 'admin'],
    },
    contents: {
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
            contents: 'about.txt',
          },
          projects: {
            type: 'directory',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: {
              'all-projects': {
                type: 'file',
                permissions: {
                  read: ['guest', 'admin'],
                },
                contents: 'all-projects.txt',
              },
              portfolio: {
                type: 'directory',
                permissions: {
                  read: ['guest', 'admin'],
                },
                contents: {},
              },
            },
          },
          work: {
            type: 'directory',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: {
              'all-work': {
                type: 'file',
                permissions: {
                  read: ['guest', 'admin'],
                },
                contents: 'all-work.txt',
              },
              internships: {
                type: 'directory',
                permissions: {
                  read: ['guest', 'admin'],
                },
                contents: {},
              },
              'full-time': {
                type: 'directory',
                permissions: {
                  read: ['guest', 'admin'],
                },
                contents: {},
              },
            },
          },
          education: {
            type: 'directory',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: {
              'all-education': {
                type: 'file',
                permissions: {
                  read: ['guest', 'admin'],
                },
                contents: 'all-education.txt',
              },
              'high-school': {
                type: 'directory',
                permissions: {
                  read: ['guest', 'admin'],
                },
                contents: {
                  'high-school.txt': {
                    type: 'file',
                    permissions: {
                      read: ['guest', 'admin'],
                    },
                    contents: 'high-school.txt',
                  },
                },
              },
              undergraduate: {
                type: 'directory',
                permissions: {
                  read: ['guest', 'admin'],
                },
                contents: {
                  'undergraduate.txt': {
                    type: 'file',
                    permissions: {
                      read: ['guest', 'admin'],
                    },
                    contents: 'undergraduate.txt',
                  },
                },
              },
              graduate: {
                type: 'directory',
                permissions: {
                  read: ['guest', 'admin'],
                },
                contents: {
                  'graduate.txt': {
                    type: 'file',
                    permissions: {
                      read: ['guest', 'admin'],
                    },
                    contents: 'graduate.txt',
                  },
                },
              },
            },
          },
          contact: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'contact.txt',
          },
        },
      },
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
            contents: 'ls',
          },
          cat: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'cat',
          },
          cd: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'cd',
          },
          pwd: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'pwd',
          },
          clear: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'clear',
          },
          rm: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'rm',
          },
          mkdir: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'mkdir',
          },
          touch: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'touch',
          },
          mv: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'mv',
          },
          cp: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'cp',
          },
          find: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'find',
          },
          grep: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'grep',
          },
          echo: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'echo',
          },
          more: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'more',
          },
          less: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'less',
          },
          head: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'head',
          },
          tail: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'tail',
          },
          wc: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'wc',
          },
          sort: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'sort',
          },
          uniq: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'uniq',
          },
          chmod: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'chmod',
          },
          chown: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'chown',
          },
          chgrp: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'chgrp',
          },
          date: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'date',
          },
          cal: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'cal',
          },
          who: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'who',
          },
          w: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'w',
          },
          ps: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'ps',
          },
          kill: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'kill',
          },
          su: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'su',
          },
          sudo: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'sudo',
          },
          passwd: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'passwd',
          },
          useradd: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'useradd',
          },
          userdel: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'userdel',
          },
          usermod: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'usermod',
          },
          groupadd: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'groupadd',
          },
          groupdel: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'groupdel',
          },
          groupmod: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'groupmod',
          },
          groups: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'groups',
          },
          id: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'id',
          },
          last: {
            type: 'file',
            permissions: {
              read: ['guest', 'admin'],
            },
            contents: 'last',
          },
        },
      },
    },
  },
};
