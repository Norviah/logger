[@norviah/logger](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [Logger](_index_.logger.md)

# Class: Logger

A simple logging system.

## Hierarchy

* **Logger**

## Index

### Constructors

* [constructor](_index_.logger.md#constructor)

### Properties

* [ansi](_index_.logger.md#ansi)
* [format](_index_.logger.md#format)
* [options](_index_.logger.md#options)

### Methods

* [color](_index_.logger.md#color)
* [colorize](_index_.logger.md#colorize)
* [error](_index_.logger.md#error)
* [log](_index_.logger.md#log)
* [print](_index_.logger.md#print)
* [success](_index_.logger.md#success)
* [warn](_index_.logger.md#warn)

### Object literals

* [colors](_index_.logger.md#colors)

## Constructors

###  constructor

\+ **new Logger**(`options`: Partial‹[Options](../interfaces/_types_options_.options.md)›): *[Logger](_index_.logger.md)*

*Defined in [index.ts:33](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L33)*

Initialize a new Logger instance.

**`examples`** 
```typescript

import { Logger } from '@norviah/logger'; // typescript
const { Logger } = require('@norviah/logger'); // node.js

// Initialize a new instance with default values:
// options = {
//   write: false,
//   dir: join(path, 'logs'), // the sub-directory 'logs' under the root directory
//   date: '[ MM-dd-yyyy h:mm a ]',
//   title: '%t: ',
//   log: '%d %t%m',
// };
const logger = new Logger();

// Logs will be written to the sub-directory 'logs' in the root directory.
const logger = new Logger({ write: true });

// Logs will be written to the user's desktop.
const logger = new Logger({ write: true, dir: '/Users/norviah/Desktop' });

// By default, logs will be in the format:
// %d %t%m
// with &d representing the date,
// %t representing the title, and
// %m representing the message.

// To change the format of these values, you can use the 'date', 'title',
// and 'log' property. Note that the date is in unix formatting.

const logger = new Logger();
// => [ MM-DD-YYYY h:mm a ] title: message

const logger = new Logger({ title: '[ %t ]: ' });
// => [ MM-DD-YYYY h:mm a ] [ title ]: message

const logger = new Logger({ date: 'MM' })
// => MM title: message

new Logger({ log: '%m was logged%tat %d.', title: ' with the title, %t, ' }).print('hello', { title: 'title' });
// => [message] was logged with the title, [title], at [ MM-DD-YYYY h:mm a ].

// The title isn't logged if a title isn't given.

```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | Partial‹[Options](../interfaces/_types_options_.options.md)› | defaults | Options for the logging system. |

**Returns:** *[Logger](_index_.logger.md)*

## Properties

###  ansi

• **ansi**: *RegExp* = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g

*Defined in [index.ts:23](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L23)*

Matches all ANSI codes in a string.

___

###  format

• **format**: *Pick‹[Options](../interfaces/_types_options_.options.md), "date" | "title" | "format"›*

*Defined in [index.ts:33](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L33)*

Represents the format for logs.

___

###  options

• **options**: *[Options](../interfaces/_types_options_.options.md)*

*Defined in [index.ts:18](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L18)*

Options for the system.

## Methods

###  color

▸ **color**(`color`: [Color](../modules/_types_color_.md#color), `message`: string): *void*

*Defined in [index.ts:290](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L290)*

Applies the given color to the message and prints it into the console.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`color` | [Color](../modules/_types_color_.md#color) | The color to apply to the message. |
`message` | string | The message.  |

**Returns:** *void*

___

###  colorize

▸ **colorize**(`color`: [Color](../modules/_types_color_.md#color), `message`: string): *string*

*Defined in [index.ts:281](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L281)*

Applies the given color to the message and returns it.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`color` | [Color](../modules/_types_color_.md#color) | The color to apply to the message. |
`message` | string | The message. |

**Returns:** *string*

The message formatted with the color and markdown syntax.

___

###  error

▸ **error**(`message`: string, `options`: Partial‹[LoggingOptions](../interfaces/_types_loggingoptions_.loggingoptions.md)›): *void*

*Defined in [index.ts:229](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L229)*

A shortcut to output an error, the title is set to 'ERROR' and is red.

**`examples`** 
```typescript
logger.error('message');
// => [ MM-DD-YYYY ] (red)ERROR(/red): message
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | The message to print. |
`options` | Partial‹[LoggingOptions](../interfaces/_types_loggingoptions_.loggingoptions.md)› | { title: 'ERROR', colors: { title: 'red' } } | Options for logging. |

**Returns:** *void*

___

###  log

▸ **log**(`message`: string, `options`: Partial‹[LoggingOptions](../interfaces/_types_loggingoptions_.loggingoptions.md)›): *void*

*Defined in [index.ts:271](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L271)*

A shortcut to output a log, the title is 'LOG' and is the blue.

**`examples`** 
```typescript
logger.log('message');
// => [ MM-DD-YYYY ] (blue)LOG(/blue): message
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | The message to print. |
`options` | Partial‹[LoggingOptions](../interfaces/_types_loggingoptions_.loggingoptions.md)› | { title: 'LOG', colors: { title: 'blue' } } | Options for logging. |

**Returns:** *void*

___

###  print

▸ **print**(`message`: string, `options`: Partial‹[LoggingOptions](../interfaces/_types_loggingoptions_.loggingoptions.md)›): *void*

*Defined in [index.ts:170](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L170)*

Prints the message to the console with the given colors applied, and, if
wanted, saves the log to a file.

**`examples`** 
```typescript

const logger = new Logger({ write: true, date: '[ MM-dd-yyyy h:mm a ]', title: '%t: ', message: '%d %t%m' });

logger.print(':)');
// => [ MM-DD-YYYY h:mm a ] :)

logger.print('world', { title: 'hello' });
// => [ MM-DD-YYYY h:mm a ] hello: world

// This log is written into the directory 'sub' in the sub-directory
// 'logs' under the project's root directory.
logger.print(':)', { subDir: 'sub' });

// This log is written into the sub-directory 'sub/sub', each sub-directory
// is created if it doesn't exist.
logger.print(':)', { subDir: 'sub/sub'});

// This log is saved under the sub-directory 'logs' as 'smile.txt', if a
// name isn't given, it's saved as 'MM-DD-YYY.txt'.
logger.print(':)', { name: 'smile' });

// With the format of a log as: [ MM-dd-YYYY hh:mm a ] title: message,
// date represents '[ MM-DD-YYYY h:mm a ]',
// title represents '%t: ', and
// message represents 'message'.

// By default, the colors when logging are:
// date: gray,
// title (if one is given): gray, and
// message: white.
// The supported colors are the colors supported by Chalk, which are:
// https://github.com/chalk/chalk/blob/master/index.d.ts#L56.

logger.print('world', { title: 'hello' });
// => (gray)[ MM-DD-YYYY h:mm a ](/gray) (gray)hello:(/gray) (white)world(/white)

logger.print('world', { colors: { message: 'red' } });
// => (gray)[ MM-DD-YYYY h:mm a ](/gray) (red)world(/red)

logger.print('world', { title: 'hello', colors: { title: 'blue', message: 'blue' } });
// => (gray)[ MM-DD-YYYY h:mm a ](/gray) (blue)hello:(/blue) (blue)world(/blue)

// In addition, a few markdown syntax are supported:
// '**' to embold text,
// '~~' to strike-through text,
// '*' to italicise text,
// '_' to underline text, and
// '!' to invert colors.
// If you wrap a phrase around one or more of these symbols, the type it represents
// will be applied to the phrase, for example:

logger.print('**__*hello world*__**');

// Will print 'hello world' in bold, underline, and italics. Markdown
// syntax is also available for the title and date, for printing and for
// the format.

logger.log('**world**', { title: '__hello__' });
// => [ MM-DD-YYYY h:mm a ] (u)hello(/u): (b)world(/b)

new Logger({ date: '[ __MM__-dd **hh** ]' }).print('***world***', { title: '__hello__', colors: { date: 'red', title: 'yellow' } });
// => (red)[ (u)MM(/u)-DD (b)HH(/b) ](/red) (yellow)(u)hello:(/u)(/yellow) (white)(i)(b)world(/b)(/i)(/white)

```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | The message to log. |
`options` | Partial‹[LoggingOptions](../interfaces/_types_loggingoptions_.loggingoptions.md)› | { colors: this.colors } | Options for the log. |

**Returns:** *void*

___

###  success

▸ **success**(`message`: string, `options`: Partial‹[LoggingOptions](../interfaces/_types_loggingoptions_.loggingoptions.md)›): *void*

*Defined in [index.ts:243](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L243)*

A shortcut to output a success, the title is 'OK' and is the green.

**`examples`** 
```typescript
logger.success('message');
// => [ MM-DD-YYYY ] (green)OK(/green): message
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | The message to print. |
`options` | Partial‹[LoggingOptions](../interfaces/_types_loggingoptions_.loggingoptions.md)› | { title: 'OK', colors: { title: 'green' } } | Options for logging. |

**Returns:** *void*

___

###  warn

▸ **warn**(`message`: string, `options`: Partial‹[LoggingOptions](../interfaces/_types_loggingoptions_.loggingoptions.md)›): *void*

*Defined in [index.ts:257](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L257)*

A shortcut to output a warning, the title is 'WARN' and is the yellow.

**`examples`** 
```typescript
logger.warn('message');
// => [ MM-DD-YYYY ] (yellow)WARNING(/yellow): message
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | The message to print. |
`options` | Partial‹[LoggingOptions](../interfaces/_types_loggingoptions_.loggingoptions.md)› | { title: 'WARNING', colors: { title: 'yellow' } } | Options for logging. |

**Returns:** *void*

## Object literals

###  colors

### ▪ **colors**: *object*

*Defined in [index.ts:28](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L28)*

Represents the default colors used when logging.

###  date

• **date**: *"gray"* = "gray"

*Defined in [index.ts:28](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L28)*

###  message

• **message**: *"white"* = "white"

*Defined in [index.ts:28](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L28)*

###  title

• **title**: *"gray"* = "gray"

*Defined in [index.ts:28](https://github.com/Norviah/logger/blob/7f44bca/src/index.ts#L28)*
