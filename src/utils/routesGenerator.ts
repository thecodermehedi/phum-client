import { TPath, TRoute } from "../types/route";

const routesGenerator = (routes: TPath[]) => {
 return routes.reduce((accumulator: TRoute[], currentRouteObject) => {
  if (currentRouteObject.path && currentRouteObject.element) {
   accumulator.push(
    { path: currentRouteObject.path, element: currentRouteObject.element }
   )
  }
  if (currentRouteObject.children) {
   currentRouteObject.children.forEach((child) => {
    if (child.path && child.element) {
     accumulator.push(
      { path: child.path, element: child.element }
     )
    }
   })
  }
  return accumulator
 }, [])
}

export default routesGenerator;
