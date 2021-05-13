import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './auth'

const API_ROOT = `http://localhost:1337`
const PAGES_URL = `${ API_ROOT }/pages`

const ContentContext = createContext({ })

export const useContent = () => useContext(ContentContext)

//

export const ContentProvider = ({ children }) => {
  const { auth } = useAuth()
  const [pages, setPages] = useState(null)

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const { data } = await auth.get(PAGES_URL)
        data.forEach(page => {
          page.children = []
        })

        const atoms = data
          .filter(page => page.Parent && page.Parent.id === 1)
          .sort((p, q) => p.Title < q.Title ? -1 : 1)

        setPages(atoms)

        const rootID = data.filter(page => page.Parent === null)[0].id
        // console.log(rootID)

        const pageMap = data.sort((a, b) => b.Parent.id < a.id).map(({ id, Title, Parent }) => ({ Title, Parent, children: [] }))
        // console.log(pageMap)
        
        for (let i = data.length - 1; i >= 0; i -= 1) {
          // if (pageMap[i].Parent) {
          //   console.log(`${pageMap[i].Title} has parent "${pageMap[i].Parent.Title}"`)
          //   pageMap[pageMap[i].Parent.id].children.push(pageMap[i])
          // }
        }
      } catch (error) {
        console.log('An error occurred while fetching content.')
      }
    }

    fetchPages()
  }, [auth])

  //
 
  if (!pages) {
    return 'fetching content...'
  }

  return (
    <ContentContext.Provider value={{ pages }}>
      { children }
    </ContentContext.Provider>
  )
}
