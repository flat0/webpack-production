// 2021-01-26 https://webpack.js.org/guides/getting-started/#using-a-configuration
const fs = require('fs');
const path = require('path');
// 2021-02-01 https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 2021-02-01 https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
	// 2021-02-02
	// 1) «This tells `webpack-dev-server` to serve the files from the `dist` directory on `localhost:8080`»
	// 2) «`webpack-dev-server` doesn't write any output files after compiling.
	// Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path.»
	// https://webpack.js.org/guides/development/#using-webpack-dev-server
	// https://webpack.js.org/configuration/dev-server
	devServer: {
		// 2021-02-03 "How do I install a self-signed certificate to localhost?": https://df.tips/t/1070
		cert: fs.readFileSync('C:/server/cert/.crt')
		,contentBase: './dist'
		,host: 'localhost.com' // 2021-02-02 https://webpack.js.org/configuration/dev-server/#devserverhost
		,https: true // 2021-02-02 https://webpack.js.org/configuration/dev-server/#devserverhttps
		// 2021-02-03 "How do I install a self-signed certificate to localhost?": https://df.tips/t/1070
		,key: fs.readFileSync('C:/server/cert/.key')
		,port: 2212 // 2021-02-02 https://webpack.js.org/configuration/dev-server/#devserverport
	}
	,devtool: 'inline-source-map' // 2021-02-01 https://webpack.js.org/guides/development
	,entry: {index: './src/index.js'}
	,mode: 'development' // 2021-02-01 https://webpack.js.org/guides/development
	,output: {
		filename: '[name].bundle.js'
		,path: path.resolve(__dirname, 'dist')
		,publicPath: '/' // 2021-02-03 https://webpack.js.org/guides/development/#using-webpack-dev-middleware
	}
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