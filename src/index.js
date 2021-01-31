// 2021-01-26
import './style.css'; // 2021-01-30 https://webpack.js.org/guides/asset-management/#loading-css
import _ from 'lodash'; // 2021-01-26 https://webpack.js.org/guides/getting-started/#creating-a-bundle
// 2021-01-31
// 1) «Instead of making an ajax request and parsing the data at runtime
// you can load it into your module during the build process
// so that the parsed data is ready to go as soon as the module hits the browser.»
// https://webpack.js.org/guides/asset-management/#loading-data
// 2) The «./data/.csv» path leads to the «Name expected» error.
import csv from './data/1.csv';
import imageURL from './1.jpg'; // 2021-01-30 https://webpack.js.org/guides/asset-management/#loading-images
import json from './data/1.json5'; // 2021-02-01 https://webpack.js.org/guides/asset-management/#customize-parser-of-json-modules
import toml from './data/1.toml'; // 2021-02-01 https://webpack.js.org/guides/asset-management/#customize-parser-of-json-modules
// 2021-01-31
// 1) «Instead of making an ajax request and parsing the data at runtime
// you can load it into your module during the build process
// so that the parsed data is ready to go as soon as the module hits the browser.»
// https://webpack.js.org/guides/asset-management/#loading-data
// 2) The «./data/.xml» path leads to the «Name expected» error.
import xml from './data/1.xml';
import yaml from './data/1.yaml'; // 2021-02-01 https://webpack.js.org/guides/asset-management/#customize-parser-of-json-module
// 2021-01-26 https://webpack.js.org/guides/getting-started/#basic-setup
function component() {
	const element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello'); // 2021-01-30 https://webpack.js.org/guides/asset-management/#loading-css
	// 2021-01-30 https://webpack.js.org/guides/asset-management/#loading-images
	const image = new Image;
	image.src = imageURL;
	image.height = 100;
	image.width = 100;
	element.appendChild(image);
	// 2021-01-31 https://webpack.js.org/guides/asset-management/#loading-data
	console.log(csv);
	console.log(xml);
	// 2021-02-01 https://webpack.js.org/guides/asset-management/#customize-parser-of-json-modules
	console.log('json:');
	console.log(json.title); // output `JSON5 Example`
	console.log(json.owner.name); // output `Tom Preston-Werner`
	console.log('toml:');
	console.log(toml.title);
	console.log(toml.owner.name);
	console.log('yaml:');
	console.log(yaml.title); // output `YAML Example`
	console.log(yaml.owner.name); // output `Tom Preston-Werner`
	return element;
}
document.body.appendChild(component());