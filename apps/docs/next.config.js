const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  pageExtensions: ['js', 'jsx', 'md'],
  reactStrictMode: true,
  transpilePackages: ["ui"],
}

module.exports = withMarkdoc()(nextConfig)
