var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var temp = 'temp/';

module.exports = {
    devtool  : 'source-map',
    entry    : './src/js/Main.js',
    output   : {
        path    : path.resolve(__dirname, temp),
        filename: './js/bundle.dev.js'
    },
    module   : {
        rules: [
            {
                enforce: 'pre',
                test   : /\.js$/,
                exclude: /(bin|node_modules|bower_components|grunt|gulp|bower)/,
                include: /src/,
                loader : 'eslint-loader'
            },
            {
                test   : /\.js$/,
                exclude: /(bin|node_modules|bower_components|grunt|gulp|bower)/,
                include: /src/,
                loader : 'babel-loader',
                query  : {
                    babelrc: false,
                    presets: ['es2015']
                }
            },
            {
                test   : /\.(jpg|jpeg|png|svg)$/,
                exclude: /(bin|node_modules|bower_components|grunt|gulp|bower)/,
                include: /src/,
                loader : 'file'
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
        contentBase: temp,
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
            title   : 'ES6 based client-side 3D configurator',
            filename: 'index.html',
        }),
    ],
};
