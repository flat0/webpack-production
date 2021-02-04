// 2021-02-04 https://webpack.js.org/guides/production#setup
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
	entry: {app: './src/index.js'}
	,output: {
		filename: '[name].bundle.js'
		,path: path.resolve(__dirname, 'dist')
	}
	,plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({title: 'Production'})
	]
};