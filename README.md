# config-retext

_config-retext_ is a configuration preset for [retext] and its [plugins] used by [config-rehype-retext], [config-remark-retext], and the [fundamend.dev] ecosystem.

## Installation

Use your favorite Node.js package manager, for example [npm], like so:

    npm install --save-dev @fundamend/config-retext

... or [yarn], like so:

    yarn add --dev @fundamend/config-retext

## Usage

In your [.rehyperc.js] or [.remarkrc.js], import [remark-retext] or [rehype-retext] and _config-retext_ and add it to the plugins array, like so:

```js
const retext = require('rehype-retext');
const retextPreset = require('@fundamend/config-retext');

const plugins = [[retext, retextPreset]];
const settings = {};

module.exports = {
	plugins: plugins,
	settings: settings
};
```

## License

[MIT]

[fundamend.dev]: https://fundamend.dev
[mit]: https://choosealicense.com/licenses/mit/
[npm]: https://www.npmjs.com/
[plugins]: https://github.com/retextjs/retext/blob/master/doc/plugins.md
[config-rehype-retext]: https://github.com/fundamend/config-rehype-retext
[config-remark-retext]: https://github.com/fundamend/config-remark-retext
[rehype-retext]: https://github.com/rehypejs/rehype-retext
[remark-retext]: https://github.com/remarkjs/remark-retext
[.rehyperc.js]: https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md
[.remarkrc.js]: https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md
[retext]: https://github.com/retextjs/retext
[yarn]: https://yarnpkg.com/
