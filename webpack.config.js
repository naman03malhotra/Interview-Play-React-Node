var webpack = require('webpack');
var path = require('path');



module.exports = {
	entry:{
		app: './src/app.js'

	},
	output:{
		filename: 'public/builds/bundle.js',
		sourceMapFilename: 'public/builds/bundle.map'
	},
	devtool: '#source-map',
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query:{
				presets: ['react', 'es2015']
			}
		},
		{ 	test: /\.jsx?$/,
			loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window'
		}

		]

	},
	plugins: [
	/*new webpack.optimize.UglifyJsPlugin({
		minimize: true,
		compress: false
	}),*/
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('development')
		}
	})
	]
}