import fs from 'fs';
import path from 'path';

import dictionary from 'dictionary-en';
import english from 'retext-english';
// import assuming from 'retext-assuming';
// import cliches from 'retext-cliches';
import contractions from 'retext-contractions';
import diacritics from 'retext-diacritics';
import equality from 'retext-equality';
import indefiniteArticle from 'retext-indefinite-article';
import intensify from 'retext-intensify';
// import overuse from 'retext-overuse';
import passive from 'retext-passive';
import profanities from 'retext-profanities';
import quotes from 'retext-quotes';
import readability from 'retext-readability';
import redundantAcronyms from 'retext-redundant-acronyms';
import repeatedWords from 'retext-repeated-words';
import sentenceSpacing from 'retext-sentence-spacing';
import simplify from 'retext-simplify';
import spell from 'retext-spell';
import syntaxMentions from 'retext-syntax-mentions';
import syntaxUrls from 'retext-syntax-urls';
import unified from 'unified';
// import usage from 'retext-usage';
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
	// .use(assuming) --- fails because of https://github.com/davidhund/retext-assuming/issues/3
	// .use(cliches) --- fails with "Cannot find module 'no-cliches/lib/list'"
	.use(contractions)
	.use(diacritics)
	.use(equality)
	.use(indefiniteArticle)
	.use(intensify)
	// .use(overuse) --- fails because of https://github.com/davidhund/retext-assuming/issues/3
	.use(passive)
	.use(profanities)
	.use(quotes, { preferred: 'straight' })
	.use(readability, { age: 21, threshold: 5 })
	.use(redundantAcronyms)
	.use(repeatedWords)
	.use(sentenceSpacing)
	.use(simplify)
	.use(syntaxMentions)
	.use(syntaxUrls)
	// .use(usage) --- fails with "TypeError: quotation(...).join is not a function"
	.use(spell, spellOptions);
