[@norviah/logger](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [Logger](_index_.logger.md)

# Class: Logger

A simple logging system.

## Hierarchy

* **Logger**

## Index

### Constructors

* [constructor](_index_.logger.md#constructor)

### Properties

* [regex](_index_.logger.md#private-regex)

### Methods

* [color](_index_.logger.md#color)
* [colorize](_index_.logger.md#colorize)
* [error](_index_.logger.md#error)
* [log](_index_.logger.md#log)
* [print](_index_.logger.md#print)
* [success](_index_.logger.md#success)
* [warn](_index_.logger.md#warn)

### Object literals

* [options](_index_.logger.md#private-options)

## Constructors

###  constructor

\+ **new Logger**(`options`: [Options](../modules/_options_.md#options)): *[Logger](_index_.logger.md)*

*Defined in [index.ts:23](https://github.com/norviah/logger/blob/0522667/src/index.ts#L23)*

Initialize a new Logger instance.

**`examples`** 
```typescript
const { Logger } = require("@norviah/logger");

const logger = new Logger();                                            // Initialize a new instance with default values.
const logger = new Logger({ write: true });                             // Logger will write logs into the sub-directory 'logs' in the project's root directory.
const logger = new Logger({ write: true, dir: '/Users/name/Desktop' }); // Logger will write logs into the Desktop.
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [Options](../modules/_options_.md#options) | { write: false, dir: join(path, 'logs') } | Options for the logging system. |

**Returns:** *[Logger](_index_.logger.md)*

## Properties

### `Private` regex

• **regex**: *RegExp* = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g

*Defined in [index.ts:23](https://github.com/norviah/logger/blob/0522667/src/index.ts#L23)*

Matches ANSI codes, used to get rid of colors from a log.

## Methods

###  color

▸ **color**(`color`: typeof Color, `message`: string): *void*

*Defined in [index.ts:200](https://github.com/norviah/logger/blob/0522667/src/index.ts#L200)*

Applies the given color to the message and prints it into the console.

**`examples`** 
```typescript
logger.color('blue', 'hello world :)'); // => (blue)hello world :)(/blue)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`color` | typeof Color | The color to apply to the message. |
`message` | string | The message. |

**Returns:** *void*

___

###  colorize

▸ **colorize**(`color`: typeof Color, `message`: string): *string*

*Defined in [index.ts:187](https://github.com/norviah/logger/blob/0522667/src/index.ts#L187)*

Applies the given color to the message and returns it.

**`examples`** 
```typescript
logger.colorize('yellow', 'hello world :)'); // => (yellow)hello world :)(/yellow)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`color` | typeof Color | The color to apply to the message. |
`message` | string | The message. |

**Returns:** *string*

The given message with the given color.

___

###  error

▸ **error**(`message`: string, `options`: [LoggingOptions](../modules/_logging_.md#loggingoptions)): *void*

*Defined in [index.ts:131](https://github.com/norviah/logger/blob/0522667/src/index.ts#L131)*

A shortcut to output an error,
the title is 'ERROR' and is the color red.

**`examples`** 
```typescript
logger.error('message'); // => [ MM-DD-YYYY ] (red)ERROR(/red): message
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | The message to print. |
`options` | [LoggingOptions](../modules/_logging_.md#loggingoptions) | { title: 'ERROR', colors: { title: 'red' } } | Options for logging. |

**Returns:** *void*

___

###  log

▸ **log**(`message`: string, `options`: [LoggingOptions](../modules/_logging_.md#loggingoptions)): *void*

*Defined in [index.ts:173](https://github.com/norviah/logger/blob/0522667/src/index.ts#L173)*

A shortcut to output a logging message,
the title is 'LOG' and is the color blue.

**`examples`** 
```typescript
logger.log('message'); // => [ MM-DD-YYYY ] (blue)LOG(/blue): message
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | The message to print. |
`options` | [LoggingOptions](../modules/_logging_.md#loggingoptions) | { title: 'LOG', colors: { title: 'blue' } } | Options for logging. |

**Returns:** *void*

___

###  print

▸ **print**(`message`: string, `options`: [LoggingOptions](../modules/_logging_.md#loggingoptions)): *void*

*Defined in [index.ts:83](https://github.com/norviah/logger/blob/0522667/src/index.ts#L83)*

Prints the message to the console with the given colors applied to the message.

**`examples`** 
```typescript
logger.print(':)');                            // => [ MM-DD-YYYY h:mm a ] :)
logger.print('world', { title: 'hello' });     // => [ MM-DD-YYYY h:mm a ] hello: world
logger.print(':)', { subDir: 'sub' });         // This log will be written into the sub-directory 'sub' in the base directory.
logger.print(':)', { subDir: 'sub/sub'});      // This log will be written into the sub-directory 'sub/sub' in the base directory. The sub-directories are created if it doesn't exist.
logger.print(':)', { name: 'smile' });         // This log will be written under the name of 'smile.txt' in the base directory. If a name isn't given, it will be saved as 'MM-DD-YYYY.txt'.

// With the format of a log being,
// [ MM-DD-YYYY h:mm a ] title: message
// date represents '[ MM-DD-YYYY h:mm a ]',
// title represents 'title:', and
// message represents 'message'

// By default, the colors when logging are
// date: gray,
// title (if one is given): gray, and
// message: white

// The supported colors are the colors supported by chalk, which can be viewed here:
// https://github.com/chalk/chalk/blob/55816cdd4d25a86cc35b18e1e578a5b164f71aee/index.d.ts#L56.

logger.print(':)', { title: 'title' });                                                // => (gray)[ MM-DD-YYYY h:mm a ](/gray) (gray)title:(/gray) (white):)(/white)
logger.print(':)', { colors: { message: 'red' } });                                    // => (gray)[ MM-DD-YYYY h:mm a ](/gray) (red):)(/red)
logger.print('world', { title: 'hello', colors: { title: 'blue', message: 'blue' } }); // => (gray)[ MM-DD-YYYY h:mm a ](/gray) (blue)hello:(/blue) (blue)world(/blue)
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | The message to print. |
`options` | [LoggingOptions](../modules/_logging_.md#loggingoptions) | { title: '', colors: { date: 'gray', title: 'gray', message: 'white' } } | Options for the log. |

**Returns:** *void*

___

###  success

▸ **success**(`message`: string, `options`: [LoggingOptions](../modules/_logging_.md#loggingoptions)): *void*

*Defined in [index.ts:145](https://github.com/norviah/logger/blob/0522667/src/index.ts#L145)*

A shortcut to output a success,
the title is 'OK' and is the color green.

**`examples`** 
```typescript
logger.success('message'); // => [ MM-DD-YYYY ] (green)OK(/green): message
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | The message to print. |
`options` | [LoggingOptions](../modules/_logging_.md#loggingoptions) | { title: 'OK', colors: { title: 'green' } } | Options for logging. |

**Returns:** *void*

___

###  warn

▸ **warn**(`message`: string, `options`: [LoggingOptions](../modules/_logging_.md#loggingoptions)): *void*

*Defined in [index.ts:159](https://github.com/norviah/logger/blob/0522667/src/index.ts#L159)*

A shortcut to output a warning,
the title is 'WARN' and is the color yellow.

**`examples`** 
```typescript
logger.warn('message'); // => [ MM-DD-YYYY ] (yellow)WARN(/yellow): message
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | The message to print. |
`options` | [LoggingOptions](../modules/_logging_.md#loggingoptions) | { title: 'WARN', colors: { title: 'yellow' } } | Options for logging. |

**Returns:** *void*

## Object literals

### `Private` options

### ▪ **options**: *object*

*Defined in [index.ts:18](https://github.com/norviah/logger/blob/0522667/src/index.ts#L18)*

Options for the logging system.

###  dir

• **dir**: *string* = join(path, 'logs')

*Defined in [index.ts:18](https://github.com/norviah/logger/blob/0522667/src/index.ts#L18)*

###  write

• **write**: *false* = false

*Defined in [index.ts:18](https://github.com/norviah/logger/blob/0522667/src/index.ts#L18)*
