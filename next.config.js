/** @type {import('next').NextConfig} */

const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const localURL = 'http://localhost:3000/';
const productionURL = 'https://mojoblue7.github.io';

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProduction ? productionURL : localURL,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    loader: 'imgix',
    path: isProduction ? productionURL : localURL,
  },
};
