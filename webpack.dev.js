// 2021-02-04 https://webpack.js.org/guides/production#setup
const common = require('./webpack.common.js');
const fs = require('fs');
const {merge} = require('webpack-merge');
module.exports = merge(common, {
	// 2021-02-02
	// 1) «This tells `webpack-dev-server` to serve the files from the `dist` directory on `localhost:8080`»
	// 2) «`webpack-dev-server` doesn't write any output files after compiling.
	// Instead, it keeps bundle files in memory and serves them as if they were real files mounted at the server's root path.»
	// https://webpack.js.org/guides/development#using-webpack-dev-server
	// https://webpack.js.org/configuration/dev-server
	devServer: {
		// 2021-02-03 "How do I install a self-signed certificate to localhost?": https://df.tips/t/1070
		cert: fs.readFileSync('C:/server/cert/.crt')
		,contentBase: './dist'
		,host: 'localhost.com' // 2021-02-02 https://webpack.js.org/configuration/dev-server#devserverhost
		,https: true // 2021-02-02 https://webpack.js.org/configuration/dev-server#devserverhttps
		// 2021-02-03 "How do I install a self-signed certificate to localhost?": https://df.tips/t/1070
		,key: fs.readFileSync('C:/server/cert/.key')
		,port: 2212 // 2021-02-02 https://webpack.js.org/configuration/dev-server#devserverport
	}
	,devtool: 'inline-source-map' // 2021-02-01 https://webpack.js.org/guides/development
	,mode: 'development' // 2021-02-01 https://webpack.js.org/guides/development
});