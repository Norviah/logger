[@norviah/logger](../README.md) › [Globals](../globals.md) › ["types/options"](../modules/_types_options_.md) › [Options](_types_options_.options.md)

# Interface: Options

## Hierarchy

* **Options**

## Index

### Properties

* [both](_types_options_.options.md#both)
* [date](_types_options_.options.md#date)
* [dir](_types_options_.options.md#dir)
* [format](_types_options_.options.md#format)
* [name](_types_options_.options.md#optional-name)
* [title](_types_options_.options.md#title)
* [write](_types_options_.options.md#write)

## Properties

###  both

• **both**: *boolean*

*Defined in [types/options.ts:40](https://github.com/Norviah/logger/blob/7f44bca/src/types/options.ts#L40)*

If a sub-directory is given, this flag determines if a log should be
saved to the base directory as well.

___

###  date

• **date**: *string*

*Defined in [types/options.ts:20](https://github.com/Norviah/logger/blob/7f44bca/src/types/options.ts#L20)*

Represents the format for the date, in Unix format.

___

###  dir

• **dir**: *string*

*Defined in [types/options.ts:10](https://github.com/Norviah/logger/blob/7f44bca/src/types/options.ts#L10)*

Represents the directory that logs will be saved to.

___

###  format

• **format**: *string*

*Defined in [types/options.ts:34](https://github.com/Norviah/logger/blob/7f44bca/src/types/options.ts#L34)*

Represents the format for a log,
%d => the date,
%t => the title, and
%m => the message to log.

___

### `Optional` name

• **name**? : *undefined | string*

*Defined in [types/options.ts:15](https://github.com/Norviah/logger/blob/7f44bca/src/types/options.ts#L15)*

Represents the default name of the file that logs will be saved in.

___

###  title

• **title**: *string*

*Defined in [types/options.ts:26](https://github.com/Norviah/logger/blob/7f44bca/src/types/options.ts#L26)*

Represents the format for the title,
%t => the title.

___

###  write

• **write**: *boolean*

*Defined in [types/options.ts:5](https://github.com/Norviah/logger/blob/7f44bca/src/types/options.ts#L5)*

Determines if logs should be written to a file.
