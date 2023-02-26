/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: [
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

module.exports = tailwindConfig;

// https://tailwindcss.com/docs/guides/nextjs
// https://shubhamverma.me/blog/setup-tailwind-css-with-turborepo