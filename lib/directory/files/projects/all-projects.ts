import { opinioFile } from './opinio';
import { slashFile } from './slash';
import { spotifyFile } from './spotify';
import { peachesFile } from './peaches';
import { hswProjectFile } from './hsw-project';

export const allProjectsFile = [
  ...opinioFile,
  ...peachesFile,
  ...spotifyFile,
  ...slashFile,
  ...hswProjectFile,
];
