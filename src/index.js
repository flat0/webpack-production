// 2021-01-26
import './style.css'; // 2021-01-30 https://webpack.js.org/guides/asset-management/#loading-cs
import _ from 'lodash'; // 2021-01-26 https://webpack.js.org/guides/getting-started/#creating-a-bundle
// 2021-01-31
// 1) https://webpack.js.org/guides/asset-management/#loading-data
// 2) The «./data/.csv» path leads to the «Name expected» error.
import csv from './data/1.csv';
import imageURL from './1.jpg'; // 2021-01-30 https://webpack.js.org/guides/asset-management/#loading-images
// 2021-01-31
// 1) https://webpack.js.org/guides/asset-management/#loading-data
// 2) The «./data/.xml» path leads to the «Name expected» error.
import xml from './data/1.xml';
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
	console.log(csv);
	console.log(xml);
	return element;
}
document.body.appendChild(component());