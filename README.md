# Logger

### About
Logger is a very simple logging system for node.js, it uses [moment](https://momentjs.com) as a dependency in order to get the
current time of when a log occurs. If wanted, you can also have Logger write logs into a directory, which defaults to `./logs/`,
with each day having its own file under the name of `MM-DD-YY.txt`.

### Installation
In order to install and use Logger, install with npm `npm install @norviah/logger`, then require and initialize it in your code:
```javascript
const logger = require("@norviah/logger");
const Logger = new logger({ /** options **/ });
```

### Usage
In the previous example, once you have Logger initialized, you can start logging via the `print` method:

```javascript
Logger.print("Hello World");
// => [DD-MM-YY - h:mm a] Hello World
```

If you want Logger to also save logs into a file, you can initialize it with options, for example:

```javascript
// assuming that logger is imported as in the example above.
const Logger = new logger({ write: true });
```

The `write` key determines if Logger should write logs into a file (`false` by default), there's also another key, `dir`. If the
`write` key is `true` this key determines what directory should Logger write into (`./logs/` by default). When writing logs into
a file, Logger will create a new file for the current day with the name `DD-MM-YY.txt`, if a file already exists it will append
to that file.

In addition, you can also provide a title for the message by doing: `Logger.log(message, title);`:

```javascript
Logger.print("Hello World!", "Greeting");
// => [DD-MM-YY - h:mm a] Greeting: Hello World
```

### Examples

```javascript

const Logger = new Logger();
// Logger will only print to the console.

const Logger = new Logger({ write: true });
// Logger will also write logs into a text file within the directory "./logs".

const Logger = new Logger({ write: true, dir: "./sample text/" );
// Logger will write logs into the directory "./sample text/", Logger will
// create the directory if it doesn't exist.
```

Logger also has a few methods available, for commonly used logging types, `Logger.log`, `Logger.error`, `Logger.debug`, and 
`Logger.warn`, with each having a title representing their names in all caps, for example:

```javascript
Logger.warn("Some warning");
// => [DD-MM-YY - h:mm a] WARNING: Some warning
```

### License
[MIT](./LICENSE)
