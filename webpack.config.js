var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var temp = 'temp/';

module.exports = {
	devtool   : 'source-map',
	entry     : './src/js/Main.js',
	output    : {
		path     : path.resolve(__dirname, temp),
		filename : './js/bundle.dev.js'
	},
	module    : {
		rules : [
			{
				enforce : 'pre',
				test    : /\.js$/,
				exclude : /(bin|node_modules|bower_components|grunt|gulp|bower)/,
				loaders : ['eslint-loader']
			},
			{
				test    : /\.js$/,
				exclude : /(bin|node_modules|bower_components|grunt|gulp|bower)/,
				loader  : 'babel-loader',
				query   : {
					babelrc : false,
					presets : ['es2015']
				}
			}
		]
	},
	stats     : {
		errorDetails : true
	},
	resolve   : {
		extensions : ['.js']
	},
	devServer : {
		contentBase : temp,
		inline      : true
	},
	plugins   : [
		new webpack.LoaderOptionsPlugin({
			options : {
				eslint : {
					configFile : './.eslintrc'
				}
			}
		}),
		new HtmlWebpackPlugin({
			title: 'ES6 based client-side 3D configurator',
			filename: 'index.html',
		}),
	],
};
