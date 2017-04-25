var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool   : 'source-map',
	entry     : './src/js/Main.js',
	output    : {
		path     : path.resolve(__dirname, 'tmp'),
		filename : './js/bundle.js'
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
		contentBase : 'tmp/',
		inline      : true
	},
	plugins   : [
		new webpack.LoaderOptionsPlugin({
			options : {
				eslint : {
					configFile : './.eslintrc'
				}
			}
		})
	],
};
