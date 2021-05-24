import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './auth'

const API_ROOT = `http://localhost:1337`
const PAGES_URL = `${ API_ROOT }/pages`
const USERS_URL = `${ API_ROOT }/users`

const ContentContext = createContext({ })

export const useContent = () => useContext(ContentContext)

//

export const ContentProvider = ({ children }) => {
  const { auth } = useAuth()
  const [pages, setPages] = useState(null)
  const [users, setUsers] = useState(null)

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const { data } = await auth.get(PAGES_URL)
        if (!data) {
          setPages([])
          return
        }

        setPages(data.sort((p, q) => p.Title < q.Title ? -1 : 1))
      } catch (error) {
        console.log('An error occurred while fetching content.')
      }
    }
    const fetchUsers = async () => {
      try {
        const { data } = await auth.get(USERS_URL)
        if (!data) {
          setUsers([])
          return
        }

        setUsers(data)
      } catch (error) {
        console.log('An error occurred while fetching content.')
      }
    }
    fetchPages()
    fetchUsers()
  }, [auth])

  //
 
  if (!pages) {
    return 'fetching content...'
  }

  return (
    <ContentContext.Provider value={{ pages, users }}>
      { children }
    </ContentContext.Provider>
  )
}
