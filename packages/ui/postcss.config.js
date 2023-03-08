const { join } = require('path');

/** @type {import('postcss').Postcss} */
const postcssConfig = {
    plugins: {
        'postcss-import': {},
        'postcss-focus-visible': {
          replaceWith: '[data-focus-visible-added]',
        },
        tailwindcss: {},
        autoprefixer: {},
      },
}

module.exports = postcssConfig;