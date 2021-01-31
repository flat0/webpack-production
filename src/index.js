// 2021-01-26
import _ from 'lodash'; // 2021-01-26 https://webpack.js.org/guides/getting-started/#creating-a-bundle
import './style.css'; // 2021-01-30 https://webpack.js.org/guides/asset-management/#loading-cs
import imageURL from './1.jpg'; // 2021-01-30 https://webpack.js.org/guides/asset-management/#loading-images
// 2021-01-26 https://webpack.js.org/guides/getting-started/#basic-setup
function component() {
	const element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');
	const image = new Image;
	image.src = imageURL;
	image.height = 100;
	image.width = 100;
	element.appendChild(image);
	return element;
}
document.body.appendChild(component());