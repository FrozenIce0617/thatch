const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  images: {
    domains: ['loremflickr.com'],
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
});
