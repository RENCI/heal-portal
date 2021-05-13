import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal } from "@azure/msal-react";

const EventsContext = createContext({ })
export const useEvents = () => useContext(EventsContext)

const graphEndpoint = 'https://graph.microsoft.com/v1.0/me'

export const EventsProvider = ({ children }) => {
  const { accounts, inProgress, instance } = useMsal()
  const [accessToken, setAccessToken] = useState(null)
  const isAuthenticated = useIsAuthenticated()

  console.log(accessToken)

  const RequestAccessToken = () => {
    const request = {
      account: accounts[0]
    }

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance.acquireTokenSilent(request).then(response => {
      setAccessToken(response.accessToken)
    })
  }

  useEffect(() => RequestAccessToken(), [])

  return (
    <EventsContext.Provider value={{ message: 'it works!' }}>
      <AuthenticatedTemplate>
          <p>You are signed in!</p>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
          <p>You are not signed in! Please sign in.</p>
      </UnauthenticatedTemplate>
      <pre children={ JSON.stringify(instance, null, 2) } />>
      { children }
    </EventsContext.Provider>
  )
}
