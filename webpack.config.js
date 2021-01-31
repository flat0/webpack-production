// 2021-01-26 https://webpack.js.org/guides/getting-started/#using-a-configuration
const path = require('path');
module.exports = {
	entry: './src/index.js'
	,module: {
		rules: [
			// 2021-01-30
			// 1) https://webpack.js.org/guides/asset-management/#loading-css
			// 2) «Loaders are evaluated/executed from right to left»: https://webpack.js.org/concepts/loaders/#configuration
			{test: /\.css$/i, use: ['style-loader', 'css-loader']}
			// 2021-01-30 https://webpack.js.org/guides/asset-management/#loading-images
			,{test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'}
			// 2021-01-30 https://webpack.js.org/guides/asset-management/#loading-fonts
			,{test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource'}
		]
	}
	,output: {filename: 'bundle.js', path: path.resolve(__dirname, 'dist')}
};