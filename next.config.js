/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  images: {
    unoptimized: true,
  },

basePath: '/portfolioWebsite',
assetPrefix: '/portfolioWebsite'
}

module.exports = nextConfig
