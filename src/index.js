// 2021-01-26
import {cube} from './math.js'; // 2021-02-04 https://webpack.js.org/guides/tree-shaking#add-a-utility
// 2021-02-03 https://webpack.js.org/guides/code-splitting#dynamic-imports
function component() {
	const element = document.createElement('pre');
	element.innerHTML = [
		'Hello webpack!',
		'5 cubed is equal to ' + cube(5)
	].join('\n\n');
	return element;
}
document.body.appendChild(component());