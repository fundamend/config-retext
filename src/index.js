const fs = require('fs');
const path = require('path');

const dictionary = require('dictionary-en');
const english = require('retext-english');
const equality = require('retext-equality');
const spell = require('retext-spell');
const syntaxUrls = require('retext-syntax-urls');
const unified = require('unified');

const personal = fs.readFileSync(
	path.resolve(__dirname, 'dictionary.txt'),
	'utf8'
);

const spellOptions = {
	dictionary: dictionary,
	personal: personal,
	ignore: []
};

module.exports = unified()
	.use(english)
	.use(equality)
	.use(syntaxUrls)
	.use(spell, spellOptions);
