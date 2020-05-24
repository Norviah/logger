import Chalk from 'chalk';
import { markdown } from './markdown';

/**
 * Applies the given color and markdown syntax to the message.
 * @param  message  The message to apply the color to.
 * @param  color    The color to apply to the message.
 * @return          The given message formatted with markdown and color.
 */
function format(message: string, color: typeof Chalk.Color | undefined): string {
  // Make sure that a color was given and
  // that the given color is supported by Chalk.
  if (!color || !Chalk[color]) {
    // Inform the user if they have provided
    // a color that isn't supported by Chalk.
    if (typeof color === 'string') {
      console.warn(`Chalk doesn't support the color '${color}', defaulting to 'white'.`);
    }

    color = 'white';
  }

  // Use Chalk to apply the given color to the message.
  message = Chalk[color](message);

  // Iterate through the supported markdown regexes to try
  // and find a match, if one is given, execute the function on the message.
  for (const [regex, func] of markdown) {
    message = message.replace(regex, `${func('$1')}`);
  }

  return message;
}

export { format };
