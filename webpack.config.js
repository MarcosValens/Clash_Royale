const autoprefixer = require('autoprefixer')

module.exports = {
    entry: ['./assets/src/scss/index.scss', './assets/src/service/clanService.js','./assets/src/service/locationService',
        './assets/src/model/Clan.js','./assets/src/model/Location.js','./assets/src/utils/material.js',
        './assets/src/utils/constants.js','./assets/src/utils/auxFunctions.js','./assets/src/fonts/Supercell-magic-webfont.generated.woff'],
    output: {
        filename: './dist/bundle.js',
    },
    module: {
        rules: [
            {
                test: /^(?!.*\.generated\.ttf$).*\.ttf$/,
                use: ['css-loader', 'fontface-loader'],
            }, {
                test: /\.generated.(ttf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: '/dist/fonts/',
                    },
                }],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './dist/bundle.css',
                        },
                    },
                    {loader: 'extract-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules'],
                        },
                    }
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-object-assign']
                },
            }
        ],
    },
}
