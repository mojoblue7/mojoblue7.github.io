/** @type {import('next').NextConfig} */

const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const productionURL = 'https://mojoblue7.github.io';

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProduction ? productionURL : '',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    loader: 'imgix',
    path: productionURL,
  },
  webpack(config, { isServer, buildId }) {
    config.resolve = {
      alias: {
        '@src': path.join(__dirname, 'src'),
        '@components': path.join(__dirname, 'src', 'components'),
        '@containers': path.join(__dirname, 'src', 'containers'),
        '@store': path.join(__dirname, 'src', 'store'),
        // '@interface': path.join(__dirname, 'src', '@types/interface.ts'),
      },
      ...config.resolve,
    };

    return config;
  },
};
