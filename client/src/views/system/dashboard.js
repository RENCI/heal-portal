import { Page } from '../../components/layout'

export const DashboardView = () => {
  return (
    <Page
      title="Dashboard"
      breadcrumbs={[
        { text: 'Home', path: '/' },
        { text: 'Dashboard', path: '/dashboard' },
      ]}
    >
      dashboard<br/>
      dashboard<br/>
      dashboard<br/>
      dashboard<br/>
    </Page>
  )
}