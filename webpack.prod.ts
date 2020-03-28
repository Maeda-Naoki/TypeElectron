import { Configuration } from "webpack";
import webpackMerge from "webpack-merge";
import { main, renderer } from "./webpack.common";

const prod: Configuration = {
  mode: "production"
};

const mainConfig = webpackMerge(main, prod);
const rendererConfig = webpackMerge(renderer, prod);

export default [mainConfig, rendererConfig];
