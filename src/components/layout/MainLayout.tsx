import { createElement } from "react";
import { Layout, Menu } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
 (icon, index) => ({
  key: String(index + 1),
  icon: createElement(icon),
  label: `nav ${index + 1}`,
 }),
);


const MainLayout = () => {
 return (
  <Layout style={{ height: '100vh' }}>
   <Sider breakpoint="lg" collapsedWidth="0" onBreakpoint={(broken) => { console.log(broken) }}
    onCollapse={(collapsed, type) => { console.log(collapsed, type) }}>
    <div className="demo-logo-vertical" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
   </Sider>
   <Layout >
    <Header style={{ padding: 0 }} />
    <Content style={{ margin: '24px 16px 0' }}>
     <h1>The main content should go here</h1>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
     Copyright ©{new Date().getFullYear()} PH University Management Application
    </Footer>
   </Layout>
  </Layout>
 );
};

export default MainLayout;
