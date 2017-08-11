const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const environment = process.env.NODE_ENV || "development";

const input = (environment === "development")
  ?
  [{
  loader: "style-loader" // creates style nodes from JS strings
}, {
  loader: "css-loader" // translates CSS into CommonJS
}, {
  loader: "sass-loader" // compiles Sass to CSS
}]
  :
  ExtractTextPlugin.extract({
  use: [{
    loader: "css-loader"
  }, {
    loader: "sass-loader"
  }],
  // use style-loader in development
  fallback: "style-loader"
});

const entry = (environment == "development") ? {
  bundle: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    path.join(__dirname, './src/index.tsx')
  ]
} : {
  bundle: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    path.join(__dirname, './src/index.tsx')
  ],
  styles: path.join(__dirname, './src/main.scss')
};

module.exports = {
  entry: entry,
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
        use: input
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
    }),
    new ExtractTextPlugin("styles.css", {
      allChunks: true
    })
  ]
};
