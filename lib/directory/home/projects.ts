import { allProjectsFile } from '../files/projects/all-projects';
import { Directory } from '@/types/directory';
import { opinioFile } from '../files/projects/opinio';
import { slashFile } from '../files/projects/slash';
import { spotifyFile } from '../files/projects/spotify';
import { peachesFile } from '../files/projects/peaches';
import { hswProjectFile } from '../files/projects/hsw-project';

export const projectsDir: Directory = {
  'all-projects': {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: allProjectsFile,
  },
  opinio: {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: opinioFile,
  },
  slash: {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: slashFile,
  },
  spotify: {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: spotifyFile,
  },
  peaches: {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: peachesFile,
  },
  hswProject: {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: hswProjectFile,
  },
};
