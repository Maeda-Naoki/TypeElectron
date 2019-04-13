const path = require('path');

const renderer = {
	target: 'electron-renderer',
	entry: './src/renderer/renderer.js',
	module: {
		rules: [
			{
				test: /\.css/,
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'renderer.js',
	}
}

module.exports = [
  renderer
];
