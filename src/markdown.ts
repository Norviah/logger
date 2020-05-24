import Chalk from 'chalk';

// Holds a reference to regex that matches a few markdown syntax.
const markdown: Map<RegExp, Chalk.Chalk> = new Map();

// Used to match '**[word]**' for bold text.
markdown.set(/\*\*(.*?)\*\*/g, Chalk.bold);

// Used to match '~~[word]~~' for strikethrough text.
markdown.set(/~~(.*?)~~/g, Chalk.strikethrough);

// Used to match '*[word]*' for italic text.
markdown.set(/\*(.*?)\*/g, Chalk.italic);

// Used to match '__[word]__' to underline text.
markdown.set(/__(.*?)__/g, Chalk.underline);

// Used to match '![word]!' for inverse colors.
markdown.set(/!(.*?)!/g, Chalk.inverse);

export { markdown };
