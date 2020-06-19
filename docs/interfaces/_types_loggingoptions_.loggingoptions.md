[@norviah/logger](../README.md) › [Globals](../globals.md) › ["types/loggingOptions"](../modules/_types_loggingoptions_.md) › [LoggingOptions](_types_loggingoptions_.loggingoptions.md)

# Interface: LoggingOptions

## Hierarchy

* **LoggingOptions**

## Index

### Properties

* [both](_types_loggingoptions_.loggingoptions.md#both)
* [colors](_types_loggingoptions_.loggingoptions.md#colors)
* [name](_types_loggingoptions_.loggingoptions.md#name)
* [subDir](_types_loggingoptions_.loggingoptions.md#subdir)
* [title](_types_loggingoptions_.loggingoptions.md#title)

## Properties

###  both

• **both**: *boolean*

*Defined in [types/loggingOptions.ts:26](https://github.com/norviah/logger/blob/4552f79/src/types/loggingOptions.ts#L26)*

If a sub-directory is given, this flag determines if this log should be
saved to the base directory as well.

___

###  colors

• **colors**: *object*

*Defined in [types/loggingOptions.ts:31](https://github.com/norviah/logger/blob/4552f79/src/types/loggingOptions.ts#L31)*

Represents colors for certain parts of a log.

#### Type declaration:

* **date**? : *[Color](../modules/_types_color_.md#color)*

* **message**? : *[Color](../modules/_types_color_.md#color)*

* **title**? : *[Color](../modules/_types_color_.md#color)*

___

###  name

• **name**: *string*

*Defined in [types/loggingOptions.ts:8](https://github.com/norviah/logger/blob/4552f79/src/types/loggingOptions.ts#L8)*

The name of the file that the log will be saved under, defaults to the
current date in the format: MM-DD-YYYY.

___

###  subDir

• **subDir**: *string*

*Defined in [types/loggingOptions.ts:20](https://github.com/norviah/logger/blob/4552f79/src/types/loggingOptions.ts#L20)*

If provided, the log will be written into this sub-directory, in the base
directory. If the sub-directory, or sub-directories, doesn't exist, it's
created recursively.

___

###  title

• **title**: *string*

*Defined in [types/loggingOptions.ts:13](https://github.com/norviah/logger/blob/4552f79/src/types/loggingOptions.ts#L13)*

The title for the log, if absent, the log won't have a title.
