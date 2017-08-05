import * as express from "express";
import * as path from "path";
import * as webpackMiddleware from "webpack-dev-middleware";
import * as webpackHotMiddleware from "webpack-hot-middleware";

import webpackConfig from "./webpack.config";
import webpack = require("webpack");
import {Compiler} from "webpack";

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

    this.app.get('*', (req: express.Request, res: express.Response) => {
      res.sendFile(path.resolve("public/index.html"));
    });

    this.app.listen(3000, () => {
      console.log("Server is listening on the port 3000...")
    });
  }

  public initWebpack(): void {
    const compiler: Compiler = webpack(webpackConfig);
    this.app.use(webpackMiddleware(compiler, {
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