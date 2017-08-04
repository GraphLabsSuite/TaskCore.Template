import * as express from "express";
import * as path from "path";
import * as webpack from "webpack";
import * as webpackMiddleware from "webpack-dev-middleware";
import * as webpackHotMiddleware from "webpack-hot-middleware";

import webpackConfig from "./webpack.config";
const app = express();

function initWebpack(): void {
  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost",
    },
  }));
  app.use(webpackHotMiddleware(compiler));
}

function initExpress(): void {
  app.use(express.static(path.join(__dirname, "../public"))); // serve static files from public folder
}

function start(): void {
  initWebpack();
  initExpress();

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.listen(3000, () => {
    console.log("Server is listening on the port 3000...")
  });
}

/** Starting module of the server
 * @module Starting server module */
export default {
  start,
};