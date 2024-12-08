import AcademicSemesters from "../pages/admin/academicSemester/AcademicSemesters";
import CreateAcademicSemester from "../pages/admin/academicSemester/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

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
 },
 {
  name: "Academic Semester Management",
  children: [
   {
    name: "Academic Semesters",
    path: "academic-semesters",
    element: <AcademicSemesters />,
   },
   {
    name: "Create Academic Semester",
    path: "create-academic-semester",
    element: <CreateAcademicSemester />,
   },

  ]
 },
]

export default adminPaths
