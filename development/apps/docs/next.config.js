const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md'],
  reactStrictMode: true,
  transpilePackages: ["ui"],
}

module.exports = withMarkdoc()(nextConfig)
