import { existsSync, mkdirSync } from 'fs';
import { sep, join } from 'path';
import Chalk from 'Chalk';

/**
 * @param  base The base directory returned from the last loop.
 * @param  sub  The sub directory from the current element to create in the base directory.
 * @return      The base and sub directory combined as an absolute path.
 */
function loop(base: string, sub: string): string {
  // Initialize a new directory by joining the
  // previous directory with the current directory.
  const dir = join(base, sub);

  // Create the directory if it doesn't exist.
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }

  return dir;
}

/**
 * Creates the sub-directories in the base directory recursively,
 * if it doesn't exist. Meaning that if 'mkdir('Users/name/Desktop', 'base/sub/sub')'
 * is given, it checks to see if the directory 'base' exists within 'Users/name/Desktop'
 * and creates it if not, then creates the 'sub' directory in 'base', and
 * does the same thing for the sub-directory 'sub' in 'sub'.
 * @param base The base directory, this directory isn't touched as we know it exists.
 * @param sub  The sub-directories to create within the base directory.
 */
function mkdir(base: string, sub: string): void {
  // First check to see if the whole directory
  // exists, as we'll be wasting resources if it does.
  if (existsSync(join(base, sub))) {
    return;
  }

  // Initialize a list of sub-directories to create,
  // divided by the OS's separator for directories.
  const dirs = sub.split(sep);

  // The reduce method allows you to execute a function on
  // every element in an array. Each time the function executes, it
  // returns a value and the next loop will have a reference to
  // the value. The function takes two elements: the first being
  // the value returned from the last loop, the second being
  // the current element. The reduce also takes an optional parameter,
  // which will be the starting value for the function.

  // So, we call the function 'loop' on the array of sub-directories
  // with the base directory. For example, let's say we have:
  //
  //   mkdir('Users/name/Desktop', 'base/sub/sub')
  //   dirs: ['base', 'sub', 'sub']
  //   starting value: Users/name/desktop
  //
  // With every iteration, we join the value returned from
  // the last loop, which will be a directory, and the current element
  // and check to see if that directory exists and create it if
  // it doesn't. Once created, we return the new directory.
  // Note that 'base' is the starting value, so, for the first loop of
  // our example, we have:
  //
  //   Returned value (which is the starting value for the first loop): Users/name/Desktop
  //   Current element: base
  //   We join these variables and get: Users/name/Desktop/base
  //   If it doesn't exist, create it.
  //   Return: 'Users/name/Desktop/base'
  //
  // For the next loop, we have:
  //
  //   Returned value: Users/name/Desktop/base
  //   Current element: sub
  //   Join these variables and get: Users/name/Desktop/base/sub
  //   Create it if it doesn't exist.
  //   Return: Users/name/Desktop/base/sub
  //
  // And do the same process for the rest of the iterations.
  dirs.reduce(loop, base);
}

/**
 * Applies the given color to the message, if Chalk doesn't
 * support the color, apply the default color instead.
 * @param message  The message.
 * @param color    The color to apply to the message.
 * @param defaults If the given color isn't supported, this color is used.
 * @return         The given message with the given color applied to it.
 */
function format(message: string, color: typeof Chalk.Color | undefined, defaults: typeof Chalk.Color): string {
  // Make sure that the given color exists and that it is supported by Chalk.
  if (!color || !Chalk[color]) {
    // If the given color doesn't exist and is a
    // string, inform the user that they gave a non-supported color.
    if (typeof color === 'string') {
      console.log(`Chalk doesn't support the color '${color}', defaulting to '${defaults}'.`);
    }

    color = defaults;
  }

  // Apply the color to the message and return the result.
  return Chalk[color](message);
}

export { format, mkdir };
