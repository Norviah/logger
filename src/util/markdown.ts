import chalk from 'chalk';

/**
 * Holds references to a few regex that matches a few markdown syntax, with the
 * value representing the method that applies the targeted syntax.
 */
const markdown: Map<RegExp, chalk.Chalk> = new Map();

// Matches '**[phrase]**' to embold text.
markdown.set(/\*\*(.*?)\*\*/g, chalk.bold);

// Matches '~~[phrase]~~' to strike-through text.
markdown.set(/~~(.*?)~~/g, chalk.strikethrough);

// Matches '*[phrase]*' to italicise text.
markdown.set(/\*(.*?)\*/g, chalk.italic);

// Matches '__[phrase]__' to underline text.
markdown.set(/__(.*?)__/g, chalk.underline);

// Matches '![phrase]!' to invert colors.
markdown.set(/!(.*?)!/g, chalk.inverse);

export { markdown };
