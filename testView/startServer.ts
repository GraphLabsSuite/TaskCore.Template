import * as express from "express";
import * as path from "path";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import * as webpackHotMiddleware from "webpack-hot-middleware";

import webpackConfig from "./webpack.config";
import webpack = require("webpack");
import {Compiler} from "webpack";

const port = process.env.PORT || 3000;

const start = () => {
  const server: Server = new Server();
  server.initWebpack();
};

class Server {
  public app; //Why express.Application does not work with app.get properly?

  public constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(express.static(path.resolve("public"))); // serve static files from public folde

    this.app.listen(port, () => {
      console.log("Server is listening on the port 3000...")
    });
  }

  public initWebpack(): void {
    const compiler: Compiler = webpack(webpackConfig);
    this.app.use(webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost",
      },
    }));
    this.app.use(webpackHotMiddleware(compiler));
  }
}

/** Starting module of the server
 * @module Starting server module */
export default {
  start,
};