import { path } from 'app-root-path';
import { join } from 'path';

import { Options } from '../types/options';

export const defaults: Options = {
  write: false,
  dir: join(path, 'logs'),
  date: '[ MM-dd-yyyy h:mm a ]',
  title: '%t: ',
  log: '%d %t%m',
  name: undefined,
  both: false,
};
