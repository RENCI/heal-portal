import { useState } from 'react'
import { Link } from '@reach/router'
import { Router } from './router'
import { Divider, Layout, Space } from 'antd'
import { useAuth } from './contexts'
import { AccountLoginView } from './views/account'
import { MainMenu } from './components/layout'

const { Sider } = Layout

//

export const App = () => {
  const { user } = useAuth()
  const [collapsed, setCollapsed] = useState(false)


  if (!user) {
    return <AccountLoginView />
  }

  // don't forget AccountRegisterView

  return (
    <Layout className="page-wrapper authenticated">
      <Sider className="sider" theme="dark" collapsible collapsed={ collapsed } onCollapse={ () => setCollapsed(!collapsed) } >
        <Space direction="vertical">
          <Link to="/"><div className={ `brand ${ collapsed ? `mini` : 'normal' }`} /></Link>
          <Divider style={{ height: '2px', backgroundColor: '#a37da233' }} />
          <MainMenu />
        </Space>
      </Sider>
      <Layout className="main">
        <Router />
      </Layout>
    </Layout>
  )
}
