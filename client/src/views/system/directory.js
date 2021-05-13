import { Page } from '../../components/layout'

export const DirectoryView = () => {
  return (
    <Page
      title="Directory"
      breadcrumbs={[
        { text: 'Home', path: '/' },
        { text: 'Directory', path: '/directory' },
      ]}
    >
      directory<br/>
      directory<br/>
      directory<br/>
      directory<br/>
    </Page>
  )
}