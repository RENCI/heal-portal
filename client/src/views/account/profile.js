import { Page } from '../../components/layout'
import { useAuth } from '../../contexts/auth'
import { Link } from '@reach/router'

export const AccountProfileView = () => {
  const { user } = useAuth()
  
  return (
    <Page
      title={ `${ user.displayName }'s Profile` }
      breadcrumbs={[
        { text: 'Home', path: '/' },
        { text: 'Account', path: '/account' },
      ]}
    >
      <pre>
        { JSON.stringify(user, null, 2) }
      </pre>

      <Link to="/account/password-reset">Reset Password</Link>
    </Page>
  )
}
