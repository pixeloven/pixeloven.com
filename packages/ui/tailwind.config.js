const { join } = require('path');

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: [
        join(__dirname, "../../node_modules/flowbite-react/**/*.js"),
        join(__dirname, "./**/*.{js,ts,jsx,tsx}"),
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        // require('@tailwindcss/forms'),
        require('flowbite/plugin')
    ],
};

module.exports = tailwindConfig;