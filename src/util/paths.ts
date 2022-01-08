import { path } from 'app-root-path';
import { join } from 'path';

/**
 * Represents the absolute path for the project's root directory.
 */
export const root: string = path;

/**
 * Represents the default directory to save logs into.
 */
export const logs: string = join(root, 'logs');
