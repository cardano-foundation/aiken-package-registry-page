/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
}

module.exports = nextConfig
