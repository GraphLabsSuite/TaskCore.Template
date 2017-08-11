const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      path.join(__dirname, './src/index.tsx')
    ]
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: "bundle.js",
    publicPath: "/",
    library: '[name]'
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
        loader: "source-map-loader"
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
