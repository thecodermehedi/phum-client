import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { adminSidebarItems } from "../../routes/admin.routes";

const { Header, Content, Footer, Sider } = Layout;


const MainLayout = () => {
 return (
  <Layout style={{ minHeight: '100vh' }}>
   <Sider
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={(broken) => {
     console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
     console.log(collapsed, type);
    }}
   >
    <div className="demo-logo-vertical" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10%' }}>
     <h1 style={{ color: 'white' }}>PHUM</h1>
    </div>
    <Menu theme="dark" mode="inline" items={adminSidebarItems} />
   </Sider>
   <Layout>
    <Header style={{ padding: 0 }} />
    <Content style={{ margin: '24px 16px 0' }}>
     <div
      style={{
       padding: 24,
       minHeight: 360,

      }}
     >
      <Outlet />
     </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
     Copyright ©{new Date().getFullYear()} PHUM
    </Footer>
   </Layout>
  </Layout>
 );
};

export default MainLayout;
