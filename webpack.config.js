var webpack = require('webpack')
module.exports = {
	entry: {
		app:
			[
				'./index.js',
			]
	},
	output:{
		filename:'bundle.js',
		path:__dirname + '/dist',
		publicPath: 'http://localhost:8080/dist/'
	},
	plugins: [
		// kills the compilation upon an error.
		// this keeps the outputed bundle **always** valid
		new webpack.NoErrorsPlugin(),
	],
	module:{
		loaders:[
			{
				test:/\.js?$/,
				exclude:/node_modules/,
				loader:'babel',
				query:{
					presets:['react','es2015','stage-0'],
				}
			},
		]
	}
}
