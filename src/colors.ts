import { Color } from 'chalk';

/**
 * Represents the colors used for certain parts of the log.
 * The supported colors are the colors supported by Chalk, which can be viewed here:
 * https://github.com/chalk/chalk/blob/55816cdd4d25a86cc35b18e1e578a5b164f71aee/index.d.ts#L56.
 */
type Colors = {
  /**
   * Represents the color used for the date.
   */
  date?: typeof Color;

  /**
   * Represents the color used for the title.
   */
  title?: typeof Color;

  /**
   * Represents the color used for the message.
   */
  message?: typeof Color;
};

export { Colors };
