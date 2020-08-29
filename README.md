## @norviah/logger

A simple logging system for `node.js` and `Typescript`. With `Logger` and <code>[Chalk](https://www.npmjs.com/package/chalk)</code>, you can print in a structured and pretty manner. In addition, it's possible to save logs into a file.

### Installation

```
npm install @norviah/logger
```

### Usage

To change how `Logger` works, you may pass an object during initialization, note that all values are optional:
  - write `boolean`: Determines if logs should be written to a file.
  - dir `string`: The directory that logs will be saved into.
  - name `string`: The default name of the file that logs will be saved into.
  - date `string`: Represents the format for the date, in Unix formatting.
  - title `string`: Represents the format for the title.
    - `%t` will be replaced with the actual title.
  - format `string`: Represents the format for a log.
    - `%d`: will be replaced with the date,
    - `%t`: will be replaced with the title, and
    - `%m`: will be replaced with the message to log.

To print messages, use the `print` method, which takes two parameters:
  - message `string`: The message to print.
  - options `(Optional)`:
    - options.name `string`: The name that this specific log will be saved as, if this value isn't provided, `Logger` will default to the name given during initialization, and if a name wasn't given then, `Logger` will use `MM-DD-YYYY`.
    - options.title `string`: The title of the log, a log won't be printed if a title isn't given.
    - subDir `string`: This log will be saved in this sub-directory, or sub-directories, **in** the base directory. For example, if `dir: /Users/norviah/Desktop` was given at initialization, and this method was called with `subDir: base/sub/sub`, the log will be saved to `/Users/norviah/Desktop/base/sub/sub/MM-DD-YYYY.txt`.
    - colors `Object`: Represents colors used for parts of the log:
      - date `Color`: The color for the date.
      - title `Color`: The color for the title.
      - message `Color`: The color for the message.

The available colors are the colors that are supported by Chalk, which can be viewed [here](https://github.com/chalk/chalk/blob/master/index.d.ts#L56).
In addition, `Logger` supports a few markdown style as well:

  - '**' to embold text,
  - '~~' to strike-through text,
  - '*' to italicise text,
  - '_' to underline text, and
  - '!' to invert colors.

If you wrap a phrase around one or more of these symbols, the type it represents will be applied to the phrase. Markdown syntax is available for both logging and formatting parts of a log.

### Examples

This is a ***very*** basic example for `Logger` and what it can do. For more examples, take a look at the [documentation](./docs) directory, specifically [here](https://github.com/Norviah/logger/blob/master/docs/classes/_index_.logger.md).

```typescript
// Node.js
const { Logger } = require('@norviah/logger');

// Typescript
import { Logger } from '@norviah/logger';

let logger = new Logger({
  /** options */
});

// The default values being:
// options = {
//   write: false,
//   dir: join(path, 'logs'), // the sub-directory 'logs' under the root directory
//   date: '[ MM-dd-yyyy h:mm a ]',
//   title: '%t: ',
//   format: '%d %t%m',
// };

// If Logger is initialized with no options, Logger will only print to the
// console. To write logs into a file, pass in a 'write' parameter of true.
logger = new Logger({ write: true });

// You can also pass in 'dir' to represent the directory that Logger will
// save files to. Logger will not save logs if the 'write' paramter isn't true.
logger = new Logger({ write: true, dir: '/Users/norviah/Desktop' });
```
