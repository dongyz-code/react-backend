import React, { useState } from 'react'
import { Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Outlet } from 'react-router-dom'
import { menus } from '@/config/routes'
import Menus from './components/Menus'
import Breadcrumb from './components/Breadcrumb'
import RouteTabs from '@/layouts/components/RouteTabs'
import css from './basicLayout.module.less'

const { Sider, Header, Content, Footer } = Layout
const BasicLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = (collapse: boolean) => setCollapsed(collapse)

  return (
    <Layout className={css.basic_layout} style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} trigger={null} className="app_side">
        <div className="app_side_logo"></div>
        <Menus menus={menus}></Menus>
      </Sider>

      <Layout className="app_right_layout">
        <Header className="app_header">
          <div onClick={() => setCollapsed(!collapsed)} className="app_header_icon">
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>

          <Breadcrumb />
        </Header>
        <Content className="app_content">
          <RouteTabs>
            <Outlet></Outlet>
          </RouteTabs>
        </Content>
        <Footer className="app_footer">React Template ©2022 Created by Dong</Footer>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
