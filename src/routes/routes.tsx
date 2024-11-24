import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import StudentDashboard from "../pages/student/StudentDashboard";
import AdminLayout from "../components/layout/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";

const router = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  children: [
   {
    index: true,
    element: <StudentDashboard />,
   },
   {
    path: "dashboard",
    element: <StudentDashboard />,
   },
   {
    path: "about",
    element: <About />,
   },
  ]
 },
 {
  path: "/admin",
  element: <AdminLayout />,
  children: [
   {
    index: true,
    element: <AdminDashboard />,
   },
   {
    path: "about",
    element: <About />,
   },
  ]
 },
 {
  path: "/auth/login",
  element: <Login />,
 },
 {
  path: "/auth/register",
  element: <Register />,
 },
])

export default router
