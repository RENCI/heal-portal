import { useState } from 'react'
import { Page } from '../../components/layout'
import { useAuth } from '../../contexts/auth'
import { Link } from '@reach/router'
import { EditButton } from '../../components/form'
import { Form, Input, Button } from 'antd'

const ProfileEditForm = ({ profile, onSubmit }) => {
  const [profileForm] = Form.useForm()
  const initialValues = {
    username: profile.username,
    displayName: profile.displayName,
    email: profile.email,
  }

  const handleFieldChange = field => event => {
    profileForm.setFieldsValue({ [field]: event.target.value })
    console.log(field, event.target.value)
  }

  const handleSubmit = () => {
    console.log('done')
    onSubmit()

  }

  return (
    <div>
      <br /><br />
      <Form
        form={ profileForm }
        name="edit-profile"
        onFinish={ handleSubmit }
        initialValues={ initialValues }
      >
        <Form.Item label="username" name="username" rules={[{ required: true, message: 'Enter username' }]} value={ profile.username }>
          <Input onChange={ handleFieldChange('username') } />
        </Form.Item>

        <Form.Item label="displayName" name="displayName" rules={[{ required: true, message: 'Enter display name' }]} value={ profile.displayName }>
          <Input onChange={ handleFieldChange('displayName') } />
        </Form.Item>

        <Form.Item label="email" name="email" rules={[{ required: true, message: 'Enter email address' }]} value={ profile.email }>
          <Input onChange={ handleFieldChange('email') } />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Save Profile</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export const AccountProfileView = () => {
  const { user } = useAuth()
  const [editable, setEditable] = useState(false)
  
  return (
    <Page
      title={ `${ user.displayName }'s Profile` }
      breadcrumbs={[
        { text: 'Home', path: '/' },
        { text: 'Account', path: '/account' },
      ]}
      actions={ <EditButton type={ editable ? 'primary' : 'default' } icon={ editable && 'save' } onClick={ () => setEditable(!editable) } /> }
    >
      {
        editable
          ? <ProfileEditForm profile={ user } onSubmit={ () => setEditable(false) }/>
          : <pre>{ JSON.stringify(user, null, 2) }</pre>
      }

      <Link to="/account/password-reset">Reset Password</Link>
    </Page>
  )
}
