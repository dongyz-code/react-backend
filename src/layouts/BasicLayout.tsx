import React, { useState } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { menus } from '@/config/routes'

import Menus from './components/Menus'
import css from './basicLayout.module.less'

const { Sider, Header, Content, Footer } = Layout
const BlankLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = (collapse: boolean) => setCollapsed(collapse)

  return (
    <Layout className={css.basic_layout} style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className="app_side">
        <div className="app_side_logo"></div>
        <Menus menus={menus}></Menus>
      </Sider>

      <Layout>
        <Header className="app_header"></Header>
        <Content className="app_content">
          <Outlet></Outlet>
        </Content>
        <Footer className="app_footer">React Template ©2022 Created by Dong</Footer>
      </Layout>
    </Layout>
  )
}

export default BlankLayout
