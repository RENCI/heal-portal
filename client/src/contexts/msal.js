import { useEffect } from 'react'
import { createContext, useContext } from 'react'
import axios from 'axios'

// MSAL imports
import { PublicClientApplication, EventType } from '@azure/msal-browser'
import { MsalProvider as MsalContextProvider } from '@azure/msal-react'

// config
const TENANT_ID = '58b3d54f-16c9-42d3-af08-1fcabd095666'
const CLIENT_ID = '1203342b-961b-412b-b643-f64202226023'
const CLIENT_SECRET = process.env.REACT_APP_MICROSOFT_GRAPH_CLIENT_SECRET
const MICROSOFT_GRAPH_AUTHORITY = `https://login.microsoftonline.com/${ TENANT_ID }`
const MICROSOFT_GRAPH_AUTH_URL = `${ MICROSOFT_GRAPH_AUTHORITY }/oauth2/v2.0/token`

const msalConfig = {
  auth: {
    clientId: CLIENT_ID,
    authority: MICROSOFT_GRAPH_AUTHORITY,
    redirectUri: '/',
    postLogoutRedirectUri: '/',
    clientSecret: CLIENT_SECRET,
  },
}

export const msalInstance = new PublicClientApplication(msalConfig)

// Account selection logic is app dependent. Adjust as needed for different use cases.
const accounts = msalInstance.getAllAccounts()
console.log('accounts?')
if (accounts.length > 0) {
  console.log('no accounts')
  msalInstance.setActiveAccount(accounts[0])
}

msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account

    msalInstance.setActiveAccount(account)
  }
})

//

export const MsalProvider = ({ children }) => {
  return (
    <MsalContextProvider instance={ msalInstance }>
      { children }
    </MsalContextProvider>
  )
}