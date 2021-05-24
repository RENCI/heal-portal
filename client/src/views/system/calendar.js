import { Page } from '../../components/layout'
import { useEvents } from '../../contexts'

export const CalendarView = () => {
  const data = useEvents()

  return (
    <Page
      title="Calendar"
      breadcrumbs={[
        { text: 'Home', path: '/' },
        { text: 'Calendar', path: '/calendar' },
      ]}
    >
      <pre>
        events data:
        { JSON.stringify(data, null, 2) }
      </pre>
    </Page>
  )
}
