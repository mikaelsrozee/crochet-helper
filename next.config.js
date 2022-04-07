const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    loader: 'custom',
  },
  swcMinify: true,
});
