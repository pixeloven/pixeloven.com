const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
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