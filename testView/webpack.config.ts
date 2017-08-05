import * as path from "path";
import webpack = require("webpack");
import {Configuration} from "webpack";
const webpackConfig: Configuration = {
  entry: path.resolve('src/index.tsx'),
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDom"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

export default webpackConfig;