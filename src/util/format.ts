import chalk from 'chalk';

import { syntax } from './syntax';
import { Color } from '../types/color';

/**
 * Applies the given color to the message.
 * @param  message The message to apply the color to.
 * @param  color   The color to apply to the message.
 * @return         The given message formatted with markdown and color.
 */
export function format(message: string, color: Color | undefined): string {
  // Make sure that a color was given and that it's supported by Chalk.
  if (!color || !chalk[color]) {
    // If the parameter is a string, we know that the given color isn't
    // supported by Chalk, so we inform the user of their mistake.
    if (typeof color === 'string') {
      console.warn(`Chalk doesn't support the color '${color}', defaulting to 'white'.`);
    }

    color = 'white';
  }

  // Use Chalk to apply the given color to the message.
  message = chalk[color](message);

  // If the message has markdown syntax, apply it using Chalk.
  message = syntax(message);

  return message;
}
