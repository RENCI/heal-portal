import { createContext, useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { navigate } from '@reach/router'

const API_ROOT = `http://localhost:1337`
const LOGIN_URL = `${ API_ROOT }/auth/local`
const LOGOUT_URL = `${ API_ROOT }/logout`
const WHOAMI_URL = `${ API_ROOT }/users/me`

const auth = Axios.create({
  baseURL: API_ROOT,
  withCredentials: true,
})

const AuthContext = createContext({ })

export const useAuth = () => useContext(AuthContext)

//

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const authenticate = async body => {
    setErrorMessage(null)
    try {
      const { data } = await auth.post(LOGIN_URL, body)
      if (!data.user) {
        throw new Error('There is no user.')
      }
      setUser(data.user)
      navigate('/')
    } catch (error) {
      setErrorMessage('An authentication error occurrered. Please try again.')
    }
  }

  const logout = async () => {
    const response = await auth.post(LOGOUT_URL)
    setUser(null)
    if (response.status === 200) {
      console.log('logged out.')
      navigate('/')
    }
  }

  useEffect(() => {
    const checkExistingAuthenticationStatus = async () => {
      try {
        const response = await auth.get(WHOAMI_URL, { withCredentials: true })
        if (response.status === 200) {
          if (response.data.id) {
            setUser(response.data)
          }
        }
      } catch (error) {
        console.log('Cannot log you in automatically.')
      }
    }
    checkExistingAuthenticationStatus()
  }, [])


  return (
    <AuthContext.Provider value={{ auth, authenticate, errorMessage, user, logout }}>
      { children }
    </AuthContext.Provider>
  )
}
