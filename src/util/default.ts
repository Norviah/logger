import { DeepRequired } from '../types/DeepRequired';

import { ColorOptions } from '../types/ColorOptions';
import { Format } from '../types/Format';
import { Options } from '../types/Options';

import * as paths from './paths';

/**
 * Default colors  for aspects of a log.
 */
const colors: DeepRequired<ColorOptions> = { date: 'gray', title: 'gray', content: 'white' };

/**
 * Default options for `Format`.
 */
const format: DeepRequired<Format> = { date: '[ MM-dd-yyyy h:mm a ]', title: '%t: ', general: '%d %t%c' };

/**
 * Default options.
 */
export const options: DeepRequired<Options> = { write: false, dir: paths.logs, both: false, format, colors };
