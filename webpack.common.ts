import * as path from "path";
import { Configuration } from "webpack";

export const main: Configuration = {
  target: "electron-main",
  node: {
    __dirname: false,
    __filename: false
  },
  entry: path.resolve(__dirname, "src", "main", "main.ts"),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  }
};

export const renderer: Configuration = {
  target: "electron-renderer",
  entry: path.resolve(__dirname, "src", "renderer", "renderer.ts"),
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "renderer.js"
  }
};
