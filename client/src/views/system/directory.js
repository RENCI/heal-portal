import { useState } from 'react'
import { Page } from '../../components/layout'
import { useContent } from '../../contexts'
import { List } from 'antd'

const Directory = ({ items }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={ items }
      renderItem={ item => (
        <List.Item>
          <List.Item.Meta
            title={ item.displayName }
            description={ item.username }
          />
        </List.Item>
      )}
    />
  )
}

export const DirectoryView = () => {
  const { users } = useContent()
  const [filteredUsers, setFilteredUsers] = useState(users)
  const [query, setQuery] = useState('')

  const handleChangeQuery = event => {
    if (event.target.value.trim()) {
      setFilteredUsers(users.filter(user => user.displayName.toLowerCase().includes(event.target.value)))
    } else {
      setFilteredUsers(users)
    }
    setQuery(event.target.value)
  }

  return (
    <Page
      title="Directory"
      breadcrumbs={[
        { text: 'Home', path: '/' },
        { text: 'Directory', path: '/directory' },
      ]}
    >
      <input value={ query } onChange={ handleChangeQuery } />
      {
        filteredUsers && <Directory items={ filteredUsers } />
      }
    </Page>
  )
}