const SITE = require('./src/config.js').SITE;

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  // output: 'export',

  trailingSlash: SITE.trailingSlash,
  basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',

  swcMinify: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
    domains: ['www.themealdb.com'],
  },
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://themealdb.com/:path*',
        },
      ]
    },
};
