import { allVoluntaryFile } from '../files/voluntary/all-voluntary';
import { Directory } from '@/types/directory';
import { chancenFile } from '../files/voluntary/chancen';
import { refereeFile } from '../files/voluntary/referee';
import { sc1File } from '../files/voluntary/sc1';
import { sc2File } from '../files/voluntary/sc2';
import { slashFile } from '../files/voluntary/slash';

export const allVoluntaryDir: Directory = {
  'all-voluntary': {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: allVoluntaryFile,
  },
  chancen: {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: chancenFile,
  },
  referee: {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: refereeFile,
  },
  sc1: {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: sc1File,
  },
  sc2: {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: sc2File,
  },
  slash: {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: slashFile,
  },
};
