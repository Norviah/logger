// Native imports.
const fs = require("fs");
const path = require("path");

// Importing modules.
const moment = require("moment");
const root = require("app-root-path").path;


class Logger {

  /**
   * Initializes a new instance, with options.
   * @param {Object} options Additional options for the logging system.
   * @param {Boolean} options.write Defaults to false, determines if Logger should also write to a file.
   * @param {String} options.dir Defaults to "./logs", if options.write is true, this
   * value represents the directory to where the logs will be saved.
   */

  constructor(options = {}) {

    // We initialize an object to hold references to
    // available options and their default values,
    // along with any overrides that were given.
    this.options = { write: false, dir: path.join(root, "logs"), ...options };

    // Before we continue, we must make sure that,
    // if we are writing logs into a file, the directory exists.
    if (this.options.write && !fs.existsSync(this.options.dir)) {
      fs.mkdirSync(this.options.dir);
    }

  }


  /**
   * Logs the given message into the console, if options.write is true,
   * we also write the message into a file into the given directory,
   * the name for the file will always be the current date.
   * @param {String} message The given message to log.
   * @param {String} title Optional, the logging title.
   * @return {null} Returns nothing.
   */

  print(message, title) {

    // We initialize a variable to hold a reference
    // to the current date, as we'll use this late,
    const date = moment().format("MM-DD-YY");

    // and we do the same for the time as well.
    const time = moment().format("h:mm a");

    // Next, we initialie a new variable to hold the
    // message that we will log, it holds a special format,
    // the current date, time, the given message, and
    // the logging title, if a title was given in the first place.
    message = `[${date} - ${time}] ${title ? `${title}: ` : ""}${message}`;

    console.log(message);

    // After we log the message, we check to see if
    // the user wants us to also write the message into a file.
    if (this.options.write) {
      fs.appendFileSync(`${this.options.dir}/${date}.txt`, `${message}\n`);
    }

  }


  /**
   * A simple shortcut method to
   * log an error, the message title is already
   * set as "ERROR" when using this method.
   * @param {string} message The given message to log.
   */

  error(message) {
    this.print(message, "ERROR");
  }


  /**
   * A simple shortcut method to
   * log a warning, the message title is already
   * set as "WARNING" when using this method.
   * @param {string} message The given message to log.
   */

  warn(message) {
    this.print(message, "WARNING");
  }


  /**
   * A simple shortcut method to
   * log a debug, the message title is already
   * set as "DEBUG" when using this method.
   * @param {string} message The given message to log.
   */

  debug(message) {
    this.print(message, "DEBUG");
  }


  /**
   * A simple shortcut method to
   * log a simple logging message, the message
   * title is already set as "LOG" when using this method.
   * @param {string} message The given message to log.
   */

  log(message) {
    this.print(message, "LOG");
  }

}


module.exports = Logger;
