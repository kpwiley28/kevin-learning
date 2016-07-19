var webpack = require('webpack'),
	path = require('path');

module.exports = {
	entry: {
		app: path.join(__dirname, 'app', 'index.js')
	},
	output: {
		path: path.join(__dirname, 'public', 'js'),
		filename: '[name].js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: [
					path.join(__dirname, 'app')
				],
				// exclude: /node_modules/,
			}
		]
	}
}