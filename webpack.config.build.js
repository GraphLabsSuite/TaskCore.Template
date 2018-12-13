const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: [
      path.join(__dirname, './src/root.tsx')
    ]
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: "build.js",
    publicPath: "/",
  },
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".jsx"]
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
        loader: "source-map-loader",
        exclude: [/node_modules/, /build/]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            },
          }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      title: 'Title',
      template: path.join(__dirname, './public/index.html')
    })
  ]
};
