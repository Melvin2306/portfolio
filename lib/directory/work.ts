import { allWorkFile } from './files/work/all-work';
import { Directory } from '@/types/directory';
import { dualStudiesFile } from './files/work/dual-studies';
import { encityFile } from './files/work/enercity';
import { suenaFile } from './files/work/suena';
import { ostromFile } from './files/work/ostrom';
import { carbyteFile } from './files/work/carbyte';

export const workDir: Directory = {
  'all-projects': {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: allWorkFile,
  },
  carbyte: {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: carbyteFile,
  },
  suena: {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: suenaFile,
  },
  ostrom: {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: ostromFile,
  },
  enercity: {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: encityFile,
  },
  'dual-studies': {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: dualStudiesFile,
  },
};
