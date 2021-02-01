// 2021-01-26 https://webpack.js.org/guides/getting-started/#using-a-configuration
const path = require('path');
// 2021-02-01 https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 2021-02-01 https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
	devtool: 'inline-source-map' // 2021-02-01 https://webpack.js.org/guides/development
	,entry: {index: './src/index.js', print: './src/print.js'}
	,mode: 'development' // 2021-02-01 https://webpack.js.org/guides/development
	,output: {filename: '[name].bundle.js', path: path.resolve(__dirname, 'dist')}
	,plugins: [
		// 2021-02-01 https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
		new CleanWebpackPlugin({
			// 2021-02-01
			// «Tell CleanWebpackPlugin that we don't want to remove the index.html file
			// after the incremental build triggered by `watch`.
			// We do this with the cleanStaleWebpackAssets option.»:
			// https://webpack.js.org/guides/development/#using-watch-mode
			cleanStaleWebpackAssets: false
		})
		// 2021-02-01 https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin
		,new HtmlWebpackPlugin({
			title: 'Development' // 2021-02-01 https://webpack.js.org/guides/development
		})
	]
};