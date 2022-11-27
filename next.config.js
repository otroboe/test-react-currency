const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@/components': path.join(__dirname, 'src', 'components'),
      '@/pages': path.join(__dirname, 'src', 'pages'),
      '@/styles': path.join(__dirname, 'src', 'styles'),
      '@/utils': path.join(__dirname, 'src', 'utils'),
    };

    return config;
  },
};

module.exports = nextConfig;
