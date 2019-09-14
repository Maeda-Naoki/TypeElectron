const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const mainIndex = common.findIndex(config => config.target === "electron-main");
const rendererIndex = common.findIndex(
  config => config.target === "electron-renderer"
);

const prodConfig = {
  mode: "production"
};

const main = merge(common[mainIndex], prodConfig);
const renderer = merge(common[rendererIndex], prodConfig);

module.exports = [main, renderer];
