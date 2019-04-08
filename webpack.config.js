const path = require('path');

const renderer = {
	target: 'electron-renderer',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'renderer.js',
	}
}

module.exports = [
  renderer
];
