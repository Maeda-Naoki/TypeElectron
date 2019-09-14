const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const mainIndex = common.findIndex(config => config.target === "electron-main");
const rendererIndex = common.findIndex(
  config => config.target === "electron-renderer"
);

const devConfig = {
  mode: "development",
  devtool: "inline-source-map"
};

const main = merge(common[mainIndex], devConfig);
const renderer = merge(common[rendererIndex], devConfig);

module.exports = [main, renderer];
