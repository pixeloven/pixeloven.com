const { join } = require('path');

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    ...require('tailwindcss/defaultTheme'),
    darkMode: 'class',
    content: [
        join(__dirname, "./**/*.{js,ts,jsx,tsx}"),
        "./**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
};

module.exports = tailwindConfig;