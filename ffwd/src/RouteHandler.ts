import Route from "./interfaces/Route";

class RouteHandler implements Route {
  
  uri: string;

  constructor(uri: string, action: Function) {

  }

  action(request: any, response: any):void {

  }

}

export default RouteHandler;