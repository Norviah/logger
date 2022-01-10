## @norviah/logger

A simple logging system for node.js/TypeScript that uses <code><a href="https://www.npmjs.com/package/chalk">Chalk</a></code>. The purpose of `Logger` is to be a purposeful logging system that allows you to print logs in a structured and pretty manner, in addition to saving logs into a file if desired.

### Installation

```
npm install @norviah/logger
```

### Usage

For a more in depth look into logger, check out the docs [here](./docs/classes/Logger.md).

Here is a basic usage:
```TypeScript
import { Logger } from '@norviah/logger';

const logger = new Logger();
logger.print('hello world');
```

For the example above, the following is printed:
```
[ 01-10-2022 1:04 PM ] hello world
```

#### Structure

In Logger, logs are divided into three sections: the date of the log, the title, and the actual contents. By default, the date
always appears in a log but titles are optional. If you would like to print a log with a title, you can provide one within the
`options` parameter for the `print` method. If we extend the example above:

```
logger.print('world', { title: 'hello' });
```

This would print:
```
[ 01-10-2022 1:04 PM ] hello: world
```

The title is only printed if one is given. Additionally, there are a few methods within Logger that acts as a shortcut to log
with a title, those methods being:
- error
- success
- warn
- info

Each method takes the same input as the `print` method, it just adds a title with the respective name and edits the color of the
title corresponding to the level.

If desired, you can change how logs are printed by modifying these sections in the `format` option. For example, if you don't want
the date to appear within logs, you can set `options.format.general` to `%t%c`. This will only result in the title (if provided) and
the contents to appear in logs. You can also set how you want to structure the date or the title, the date is parsed using a format
similar to the unix `date` command, and titles are as is, with `%t` replaced with the actual title.

#### Color

You can set the color for each section of logs either when initializing a Logger instance of when calling the `print` method. If you
set colors in the constructor then all logs will be using the specified colors, however if you pass colors in the method directly, then
that specific log will only consist of the desired color.

#### Writing Logs

If you would like to save logs into a file, you can initialize an instance and set the `write` property to true:
```TypeScript
const logger = new Logger({ write: true });
```

Every log printed will then be saved into a file. By default, logs are saved into the root folder for your project under the `logs`
subdirectory. Of course you can change this directory by passing in a value for the `dir` option. Additionally, when calling the `print` method, you can specify options for how and where to save that log. For example, you can change the name of the file or if you want that
specific log to be saved under a subdirectory, which can go on infinitely if desired.

If the name of the file hasn't changed, each log will be appended into that file, separated via a newline.
