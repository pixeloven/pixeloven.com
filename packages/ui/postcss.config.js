const { join } = require('path');

/** @type {import('postcss').Postcss} */
const postcssConfig = {
    plugins: {
        tailwindcss: {
          config: join(__dirname, 'tailwind.config.js'),
        },
        autoprefixer: {},
      },
}

module.exports = postcssConfig;