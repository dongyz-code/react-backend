import React, { Suspense } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
import { Spin } from 'antd'
import BlankLayout from '@/layouts/BlankLayout'
import type { Route } from '@/types/route'
import { combineUrl } from '@/utils'

export const lazyLoadComponent = (Component: React.FC) => {
  return (
    <Suspense fallback={<Spin />}>
      <Component />
    </Suspense>
  )
}

export const transformRoutes = (routes?: Route[]): RouteObject[] => {
  if (!routes || !routes.length) return []
  return routes.map((route) => {
    const { name, path, component: Component, children, redirect } = route
    let element = null
    if (Component) {
      element = lazyLoadComponent(Component)
    }

    if (redirect) {
      element = <Navigate to={redirect} />
    }

    if (children) {
      element = Component ? <Component /> : <BlankLayout />
    }
    return {
      name,
      path,
      element,
      children: transformRoutes(children)
    }
  })
}

const transformMenuByRoutes = (routes?: Route[], parentPath = ''): any => {
  if (!routes || !routes.length) return null

  return routes
    .filter((route) => {
      return route.path && !route.hideInMenu && (route.component || route.children?.length)
    })
    .map((route) => {
      const { name, children, path, icon } = route
      const completePath = combineUrl(parentPath, path)
      return {
        key: completePath,
        label: name,
        icon,
        children: transformMenuByRoutes(children, completePath)
      }
    })
}

export const pickMenusByRoutes = (routes?: Route[]) => {
  const filterRoutes = routes?.filter((route) => !route.hideInMenu)
  let pickedMenus: Route[] = []
  filterRoutes?.forEach((route) => {
    if ((route.path === '/' || route.path === '') && route?.children?.length) {
      pickedMenus = [...pickedMenus, ...route.children]
    } else {
      pickedMenus = [...pickedMenus, route]
    }
  })

  return transformMenuByRoutes(pickedMenus)
}
