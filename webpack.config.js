var path = require('path');
var webpack = require('webpack');
var build = 'build';

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool  : 'source-map',
    entry    : './src/js/Main.js',
    output   : {
        path    : path.resolve(__dirname, build),
        filename: 'js/bundle.js'
    },
    module   : {
        rules: [
            {
                enforce: 'pre',
                test   : /\.js$/,
                exclude: /node_modules/,
                use    : ['eslint-loader']
            },
            {
                test   : /\.js$/,
                exclude: /node_modules/,
                use    : [
                    {
                        loader : 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test   : /\.html$/,
                exclude: /node_modules/,
                use    : ['html-loader']
            },
            {
                test   : /\.(jpg|png)$/,
                exclude: /node_modules/,
                use    : [
                    {
                        loader : 'file-loader',
                        options: {
                            name      : '[path][name].[ext]',
                            outputPath: 'img/'
                        }
                    }
                ]

            }
        ]
    },
    stats    : {
        errorDetails: true
    },
    resolve  : {
        extensions: ['.js']
    },
    devServer: {
        contentBase: build,
        inline     : true
    },
    plugins  : [
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile : path.join(__dirname, './.eslintrc'),
                    emitError  : true,
                    emitWarning: true,
                    failOnError: true
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/html/index.html'
        }),
        new CleanWebpackPlugin([build]),
        new CopyWebpackPlugin([
            {
                context: 'src/img',
                from   : '**/*',
                to     : 'img/'
            },
            {
                from: 'src/css',
                to  : 'css/'
            }
        ]),
        new webpack.ProvidePlugin({
            BABYLON: 'babylonjs',
            Utils  : path.resolve(__dirname, 'src/js/common/Utils'),
        }),
    ],
};
