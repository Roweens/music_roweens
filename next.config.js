/* eslint-disable no-param-reassign */
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });
        config.resolve.fallback = { fs: false };

        return config;
    },
    env: {
        API_URL: process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'http://production-url.com',
    },
    i18n,
};

module.exports = nextConfig;
