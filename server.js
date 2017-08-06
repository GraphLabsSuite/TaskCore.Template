const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const port = process.env.PORT || 3000;
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log("Server listened on: " + port)
});
