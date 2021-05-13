import { Page } from '../../components/layout'
import { useAuth } from '../../contexts/auth'

export const AccountProfileView = () => {
  const { user } = useAuth()
  
  return (
    <Page
      title="Registration"
      breadcrumbs={[
        { text: 'Home', path: '/' },
        { text: 'Account', path: '/account' },
        { text: 'Register', path: '/account/register' },
      ]}
    >
      <pre>
        { JSON.stringify(user, null, 2) }
      </pre>
    </Page>
  )
}
