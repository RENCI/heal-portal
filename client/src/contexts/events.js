import { createContext, useContext, useEffect } from 'react'

const EventsContext = createContext({ })
export const useEvents = () => useContext(EventsContext)

export const EventsProvider = ({ children }) => {
  
  useEffect(() => { }, [])

  return (
    <EventsContext.Provider value={{ message: 'it works!' }}>
      { children }
    </EventsContext.Provider>
  )
}
