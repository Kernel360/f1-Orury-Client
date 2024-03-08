/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

const nextConfig = {
  reactStrictMode: false,

  transpilePackages: ['crypto-js'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd3rzoqirccqyht.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '43.203.51.54:8086',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
        },
      },
    ],
  ],
  nextConfig,
);
