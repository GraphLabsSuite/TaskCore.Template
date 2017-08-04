import * as path from "path";
import webpack = require("webpack");
export default {
  entry: path.join(__dirname, '../src/index.tsx'),
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx'],
  },
  module: {
    rules: [
      // {
      //   test: /\.(ts|tsx)$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/
      // },
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
}