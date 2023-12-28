/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname:'source.unsplash.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
