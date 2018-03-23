import RouteAction from "./RouteAction";

/**
 * Interface for a FFWDServer route
 * @interface Route
 */
interface Route {
  uri: string;
  middleware?: string[];
  action: RouteAction;
}

export default Route;