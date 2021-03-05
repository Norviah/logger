import { Color } from './color';

/**
 * Represents colors for different aspects of a log.
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
   * Represents the color for the message.
   */
  message?: Color;
}
