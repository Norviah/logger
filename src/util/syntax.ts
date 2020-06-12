import { markdown } from './markdown';

/**
 * Applies various types of markdown syntax to the message.
 * @param  message The message to apply markdown to.
 * @return         The message with markdown syntax applied.
 */
export function syntax(message: string): string {
  for (const [regex, func] of markdown) {
    message = message.replace(regex, `${func('$1')}`);
  }

  return message;
}
