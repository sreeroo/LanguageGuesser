import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { franc } from 'franc';
const langs = require('langs');
const color = require('colors');

const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und') {
  console.log('Sorry, could not get the language of the text'.red);
} else {
  const language = langs.where('3', langCode);
  console.log(`Our best guess is: ${language.name}`.green);
}



