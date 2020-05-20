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

Defined in index.ts:22

Initialize a new Logger instance.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [Options](../modules/_options_.md#options) | {} | Options for the logging system.  |

**Returns:** *[Logger](_index_.logger.md)*

## Properties

### `Private` regex

• **regex**: *RegExp* = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g

Defined in index.ts:22

Represents the regex used to match ANSI escape codes.

## Methods

###  error

▸ **error**(`message`: string): *void*

Defined in index.ts:80

A shortcut to output an error,
the title is 'ERROR' and is the color red.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The message to print.  |

**Returns:** *void*

___

###  log

▸ **log**(`message`: string): *void*

Defined in index.ts:107

A shortcut to output a message to simply log,
the title is 'LOG' and is the color blue.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The message to print.  |

**Returns:** *void*

___

###  print

▸ **print**(`message`: string, `title?`: undefined | string, `colors`: [Colors](../modules/_colors_.md#colors)): *void*

Defined in index.ts:49

Prints the given message to the console,
and, if wanted, writes the log into a file.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | The message to print. |
`title?` | undefined &#124; string | - | The optional title for the message. |
`colors` | [Colors](../modules/_colors_.md#colors) | {} | Represents colors used to print the date, title, and message.  |

**Returns:** *void*

___

###  success

▸ **success**(`message`: string): *void*

Defined in index.ts:89

A shortcut to output a success,
the title is 'OK' and is the color green.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The message to print.  |

**Returns:** *void*

___

###  warn

▸ **warn**(`message`: string): *void*

Defined in index.ts:98

A shortcut to output a warning,
the title is 'WARN' and is the color yellow.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The message to print.  |

**Returns:** *void*

## Object literals

### `Private` options

### ▪ **options**: *object*

Defined in index.ts:17

Optional options used for the logging system.

###  dir

• **dir**: *string* = join(path, 'logs')

Defined in index.ts:17

###  write

• **write**: *false* = false

Defined in index.ts:17
