import React from 'react'
import { Tabs, TabsProps } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import ErrorPage from '@/components/ErrorPage'
import { useRouteTabs } from '@/modal/routeTabs'
import css from './index.module.less'

interface props {
  children?: any
}

const RouteTabs: React.FC<props> = ({ children }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const routeTabs = useRouteTabs((state) => state.routeTabs)
  const removeTabs = useRouteTabs((state) => state.removeTab)
  const items = routeTabs.map((item) => ({ ...item, children: children || <ErrorPage /> }))
  const onTabChange: TabsProps['onChange'] = (activeKey) => {
    navigate(activeKey)
  }

  const onEdit: TabsProps['onEdit'] = (key, action) => {
    if (action !== 'remove') return
    if (typeof key !== 'string') return
    removeTabs(key)
  }

  console.log('routeTabs', routeTabs)
  return (
    <Tabs
      className={css.route_tabs}
      activeKey={pathname}
      items={items}
      onChange={onTabChange}
      onEdit={onEdit}
      hideAdd
      animated
      type="editable-card"
      size="small"
    />
  )
}

export default RouteTabs
