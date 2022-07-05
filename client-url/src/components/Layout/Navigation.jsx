import React from 'react';
import { CalendarOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import CalendarPanel from '../CalendarPanel/CalendarPanel';

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items1 = [
  {
    key: '1',
    label: 'Dashboard'
  },
  {
    key: '2',
    label: 'Analytics'
  },
  {
    key: '3',
    label: 'Engagement'
  }
];

const items2 = [
  getItem('Calendar', '1', <CalendarOutlined />),
  getItem('Manage Channels', '2', <UnorderedListOutlined />),  
]

const Navigation = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <CalendarPanel />
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default Navigation;