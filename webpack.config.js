// 2021-01-26 https://webpack.js.org/guides/getting-started/#using-a-configuration
const path = require('path');
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	}
};