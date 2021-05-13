import { Page } from '../../components/layout'

export const AccountPasswordResetView = () => {
  return (
    <Page
      title="Password Reset"
      breadcrumbs={[
        { text: 'Home', path: '/' },
        { text: 'Account', path: '/account' },
        { text: 'Password Reset', path: '/account/password-reset' },
      ]}
    >
      reset password from, old pw, new pw & confirm
    </Page>
  )
}