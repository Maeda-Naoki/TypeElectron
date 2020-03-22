import * as webpack from "webpack";
import webpackMerge from "webpack-merge";
import { main, renderer } from "./webpack.common";

const dev: webpack.Configuration = {
  mode: "development",
  devtool: "inline-source-map"
};

const mainConfig = webpackMerge(main, dev);
const rendererConfig = webpackMerge(renderer, dev);

export default [mainConfig, rendererConfig];
