import { allEducationFile } from '../files/education/all-education';
import { Directory } from '@/types/directory';
import { exchangeNtnuFile } from '../files/education/exchange-ntnu';
import { codeUniFile } from '../files/education/code-uni';
import { hswUniFile } from '../files/education/hsw-uni';

export const educationDir: Directory = {
  'all-education': {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: allEducationFile,
  },
  'exchange-hsw': {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: exchangeNtnuFile,
  },
  'code-uni': {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: codeUniFile,
  },
  'hsw-uni': {
    type: 'file',
    permissions: {
      read: ['guest', 'admin'],
    },
    visibility: 'visible',
    contents: hswUniFile,
  },
};
