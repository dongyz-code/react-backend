import React from 'react'
import { Tabs, TabsProps } from 'antd'
import { useNavigate, useLocation, matchRoutes } from 'react-router-dom'
import ErrorPage from '@/components/ErrorPage'
import { useRouteTabs } from '@/modal/routeTabs'
import routes from '@/config/routes'
import type { Route } from '@/types/route'
import css from './index.module.less'

interface props {
  children?: any
}

const RouteTabs: React.FC<props> = ({ children }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const routeTabs = useRouteTabs((state) => state.routeTabs)
  const removeTabs = useRouteTabs((state) => state.removeTab)
  const addTabs = useRouteTabs((state) => state.addTabs)
  const items = routeTabs.map((item) => ({ ...item, children: children || <ErrorPage /> }))
  const onTabChange: TabsProps['onChange'] = (activeKey) => {
    navigate(activeKey)
  }

  const onEdit: TabsProps['onEdit'] = (key, action) => {
    if (action !== 'remove') return
    if (typeof key !== 'string') return
    removeTabs(key)
  }

  const onRouteChange = (pathname: string) => {
    const isExistsRouteTabs = routeTabs.some((tab) => tab.key === pathname)
    if (isExistsRouteTabs) return

    const routesMatch = matchRoutes(routes, pathname)
    const currRoute = routesMatch?.find((route) => route.pathname === pathname)
    const currLocaleRouteConf = currRoute?.route as Route
    const { name, hideInMenu, redirect } = currLocaleRouteConf || {}
    if (hideInMenu || redirect) return
    if (pathname === '/') return

    addTabs({ key: pathname, label: name || pathname })
  }

  onRouteChange(pathname)
  return items.length ? (
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
  ) : (
    children
  )
}

export default RouteTabs
