import { chancenFile } from '../../files/voluntary/chancen';
import { refereeFile } from '../../files/voluntary/referee';
import { sc1File } from '../../files/voluntary/sc1';
import { sc2File } from '../../files/voluntary/sc2';
import { slashFile } from '../../files/voluntary/slash';

export const allVoluntaryFile = [
  ...slashFile,
  ...sc1File,
  ...sc2File,
  ...chancenFile,
  ...refereeFile,
];
