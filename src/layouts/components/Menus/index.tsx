import { Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

interface props {
  menus: MenuProps['items']
}

const Menus = ({ menus }: props) => {
  const navigate = useNavigate()

  const onSelect: MenuProps['onSelect'] = ({ key }) => {
    navigate({
      pathname: key
    })
  }

  return <Menu items={menus} mode="inline" theme="dark" onSelect={onSelect} />
}

export default Menus
