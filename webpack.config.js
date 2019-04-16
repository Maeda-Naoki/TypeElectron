const path = require('path');

const main = {
  target: 'electron-main',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};

const renderer = {
  target: 'electron-renderer',
  entry: './src/renderer/renderer.js',
  module: {
    rules: [
      {
        test: /\.css/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'renderer.js',
  }
}


module.exports = [
  main,
  renderer
];
