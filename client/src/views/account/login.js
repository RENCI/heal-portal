import { Fragment, useEffect, useRef } from 'react'
import { Link } from '@reach/router'
import { useAuth } from '../../contexts/auth'
import { Button, Card, Divider, Form, Input, Layout, message, Typography } from 'antd'
import {
  LoginOutlined as LoginIcon,
  EyeInvisibleOutlined as PasswordInvisibileIcon,
  EyeTwoTone as PasswordVisibleIcon,
} from '@ant-design/icons'
import './account.css'

const { Text } = Typography

const LoginForm = () => {
  const { authenticate, errorMessage } = useAuth()
  const identifierInput = useRef()
  const passwordInput = useRef()

  const handleSubmit = credentials => authenticate(credentials)

  useEffect(() => errorMessage && message.error(errorMessage), [errorMessage])

  return (
    <Fragment>
      <Form onFinish={ handleSubmit }>
        <Form.Item name="identifier" label="username" rules={[{ required: true } ]}>
          <Input
            size="large"
            ref={ identifierInput }
          />
        </Form.Item>

        <Form.Item name="password" label="password" rules={[{ required: true } ]}>
          <Input.Password
            size="large"
            ref={ passwordInput }
            iconRender={ visible => (visible ? <PasswordVisibleIcon /> : <PasswordInvisibileIcon />) }
          />
        </Form.Item>
        
        <Form.Item>
          <Button size="large" htmlType="submit" type="primary" style={{ width: '50%' }} icon={ <LoginIcon /> }>Login</Button>
        </Form.Item>
      </Form>
    </Fragment>
  )
}

export const AccountLoginView = () => {
  return (
      <Layout className="page-wrapper unauthenticated">
        <Card
          className="login-card"
          title="HEAL Portal Login"
          style={{ width: '90%', textAlign: 'center', maxWidth: '600px', margin: 'auto', filter: 'drop-shadow(0 0 8px #a37da233)' }}
        >
          <LoginForm />
          <Divider />
          <Text>Don't have an account? <Link to="/account/register">Register now</Link>!</Text>
        </Card>
      </Layout>
  )
}
