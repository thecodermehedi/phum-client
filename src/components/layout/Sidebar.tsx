import { Menu, Layout } from "antd";
import sidebarItemsGenerator from "../../utils/sidebarItemsGenerator";
import adminPaths from "../../routes/admin.routes";
import { userRoles } from "../../types";
import facultyPaths from "../../routes/faculty.routes";
import studentPaths from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/featues/auth/authSlice";

const Sidebar = () => {
 const role = useAppSelector(selectCurrentUser)!.role;
 let sidebarItems;

 switch (role) {
  case userRoles.SUPERADMIN:
   sidebarItems = sidebarItemsGenerator(adminPaths, userRoles.SUPERADMIN);
   break;
  case userRoles.ADMIN:
   sidebarItems = sidebarItemsGenerator(adminPaths, userRoles.ADMIN);
   break;
  case userRoles.FACULTY:
   sidebarItems = sidebarItemsGenerator(facultyPaths, userRoles.FACULTY);
   break;
  case userRoles.STUDENT:
   sidebarItems = sidebarItemsGenerator(studentPaths, userRoles.STUDENT);
   break;
  default:
   break;
 }

 return (
  <Layout.Sider
   width={280}
   breakpoint="lg"
   collapsedWidth="0"
   // onBreakpoint={(broken) => {
   //  console.log(broken);
   // }}
   onCollapse={(collapsed, type) => {
    console.log(collapsed, type);
   }}
  >
   <div className="demo-logo-vertical" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10%' }}>
    <h1 style={{ color: 'white' }}>PHUM</h1>
   </div>
   <Menu theme="dark" mode="inline" items={sidebarItems} />
  </Layout.Sider>
 )
}

export default Sidebar

