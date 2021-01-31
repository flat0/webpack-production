// 2021-01-26
import _ from 'lodash'; // 2021-01-26 https://webpack.js.org/guides/getting-started/#creating-a-bundle
import printMe from './print.js'; // 2021-02-01 https://webpack.js.org/guides/output-management/#preparation
// 2021-01-26 https://webpack.js.org/guides/getting-started/#basic-setup
function component() {
	const element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	const btn = document.createElement('button');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);
	return element;
}
document.body.appendChild(component());