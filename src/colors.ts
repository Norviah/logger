import { Color } from 'chalk';

/**
 * Represents the colors for certain parts of a log,
 * the colors that can be used are the colors
 * supported by 'Chalk', which can be viewed here:
 * https://github.com/chalk/chalk/blob/55816cdd4d25a86cc35b18e1e578a5b164f71aee/index.d.ts#L56.
 */
type Colors = {
  /**
   * Represents the color for the date,
   * defaults to gray.
   */
  date?: typeof Color;

  /**
   * Represents the color for the title,
   * defaults to gray.
   */
  title?: typeof Color;

  /**
   * Represents the color for the message,
   * defaults to white.
   */
  message?: typeof Color;
};

export { Colors };
