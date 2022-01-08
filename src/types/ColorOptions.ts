import { Color } from './Color';

/**
 * Represents desired colors to print each section of a log. As `chalk` is used
 * to generate color, valid colors are colors that are supported by `chalk`.
 */
export interface ColorOptions {
  /**
   * Represents the color for the date.
   */
  date?: Color;

  /**
   * Represents the color for the title.
   */
  title?: Color;

  /**
   * Represents the color for the contents of a log.
   */
  content?: Color;
}
