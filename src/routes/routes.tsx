import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import adminPaths from "./admin.routes";
import routesGenerator from "../utils/routesGenerator";
import authPaths from "./auth.routes";
import facultyPaths from "./faculty.routes";
import studentPaths from "./student.routes";

const router = createBrowserRouter([
 {
  path: "/",
  element: <App />,
 },
 {
  path: "/superadmin",
  element: <App />,
  children: routesGenerator(adminPaths)
 },
 {
  path: "/admin",
  element: <App />,
  children: routesGenerator(adminPaths)
 },
 {
  path: "/faculty",
  element: <App />,
  children: routesGenerator(facultyPaths)
 },
 {
  path: "/student",
  element: <App />,
  children: routesGenerator(studentPaths)
 },
 {
  path: "/auth",
  children: routesGenerator(authPaths)
 }
])

export default router
