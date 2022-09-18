import { Menu, MenuProps } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { getParentIds } from '@/utils'

interface props {
  menus: MenuProps['items']
}

const Menus = ({ menus }: props) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const findDefaultOpenKeys = (key: string, routes: MenuProps['items']) => {
    if (!routes || !routes.length) return []
    return getParentIds(key, routes) || []
  }
  const defaultSelect = [pathname]
  const defaultOpenKeys = findDefaultOpenKeys(pathname, menus)

  console.log(defaultOpenKeys)

  const onSelect: MenuProps['onSelect'] = ({ key }) => {
    navigate({
      pathname: key
    })
  }

  return (
    <Menu
      items={menus}
      defaultOpenKeys={defaultOpenKeys}
      defaultSelectedKeys={defaultSelect}
      mode="inline"
      theme="dark"
      onSelect={onSelect}
    />
  )
}

export default Menus
