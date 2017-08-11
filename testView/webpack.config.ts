import * as path from "path";
import webpack = require("webpack");
import {Configuration} from "webpack";
const webpackConfig: Configuration = {
  entry: {
    bundle: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      path.resolve('src/index.tsx')
      ]
  },
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx'],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          "react-hot-loader/webpack",
          "awesome-typescript-loader"
          ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

export default webpackConfig;