import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import adminPaths from "./admin.routes";
import routesGenerator from "../utils/routesGenerator";
import authPaths from "./auth.routes";

const router = createBrowserRouter([
 {
  path: "/",
  element: <App />,
 },
 {
  path: "/admin",
  element: <App />,
  children: routesGenerator(adminPaths)
 },
 {
  path: "/faculty",
  element: <App />,
  children: routesGenerator(adminPaths)
 },
 {
  path: "/student",
  element: <App />,
  children: routesGenerator(adminPaths)
 },
 {
  path: "/auth",
  element: <App />,
  children: routesGenerator(authPaths)
 }
])

export default router
