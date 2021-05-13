import { useEffect } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined as Loadingicon } from '@ant-design/icons'
import { useAuth } from '../../contexts/auth'

export const AccountLogoutView = () => {
  const { logout } = useAuth()
  
  useEffect(() => {
    const logoutTimer = setTimeout(logout, 1000)
    return () => clearTimeout(logoutTimer)
  }, [logout])

  return (
    <div className="logout-view">
      <Spin indicator={ <Loadingicon /> }size="large" tip="Logging out..." style={{ margin: 'auto' }}/>
    </div>
  )
}
