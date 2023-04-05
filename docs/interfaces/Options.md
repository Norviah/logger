[@norviah/logger](../README.md) / [Exports](../modules.md) / Options

# Interface: Options

## Table of contents

### Properties

- [both](Options.md#both)
- [colors](Options.md#colors)
- [dir](Options.md#dir)
- [format](Options.md#format)
- [write](Options.md#write)

## Properties

### both

• `Optional` **both**: `boolean`

If `write` is set, all logs are saved into a text file under `dir`. Within
`LoggingOptions`, it's possible to save specific logs further in a
subdirectory within the root directory `dir`. Also available within
`LoggingOptions`, when logs are saved under a subdirectory, `both` can be
used to save a log into both the specified subdirectory and the root
directory.

#### Defined in

[types/Options.ts:30](https://github.com/Norviah/logger/blob/f795ed6/src/types/Options.ts#L30)

___

### colors

• `Optional` **colors**: [`ColorOptions`](ColorOptions.md)

If desired, you can set the color for different aspects of a log.
`Logger` uses `chalk` to generate colors, thus valid colors are the colors
that `chalk` supports.

#### Defined in

[types/Options.ts:47](https://github.com/Norviah/logger/blob/f795ed6/src/types/Options.ts#L47)

___

### dir

• `Optional` **dir**: `string`

If `write` is `true`, this property determines the directory to save logs
into. Defaults to `logs/` within the project's root directory.

#### Defined in

[types/Options.ts:20](https://github.com/Norviah/logger/blob/f795ed6/src/types/Options.ts#L20)

___

### format

• `Optional` **format**: [`Format`](Format.md)

A log has three different sections,
- the date,
- the title,
- and the actual contents to print.
Through `format`, you can customize the generated format for a log, all
logs are executed trough the desired format.

#### Defined in

[types/Options.ts:40](https://github.com/Norviah/logger/blob/f795ed6/src/types/Options.ts#L40)

___

### write

• `Optional` **write**: `boolean`

By default, `Logger` only prints contents into the console, the `write`
method does serve the purpose to save logs into a file, however it must be
purposely called.

If desired, `write` can be set to `true` to save all logs into a file.
Whenever the `Logger.print` method is called, either direct or indrect,
the outputted log is saved into a text file.

#### Defined in

[types/Options.ts:14](https://github.com/Norviah/logger/blob/f795ed6/src/types/Options.ts#L14)
