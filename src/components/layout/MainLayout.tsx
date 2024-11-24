import { createElement } from "react";
import { Layout, Menu, MenuProps } from "antd";
import { DashboardOutlined, ProfileOutlined, SettingOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
 {
  key: '1',
  icon: createElement(DashboardOutlined),
  label: 'Dashboard',
 },
 {
  key: '2',
  icon: createElement(ProfileOutlined),
  label: 'Profile',
 },
 {
  key: '3',
  icon: createElement(SettingOutlined),
  label: 'Settings',
  children: [
   {
    key: '3-1',
    icon: createElement(UserOutlined),
    label: 'Account',
   },
   {
    key: '3-2',
    icon: createElement(VideoCameraOutlined),
    label: 'Video',
   },
   {
    key: '3-3',
    icon: createElement(UploadOutlined),
    label: 'Upload',
   }
  ]
 }
]


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
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
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
