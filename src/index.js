// 2021-01-26
import _ from 'lodash'; // 2021-01-26 https://webpack.js.org/guides/getting-started/#creating-a-bundle
import './style.css'; // 2021-01-30 https://webpack.js.org/guides/asset-management/#loading-cs
// 2021-01-26 https://webpack.js.org/guides/getting-started/#basic-setup
function component() {
	const element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');
	return element;
}
document.body.appendChild(component());