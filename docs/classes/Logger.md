[@norviah/logger](../README.md) / [Exports](../modules.md) / Logger

# Class: Logger

A simple logging system for TypeScript.
In tandem with `chalk`, `Logger` outputs information in an organized, and
colorful, manner with consistent structure.

Logging is conceptualized into three sections:
- the date,
- the title,
- and the contents to print.

Through the `format` property of `Options`, the generated output for logs can
be manipulated to a desired format. Additionally, a few markdown syntax are
supported as well:
- **bold**: `**[string]**`,
- ~~strikethrough~~: `~~[string]~~`,
- *italics*: `*[string]*`,
- __underline__: `__[string]__`, and
- `!![string]!!`, which inverses the foreground and background color.

Wrap any text when printing, or within the properties of `Format` as
well, and the desired syntax is applied to the wrapped text.

## Table of contents

### Constructors

- [constructor](Logger.md#constructor)

### Properties

- [options](Logger.md#options)

### Methods

- [color](Logger.md#color)
- [colorize](Logger.md#colorize)
- [error](Logger.md#error)
- [generate](Logger.md#generate)
- [info](Logger.md#info)
- [print](Logger.md#print)
- [success](Logger.md#success)
- [warn](Logger.md#warn)
- [write](Logger.md#write)
- [Characters](Logger.md#characters)

## Constructors

### constructor

• **new Logger**(`options?`)

Initializes a new `Logger` instance.

**`example`**
```TypeScript
// Within the constructor for `Logger`, `Option` is used to set default
// options to reference when logging in addition to setting any desired
// functionality during logging.

// As logging is split into three separate sections, through
// `Options.color`, you can specify the color to print each section as.
// All options are optional and any missing properties is filled in with
// default values.

new Logger({ colors: { title: 'red', } });

// With this example, anytime the `print` method is called and a `title` is
// specified, said title will have the color `red`, assuming that the color
// doesn't get overridden.

// `options.color` represents default values to opt to when logging, as for
// properties representing functionality, we have `options.write`. If set
// to `true`, every time the `print` method is called, the log is
// also saved into a file.

// You can go a bit further in where the file is saved to and as within
// `LoggingOptions`, or specifically, `WriteOptions`.

new Logger({ write: true, });
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | [`DeepPartial`](../modules.md#deeppartial)<[`Options`](../interfaces/Options.md)\> | `defaults.options` | Default options to reference when logging. |

#### Defined in

[structs/Logger.ts:82](https://github.com/Norviah/logger/blob/8321782/src/structs/Logger.ts#L82)

## Properties

### options

• **options**: [`DeepRequired`](../modules.md#deeprequired)<[`Options`](../interfaces/Options.md)\>

Options to reference when logging.
Represents default options along with specific options overridden within
the constructor.

#### Defined in

[structs/Logger.ts:49](https://github.com/Norviah/logger/blob/8321782/src/structs/Logger.ts#L49)

## Methods

### color

▸ **color**(`color`, `string`): `void`

Applies the specified color to the string and prints it to the console.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `Color` | The color to apply. |
| `string` | `string` | The string to print, with the desired color applied. |

#### Returns

`void`

#### Defined in

[structs/Logger.ts:403](https://github.com/Norviah/logger/blob/8321782/src/structs/Logger.ts#L403)

___

### colorize

▸ **colorize**(`color`, `string`): `string`

Applies the specified color to the string.
In addition, any markdown syntax specified is also applied.

**`example`**
```TypeScript
import { Logger } from '@norviah/logger';

const logger: Logger = new Logger();
logger.colorize('red', 'hello world');
// => <red>hello world</red>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `Color` | The desired color to apply. |
| `string` | `string` | The string to apply the color to. |

#### Returns

`string`

`string` with the desired color applied.

#### Defined in

[structs/Logger.ts:394](https://github.com/Norviah/logger/blob/8321782/src/structs/Logger.ts#L394)

___

### error

▸ **error**(`content`, `options?`): `void`

A helper method to print an error.
The title is manually set to `error` with the color set to `red`.

**`example`**
```TypeScript
import { Logger } from '@norviah/logger';

new Logger().error('sample text');
// => [ 01-01-1970 12:00 AM ] error: sample text
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` \| `string`[] | The content of the log. |
| `options?` | `Partial`<[`LoggingOptions`](../interfaces/LoggingOptions.md)\> | Options for logging. |

#### Returns

`void`

#### Defined in

[structs/Logger.ts:324](https://github.com/Norviah/logger/blob/8321782/src/structs/Logger.ts#L324)

___

### generate

▸ **generate**(`content`, `options?`): `string`

A helper method for printing logs.

As logs are split into three separate functions, `generate` helps combine
them, ultimately generating a string representing all three sections. Each
section:
- the date,
- the title,
- and the contents

are all ran through its specific formatter. For example, for dates, a new
instance of `spacetime` is initialized. For titles, any instances of `%t`
within `Format.title` is replaced with the specified title, or an empty
string if no title is set.

After generating the three sections, `generate` combines them using the
general format within `Format` and returns the result.

**`example`**
```TypeScript
// With `generate`, it takes the desired `Format` instance, replaces the
// special characters with the date, title, and content, applies any colors
// and markdown syntax, and finally returns the result.

// As an example, let's say we have set the desired format into:
//   date: '[ MM-dd-yyyy h:mm a ]',
// {
//   title: '%t: ',
//   general: '%d %t%c',
// }

// If we were to call the `print` method as:
// print('world', { title: 'hello' }), it would call `generate` with the
// same parameters, and would go through each property within `format` and
// generate a string regarding that property.

// With the given options, `generate` would return:
// `[ 01-01-1970 12:00 AM ] hello: world`
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` \| `string`[] | The contents of the log. |
| `options` | `Partial`<[`LoggingOptions`](../interfaces/LoggingOptions.md)\> | Options for logging. |

#### Returns

`string`

A generated string adhering to the desired format of a log.

#### Defined in

[structs/Logger.ts:135](https://github.com/Norviah/logger/blob/8321782/src/structs/Logger.ts#L135)

___

### info

▸ **info**(`content`, `options?`): `void`

A helper method to print information.
The title is set to `info` with the color set to `blue`.

**`example`**
```TypeScript
import { Logger } from '@norviah/logger';

new Logger().info('sample text');
// => [ 01-01-1970 12:00 AM ] info: sample text
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` \| `string`[] | The content of the log. |
| `options?` | `Partial`<[`LoggingOptions`](../interfaces/LoggingOptions.md)\> | Options for logging. |

#### Returns

`void`

#### Defined in

[structs/Logger.ts:375](https://github.com/Norviah/logger/blob/8321782/src/structs/Logger.ts#L375)

___

### print

▸ **print**(`content`, `options?`): `void`

Prints the given content to the console.

The main function for `Logger`, `print` is the main entry point to
logging into the console. Outputted logs are formatted to adhere to the
format specified within `Format` in `Options` during initialization,
or the default format.

Through `options`, you're able to change certain output of the log,
for example, colors. As logs are separated within three sections, if
desired, you can specify the colors for each section within
`options.colors`.

Speaking of sections of a log, the sections of a log are:
- the date,
- the title,
- and the content

As the `date` is handled within `Options` during the constructor, we don't
have to worry about that. As for the `title`, that can be set within
`options`. Titles for logs are always optional and is ignored within the
output if a `title` isn't set.

Additionally, markdown syntax are supported.
Within `content` or `options.title`, you can specify one or more of the
following markdown syntax:
- **bold**: `**[string]**`,
- ~~strikethrough~~: `~~[string]~~`,
- *italics*: `*[string]*`,
- __underline__: `__[string]__`, and
- `!![string]!!`, which inverses the foreground and background color.

The desired syntax is applied to the wrapped strings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` \| `string`[] | The content of the log. |
| `options` | `Partial`<[`LoggingOptions`](../interfaces/LoggingOptions.md)\> | Options for logging. |

#### Returns

`void`

#### Defined in

[structs/Logger.ts:219](https://github.com/Norviah/logger/blob/8321782/src/structs/Logger.ts#L219)

___

### success

▸ **success**(`content`, `options?`): `void`

A helper method to print a success.
The title is set to `ok` with the color set to `green`.

**`example`**
```TypeScript
import { Logger } from '@norviah/logger';

new Logger().success('sample text');
// => [ 01-01-1970 12:00 AM ] ok: sample text
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` \| `string`[] | The content of the log. |
| `options?` | `Partial`<[`LoggingOptions`](../interfaces/LoggingOptions.md)\> | Options for logging. |

#### Returns

`void`

#### Defined in

[structs/Logger.ts:341](https://github.com/Norviah/logger/blob/8321782/src/structs/Logger.ts#L341)

___

### warn

▸ **warn**(`content`, `options?`): `void`

A helper method to print a warning.
The title is set to `warning` with the color set to `yellow`.

**`example`**
```TypeScript
import { Logger } from '@norviah/logger';

new Logger().warn('sample text');
// => [ 01-01-1970 12:00 AM ] warning: sample text
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` \| `string`[] | The content of the log. |
| `options?` | `Partial`<[`LoggingOptions`](../interfaces/LoggingOptions.md)\> | Options for logging. |

#### Returns

`void`

#### Defined in

[structs/Logger.ts:358](https://github.com/Norviah/logger/blob/8321782/src/structs/Logger.ts#L358)

___

### write

▸ **write**(`content`, `options?`): `void`

Writes the given contents into a file.

As `Logger` can optionally save logs into a file, determined by the `write`
property within `Options`, this method is called under the hood to save the
specified log into a file. Given the contents and options, the generated
log that would be printed, is rather saved into the specified file.

As always, this method exists if you would like to save a log into a file,
regardless if the `write` property is set to true within the constructor.

**`example`**
```TypeScript
import { Logger } from '@norviah/logger';

// For this example, we'll initialize a new instance of `Logger` without
// providing any options. By default, any printed logs won't be saved into
// a file.

const logger: Logger = new Logger();

logger.print('world', { title: 'hello' });
// This would simply print out:
// [ 01-01-1970 12:00 AM ] hello: world

// No logs are saved due to `write` being false.
// However, if `write` were to be set to `true`, it would save files by
// calling the `write` method under the hood.

// This method is always available to you, allowing you to save logs into
// files regardless of what `write` was set to during the constructor.
// `write` accepts the same parameters as the `print` method, calling the
// same generator method but instead saving the log into a file.

logger.write('world', { title: 'hello' });

// By default, logs are saved into the `logs` subdirectory within your
// projects root directory under the file `MM-DD-YYYY.txt`. If wanted, you
// can change the filename using the `name` property:

logger.write('hello world', { name: 'hello world' });

// This log would be saved under `logs/hello world.txt`.
// There's other options available regarding writing logs within the
// `LoggingOptions` interface, as it inherits `WriteOptions`.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` \| `string`[] | The contents of the log. |
| `options` | `Partial`<[`LoggingOptions`](../interfaces/LoggingOptions.md)\> | Options for logging. |

#### Returns

`void`

#### Defined in

[structs/Logger.ts:279](https://github.com/Norviah/logger/blob/8321782/src/structs/Logger.ts#L279)

___

### Characters

▸ `Static` **Characters**(`string`): `number`

Finds the amount of characters displayed when printing the provided string
through the `Printer.Print` method.

When logging contents, markdown syntax such as **bold** or *italics* are
supported, the problem being is that the length of strings are used to
format when printing multi-line logs, however these special syntax are
counted in the length but aren't visible when printed.

`Logger.Characters` finds the correct length of strings by removing these
special characters.

**`example`**
```TypeScript
import { Logger } from '@norviah/logger';

// We'll initialize a string containing markdown syntax.
const string: string = `__**Hello World!**__`;

// `Logger` is used to print to the console, if we were to print the string
// using `Logger`, e.g.
new Logger().print(string);
// The string would be printed, embolded and italicised.

// Which is a problem as we use the string's length when aligning lines
// within the main printing method, the string contains markdown syntax
// which will skew the alignments.

string.length;              // => 20
Printer.Characters(string); // => 12
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to find the true length of. |

#### Returns

`number`

The true length of the string, regarding to printing.

#### Defined in

[structs/Logger.ts:440](https://github.com/Norviah/logger/blob/8321782/src/structs/Logger.ts#L440)
