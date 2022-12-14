import { lazy } from 'react'
import BasicLayout from '@/layouts/BasicLayout'
import { pickMenusByRoutes, transformRoutes } from './utils'
import type { Route } from '@/types/route'

export const routes: Route[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      { path: '/', redirect: '/home' },
      { name: '首页', path: '/home', component: lazy(() => import('@/pages/Home')) },
      {
        name: '权限管理',
        path: '/permission',
        children: [
          { path: '', redirect: 'menuList' },
          { name: '菜单管理', path: 'menuList', component: lazy(() => import('@/pages/AuthorityManage/Menu')) },
          { name: '角色管理', path: 'roleList', component: lazy(() => import('@/pages/AuthorityManage/Role')) }
        ]
      },
      {
        name: '组件',
        path: '/components',
        children: [
          { path: '', redirect: 'editor' },
          { name: '富文本', path: 'editor', component: lazy(() => import('@/pages/Editor')) }
        ]
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: lazy(() => import('@/pages/Login')),
    hideInMenu: true
  },
  {
    name: '404',
    path: '*',
    component: lazy(() => import('@/pages/NotFound')),
    hideInMenu: true
  }
]

export const menus = pickMenusByRoutes(routes)

export default transformRoutes(routes)
