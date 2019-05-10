const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

require('laravel-mix')
    .webpackConfig({
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'eslint-loader',
                    enforce: 'pre',
                },
            ],
        },
        resolve: {
            alias: {
                '@src': require('path').resolve(__dirname, 'src/'),
            },
        },
        plugins: [
            new CaseSensitivePathsPlugin(),
        ],
    })
    .babelConfig({
        presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-flow',
        ],
        'plugins': [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-export-default-from',
        ],
    })
    .setPublicPath('public/bitcup/dist')
    .setResourceRoot('/bitcup/dist')
    .js('src/app.js', 'public/bitcup/dist');
