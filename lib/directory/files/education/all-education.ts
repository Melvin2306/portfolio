import { exchangeNtnuFile } from '../../files/education/exchange-ntnu';
import { codeUniFile } from '../../files/education/code-uni';
import { hswUniFile } from '../../files/education/hsw-uni';

export const allEducationFile = [
  ...exchangeNtnuFile,
  ...codeUniFile,
  ...hswUniFile,
];
