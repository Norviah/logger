[@norviah/logger](README.md) › [Globals](globals.md)

## @norviah/logger

A simple logging system for `node.js` and `typescript`. With `Logger` & [Chalk](https://www.npmjs.com/package/chalk), you can log in a structured manner and, if need be, write logs into a file.

### Installation

`npm install @norviah/logger`

### Usage

```typescript

const { Logger } = require('@norviah/logger');
const logger = new Logger({ /** Options */ });

// If Logger is initialized with no given options,
// Logger will only print logs to the console. To tell Logger to
// write logs into a file, pass in a 'write' parameter of 'true'

logger = new Logger({ write: true });

// You can also pass in a directory to the 'dir' parameter,
// this value represents the directory that Logger will store files.

logger = new Logger({ write: true, dir: '/Users/norviah/Desktop' });

// To print output, use the 'print' method

logger.print('message', { title: 'title' }); // => [ MM-DD-YYYY h:mm a ] title: message

// With the format of a log being,
// [ MM-DD-YYYY h:mm a ] title: message
// date represents '[ MM-DD-YYYY h:mm a ]',
// title represents 'title:', and
// message represents 'message'

// By default, the colors when logging are
// date: gray,
// title (if one is given): gray, and
// message: white

// To change the colors for a certain part of a log,
// use the 'colors' object

logger.print('world', { title: 'hello', colors: { title: 'blue', message: 'red', date: 'yellow' } }); // => (yellow)[ MM-DD-YYYY h:mm a ](/yellow) (blue)hello:(/blue) (red)world(/red)

// In addition, Logger supports a few markdown syntax
// '**' for bold text.
// '~~' for strikethrough text.
// '*'  for italic text.
// '_'  for underline text. and
// '!'  for inverse colors.
// If you wrap a phrase around one or more of these, the type
// it represents will be applied to the phrase. For example,

logger.print('**__*hello world*_**');

// Will print 'hello world' in bold, underline, and in italics. Markdown syntax is also
// available for the title as well as other the other available methods.

logger.log('**world**', { title: '__hello__' }); // => [ MM-DD-YYYY h:mm a ] (underline)hello(/underline): (bold)world(/bold)

```

For more documentation, visit the [documentation](https://github.com/Norviah/logger/blob/master/docs) directory, specifically [here](https://github.com/Norviah/logger/blob/master/docs/classes/_index_.logger.md).
