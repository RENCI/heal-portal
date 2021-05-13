import { Link } from '@reach/router'
import { Divider, Menu } from 'antd'
import {
  AppstoreOutlined as GenericIcon,
  CalendarOutlined as CalendarIcon,
  ContactsOutlined as DirectoryIcon,
  ControlOutlined as AdminIcon,
  DashboardOutlined as DashboardIcon,
  LogoutOutlined as LogoutIcon,
  UserOutlined as UserIcon,
  IdcardOutlined as ProfileIcon,
} from '@ant-design/icons'
import * as Icons from '@ant-design/icons'
import { useAuth, useContent } from '../../../contexts'

const { SubMenu } = Menu

export const MainMenu = () => {
  const { user } = useAuth()
  const { pages } = useContent()

  return (
    <Menu mode="inline" className="main-menu" theme="dark">
      <Menu.Item key={ `main-menu_Calendar` } icon={ <CalendarIcon /> }><Link to="/calendar">Calendar</Link></Menu.Item>
      <Menu.Item key={ `main-menu_Dashboard` } icon={ <DashboardIcon /> }><Link to="/dashboard">Dashboard</Link></Menu.Item>
      <Menu.Item key={ `main-menu_Directory` } icon={ <DirectoryIcon /> }><Link to="/directory">Directory</Link></Menu.Item>
      {
        pages.map(page => {
          let MenuItemIcon = GenericIcon
          if (page.icon && Icons[page.icon]) {
            MenuItemIcon = Icons[page.icon]
          }
          return (
            <Menu.Item key={ `main-menu_${ page.Title }` } icon={ <MenuItemIcon /> }>
              <Link to={ page.Slug }>{ page.Title }</Link>
            </Menu.Item>
          )
        })
      }
      <SubMenu title={ user.displayName } icon={ <UserIcon /> }>
        <Menu.Item key="account-menu_profile" icon={ <ProfileIcon /> }>
          <Link to="/account">Profile</Link>
        </Menu.Item>
        {
          user.role.id === 1 && user.editor === true && (
            <Menu.Item key="account-menu_admin" icon={ <AdminIcon /> }>
              <a href="http://localhost:1337/admin">Admin</a>
            </Menu.Item>
          )
        }
        <Menu.Item key="account-menu_logout" icon={ <LogoutIcon /> }>
          <Link to="/account/logout">Logout</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  )
}