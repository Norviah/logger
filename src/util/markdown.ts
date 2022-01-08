import chalk from 'chalk';

/**
 * Represents the supported markdown syntax for logging.
 * Each desired effect contains an regular expression that matches the desired
 * markdown syntax, along with the function from `chalk` to apply.
 */
export const markdown = {
  /**
   * Matches `**[string]**`, resulting in the given string to be bold.
   */
  bold: { expression: /\*\*(.*?)\*\*/g, exec: chalk.bold },

  /**
   * Matches `~~[string]~~`, resulting in the given string having a horizontal
   * line through the center.
   */
  strikethrough: { expression: /~~(.*?)~~/g, exec: chalk.strikethrough },

  /**
   * Matches `*[string]*`, resulting in making the given string italic.
   */
  italic: { expression: /\*(.*?)\*/g, exec: chalk.italic },

  /**
   * Matches `__[string]__`, putting a horizontal line under the given string.
   */
  underline: { expression: /__(.*?)__/g, exec: chalk.underline },

  /**
   * Matches `!![string]!!`, inverting the background and foregound colors.
   */
  inverse: { expression: /!!(.*?)!!/g, exec: chalk.inverse },
};
