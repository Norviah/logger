import { ColorOptions } from './ColorOptions';
import { WriteOptions } from './WriteOptions';

export interface LoggingOptions extends WriteOptions {
  /**
   * Represents colors to apply for different aspects of a log.
   */
  colors?: ColorOptions;

  /**
   * The title of a log.
   * If not specified, a log won't have a title.
   */
  title?: string;
}
