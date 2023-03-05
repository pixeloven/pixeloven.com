/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  reactStrictMode: true,
  transpilePackages: ["ui"],
}

module.exports = nextConfig
