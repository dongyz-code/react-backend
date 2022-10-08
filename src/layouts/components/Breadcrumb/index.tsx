import { Breadcrumb as AntBreadcrumb } from 'antd'
import { matchRoutes, useLocation } from 'react-router-dom'
import routes from '@/config/routes'
import type { Route } from '@/types/route'

const Breadcrumb = () => {
  const { pathname } = useLocation()
  const routerMatch = matchRoutes(routes, pathname)
  return (
    <AntBreadcrumb>
      {routerMatch?.map((route) => {
        const localeRoute = route.route as Route
        if (route.pathname === '/') {
          return (
            <AntBreadcrumb.Item key={route.pathname} href="/">
              首页
            </AntBreadcrumb.Item>
          )
        } else if (route.pathname !== '/home') {
          return (
            <AntBreadcrumb.Item key={route.pathname} href={route.pathname}>
              {localeRoute?.name}
            </AntBreadcrumb.Item>
          )
        } else {
          return null
        }
      })}
    </AntBreadcrumb>
  )
}

export default Breadcrumb
