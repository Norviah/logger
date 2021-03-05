[@norviah/logger](../README.md) › [Globals](../globals.md) › ["types/writeOptions"](../modules/_types_writeoptions_.md) › [WriteOptions](_types_writeoptions_.writeoptions.md)

# Interface: WriteOptions

Represents options to use when writing a log to a file.

## Hierarchy

* **WriteOptions**

## Index

### Properties

* [both](_types_writeoptions_.writeoptions.md#both)
* [name](_types_writeoptions_.writeoptions.md#name)
* [subDir](_types_writeoptions_.writeoptions.md#subdir)
* [title](_types_writeoptions_.writeoptions.md#title)

## Properties

###  both

• **both**: *boolean*

*Defined in [types/writeOptions.ts:27](https://github.com/Norviah/logger/blob/3894311/src/types/writeOptions.ts#L27)*

If a sub-directory is given, this flag determines if this log should be
saved to the base directory as well.

___

###  name

• **name**: *string*

*Defined in [types/writeOptions.ts:9](https://github.com/Norviah/logger/blob/3894311/src/types/writeOptions.ts#L9)*

The name of the file that the log will be saved under, defaults to the
current date in the format: MM-DD-YYYY.

___

###  subDir

• **subDir**: *string*

*Defined in [types/writeOptions.ts:21](https://github.com/Norviah/logger/blob/3894311/src/types/writeOptions.ts#L21)*

If provided, the log will be written into this sub-directory, in the base
directory. If the sub-directory, or sub-directories, doesn't exist, it's
created recursively.

___

###  title

• **title**: *string*

*Defined in [types/writeOptions.ts:14](https://github.com/Norviah/logger/blob/3894311/src/types/writeOptions.ts#L14)*

The title for the log, if absent, the log won't have a title.
