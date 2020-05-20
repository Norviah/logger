### Logger

`Logger` is a simple logging system for node.js/Typescript, it uses [moment](https://github.com/moment/moment/) as a dependency to get the current time of when a log occurs and [chalk](https://github.com/chalk/chalk) for pretty output. If wanted, `Logger` can also write logs into a file, the default path is the directory `logs` under the root directory, with each day having it's own file under the name `MM-DD-YY.txt`.

### Insatallation

`npm install @norviah/logger`

### Documentation

Documentation can be viewed at the [documentation directory](https://github.com/Norviah/logger/tree/master/docs).

### Usage

```javascript

const { Logger } = require("@norviah/logger");
const logger = new Logger({ /** options */ });

// Logger will only print to the console.
const logger = new Logger();

// Logger will print to the console and write
// logs into the directory '$root/dir'.
const logger = new Logger({ write: true });

// Logger will write logs into the user's Desktop.
const logger = new Logger({ write: true, dir: "/Users/name/Desktop" });

```

To print, use the `Logger.print` method, which takes input as<br>
`Logger.print(message: string, title?: string, colors: Colors)`

`message` => The message to log.<br>
`title` => (Optional) the message's title.<br>
`colors` => (Optional) The colors for the log, defaults to `{ date: 'gray', title: 'gray', message: 'white' }`<br>

```javascript
logger.print("Hello World :)"); // => [ DD-MM-YY - h:mm a ] Hello World :)
logger.print("World", "Hello"); // => [ DD-MM-YY - h:mm a ] Hello: World
logger.print("Hello", colors = { title: 'red' }); // => [ DD-MM-YY - h:mm a ] [red]Hello[/red]
```

`Logger` comes with a handful of methods for common logging types: `Logger.error`, `Logger.success`, `Logger.warn`, and `Logger.log`. Each having a title as their name in all caps, with the exception of `Logger.success` which is `OK`, for example:

```javascript
logger.error("Some error."); // => [ DD-MM-YY - h:mm a ] ERROR: Some error.
```

The available colors are the colors that are supported by chalk, which can be viewed [here](https://github.com/chalk/chalk/blob/55816cdd4d25a86cc35b18e1e578a5b164f71aee/index.d.ts#L56).

The format for a log is `[ DD-MM-YY - h:mm a ] TITLE: MESSAGE`, so<br>
`date` represents the color for the date,  `[ DD-MM-YY - h:mm a ]`,<br>
`title` represents the color for the title,  `TITLE: `, and<br>
`message` represents the color for the message,  `MESSAGE`<br>
