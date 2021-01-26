// 2021-01-26
import _ from 'lodash'; // 2021-01-26 https://webpack.js.org/guides/getting-started/#creating-a-bundle
// 2021-01-26 https://webpack.js.org/guides/getting-started/#basic-setup
function component() {
	const element = document.createElement('div');
	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	return element;
}
document.body.appendChild(component());