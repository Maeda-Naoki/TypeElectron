const path = require('path');

const renderer = {
	target: 'electron-renderer',
	entry: './src/renderer/renderer.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'renderer.js',
	}
}

module.exports = [
  renderer
];
