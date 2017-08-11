const path = require('path');
const webpack = require('webpack');
const bootstrapEntryPoints = require('./webpack.bootstrap.config.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      bootstrapEntryPoints.prod,
      path.join(__dirname, './src/index.tsx')
    ],
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: "bundle.js",
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
          "awesome-typescript-loader"
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports-loader?jQuery=jquery'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!sass-loader',
        })
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
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'Graphs',
      template: path.join(__dirname, './public/index.html')
    })
  ]
};
