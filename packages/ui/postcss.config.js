const { join } = require('path');

/** @type {import('postcss').Postcss} */
const postcssConfig = {
    plugins: {
        'postcss-import': {},
        'postcss-focus-visible': {
          replaceWith: '[data-focus-visible-added]',
        },
        tailwindcss: {
          config: join(__dirname, 'tailwind.config.js'),
        },
        autoprefixer: {},
      },
}

module.exports = postcssConfig;