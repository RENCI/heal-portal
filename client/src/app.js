import { useState } from 'react'
import { Link } from '@reach/router'
import { Router } from './router'
import { Divider, Layout, Space } from 'antd'
import { useAuth } from './contexts'
import { AccountLoginView } from './views/account'
import { MainMenu } from './components/layout'
import { useMsal } from '@azure/msal-react'

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

function ProfileContent() {
    const { instance, accounts, inProgress } = useMsal()
    const [accessToken, setAccessToken] = useState(null)

    const name = accounts[0] && accounts[0].name

    function RequestAccessToken() {
        const request = {
            account: accounts[0]
        }

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            setAccessToken(response.accessToken)
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                setAccessToken(response.accessToken)
            })
        })
    }

    return (
        <>
            <h5 className="card-title">Welcome {name}</h5>
            {accessToken ? 
                <p>Access Token Acquired!</p>
                :
                <button variant="secondary" onClick={RequestAccessToken}>Request Access Token</button>
            }
        </>
    )
}