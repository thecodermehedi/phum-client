import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const { Content } = Layout;


const MainLayout = () => {
 return (
  <Layout style={{ minHeight: '100vh' }}>
   <Sidebar />
   <Layout>
    <Navbar />
    <Content style={{ margin: '24px 16px 0' }}>
     <div style={{ padding: 24, minHeight: '70vh' }}>
      <Outlet />
     </div>
    </Content>
   </Layout>
  </Layout>
 );
};

export default MainLayout;
