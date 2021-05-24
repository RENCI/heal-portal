import { Router as ReachRouter } from '@reach/router'
import { useContent } from './contexts'
import { CMSPage } from './components/layout'
import {
  AccountLogoutView,
  AccountPasswordResetView,
  AccountProfileView,
} from './views/account'
import {
  CalendarView,
  DashboardView,
  DirectoryView,
} from './views/system'

const systemViews = [
  { path: '/calendar', view: CalendarView },
  { path: '/dashboard', view: DashboardView },
  { path: '/directory', view: DirectoryView },
]

export const Router = () => {
  const { pages } = useContent()

  return (
    <ReachRouter>

      { /* System Views */}
      {
        systemViews.map(({ view: Component, path }) => (
          <Component key={ path } exact path={ path }/>
        ))
      }
      
      { /* CMS Views */ }
      {
        pages.map(page => {
          return (
            <CMSPage
              key={ page.Slug } exact path={ page.path || '/' }
              id={ page.id }
              title={ page.Title }
              breadcrumbs={ page.breadcrumbs }
              markdown={ page.Content }
            />
          )
        })
      }
      
      { /* Account Views */ }
      <AccountProfileView path="/account" />
      <AccountLogoutView path="/account/logout" />
      <AccountPasswordResetView path="/account/password-reset" />

    </ReachRouter>
  )
}
