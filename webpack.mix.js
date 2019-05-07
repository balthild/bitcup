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
    })
    .babelConfig({
        presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-flow',
        ],
    })
    .setPublicPath('public/bitcup/dist')
    .setResourceRoot('/bitcup/dist')
    .js('src/app.js', 'public/bitcup/dist');
