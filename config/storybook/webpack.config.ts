/* eslint-disable no-param-reassign */
import webpack from 'webpack';

import path from 'path';

export default ({ config }: { config: webpack.Configuration }) => {
    config!.resolve!.modules!.push(path.resolve(__dirname, '..', '..', 'src'));

    config!.resolve!.extensions!.push('.ts', '.tsx');

    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@/shared': path.resolve(__dirname, '../../src/shared'),
        '@/pages': path.resolve(__dirname, '../../src/pages'),
        '@/features': path.resolve(__dirname, '../../src/features'),
        '@/widgets': path.resolve(__dirname, '../../src/widgets'),
        '@/app': path.resolve(__dirname, '../../src/app'),
    };

    config!.module!.rules!.push({
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    },
                },
            },
            'sass-loader',
        ],
    });

    const fileLoaderRule: any = config!.module!.rules!.find(
        (rule: any) => rule.test && rule.test.test('.svg')
    );
    fileLoaderRule!.exclude = /\.svg$/;

    config!.module!.rules!.push({
        test: /\.svg$/,
        enforce: 'pre',
        loader: require.resolve('@svgr/webpack'),
    });

    config.resolve.fallback = { fs: false, path: false };

    config.resolve.alias = {
        ...config.resolve.alias,
        'next-i18next': 'react-i18next',
    };
    return config;
};
