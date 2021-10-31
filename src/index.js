import fs from 'fs';
import path from 'path';

import dictionary from 'dictionary-en';
import english from 'retext-english';
import equality from 'retext-equality';
import spell from 'retext-spell';
import syntaxUrls from 'retext-syntax-urls';
import unified from 'unified';
import { fileURLToPath } from 'node:url';

const dictionaryPath = fileURLToPath(
	new URL('dictionary.txt', import.meta.url)
);

const personal = fs.readFileSync(path.resolve(dictionaryPath), 'utf8');

const spellOptions = {
	dictionary: dictionary,
	personal: personal,
	ignore: []
};

export default unified()
	.use(english)
	.use(equality)
	.use(syntaxUrls)
	.use(spell, spellOptions);
