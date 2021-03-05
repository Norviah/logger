import { ColorOptions } from './colorOptions';
import { WriteOptions } from './writeOptions';

export type LoggingOptions = WriteOptions & {
  /**
   * Represents colors for different aspects of a log.
   */
  colors: ColorOptions;
};
