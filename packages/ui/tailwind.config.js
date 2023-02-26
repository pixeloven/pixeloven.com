const { join } = require('path');

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: [
        join(__dirname, "./**/*.{js,ts,jsx,tsx}"),
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

module.exports = tailwindConfig;