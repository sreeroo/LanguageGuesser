import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { franc } from 'franc';
const langs = require('langs');
const color = require('colors');

const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und') { // und is the code for undefined
  console.log('Sorry, could not get the language of the text'.red);
} else {
  const language = langs.where('3', langCode); // 3 is the code for ISO 639-3
  console.log(`Our best guess is: ${language.name}`.green); // greeen color
}



