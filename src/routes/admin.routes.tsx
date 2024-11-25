import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";
import { TSideItem } from "../types/route";

const adminPaths = [
 {
  name: "Dashboard",
  path: "dashboard",
  element: <AdminDashboard />,
 },
 {
  name: "User Management",
  children: [
   {
    name: "Create Student",
    path: "create-student",
    element: <CreateStudent />,
   },
   {
    name: "Create Faculty",
    path: "create-faculty",
    element: <CreateFaculty />,
   },
   {
    name: "Create Admin",
    path: "create-admin",
    element: <CreateAdmin />,
   },
  ]
 }
]

export const adminSidebarItems = adminPaths.reduce((acc: TSideItem[], item) => {
 if (item.path && item.element) {
  acc.push(
   { key: item.name, label: <NavLink to={item.path}>{item.name}</NavLink> }
  )
 }
 if (item.children) {
  acc.push(
   {
    key: item.name, label: item.name, children: item.children.map(child => ({
     key: child.name,
     label: <NavLink to={child.path}>{child.name}</NavLink>
    }))
   }
  )
 }
 return acc
}, [])


export default adminPaths
