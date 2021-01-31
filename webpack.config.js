// 2021-01-26 https://webpack.js.org/guides/getting-started/#using-a-configuration
const json5 = require('json5'); // 2021-02-01 https://webpack.js.org/guides/asset-management/#customize-parser-of-json-modules
const path = require('path');
const toml = require('toml'); // 2021-02-01 https://webpack.js.org/guides/asset-management/#customize-parser-of-json-modules
const yaml = require('yamljs'); // 2021-02-01 https://webpack.js.org/guides/asset-management/#customize-parser-of-json-modules
module.exports = {
	entry: './src/index.js'
	,module: {
		rules: [
			// 2021-02-01 https://webpack.js.org/guides/asset-management/#customize-parser-of-json-modules
			{parser: {parse: json5.parse}, test: /\.json5$/i, type: 'json'}
			// 2021-02-01 https://webpack.js.org/guides/asset-management/#customize-parser-of-json-modules
			,{parser: {parse: toml.parse}, test: /\.toml$/i, type: 'json'}
			// 2021-02-01 https://webpack.js.org/guides/asset-management/#customize-parser-of-json-modules
			,{parser: {parse: yaml.parse}, test: /\.yaml$/i, type: 'json'}
			// 2021-01-30
			// 1) https://webpack.js.org/guides/asset-management/#loading-css
			// 2) «Loaders are evaluated/executed from right to left»: https://webpack.js.org/concepts/loaders/#configuration
			,{test: /\.css$/i, use: ['style-loader', 'css-loader']}
			// 2021-01-31 https://webpack.js.org/guides/asset-management/#loading-data
			,{test: /\.(csv|tsv)$/i, use: ['csv-loader']}
			// 2021-01-30 https://webpack.js.org/guides/asset-management/#loading-images
			,{test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'}
			// 2021-01-30 https://webpack.js.org/guides/asset-management/#loading-fonts
			,{test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource'}
			,{test: /\.xml$/i, use: ['xml-loader']} // 2021-01-31 https://webpack.js.org/guides/asset-management/#loading-data
		]
	}
	,output: {filename: 'bundle.js', path: path.resolve(__dirname, 'dist')}
};