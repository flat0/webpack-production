// 2021-01-26
import Print from './print'; // 2021-02-03 https://webpack.js.org/guides/caching#module-identifiers
// 2021-02-03 https://webpack.js.org/guides/code-splitting#dynamic-imports
function getComponent() {return import('lodash')
	// 2021-02-03
	// «The reason we need `default`
	// is that since webpack 4, when importing a CommonJS module,
	// the import will no longer resolve to the value of module.exports,
	// it will instead create an artificial namespace object for the CommonJS module.»
	// https://webpack.js.org/guides/code-splitting#dynamic-imports
	// https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655
	.then(({default: _}) => {
		const e = document.createElement('div');
		e.innerHTML = _.join(['Hello', 'webpack'], ' ');
		e.onclick = Print.bind(null, 'Hello webpack!');
		return e;
	})
	.catch((error) => 'An error occurred while loading the component')
;}
getComponent().then(с => document.body.appendChild(с));