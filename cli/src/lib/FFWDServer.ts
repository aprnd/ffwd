import * as express from "express";
import Route from "./interfaces/Route";

/**
 * FFWD server to serve FFunctions locally.
 * @class FFWDServer
 */
class FFWDServer {

  ip: string;
  port: number;
  app: any;
  routes: Route[];

  constructor(ip: string, port: number) {

    this.ip = ip;
    this.port = port;

    this.app = express();

  }

  public createRoute(route: Route): void {
    if (!this.routes.find(_route => _route.uri === route.uri)) {
      this.routes.push(route);
    }
    else {
      throw `Route ${route.uri} is already defined.`;
    }
  }

  public startServer(): void {
    this.app.listen(this.port);
    console.log(`FFWD server listening on port ${this.port}`);
  }

}

export default FFWDServer;