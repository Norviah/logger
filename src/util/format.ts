import { Color } from '../types/Color';
import chalk from 'chalk';

import { markdown } from './markdown';

/**
 * Applies desired colors and markdown syntax into the given string.
 * @param string The string to format.
 * @param color  The color to apply to the message.
 * @returns      The given string formatted with markdown and color.
 */
export function format(string: string, color: Color = 'white'): string {
  // `format` is the main function for `Logger` that formats logs with desired
  // colors and, additionally, looks for any markdown syntax within the given
  // string, applying it via `chalk` if any are found.

  // We'll apply the desired color to the string. If `chalk` doesn't support the
  // specified color, we'll opt to `white`.
  if (!chalk[color]) {
    color = 'white';
  }

  string = chalk[color](string);

  // Next we'll look for any supported markdown syntax using `markdown`.
  // For any found syntax, we'll apply the specified `chalk` function to it.
  for (const syntax in markdown) {
    string = string.replace(markdown[syntax as keyof typeof markdown].expression, `${markdown[syntax as keyof typeof markdown].exec('$1')}`);
  }

  return string;
}
