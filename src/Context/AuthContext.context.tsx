import React, {
  createContext,
  useState,
  useEffect,
} from 'react'
import * as jwt_decode from 'jwt-decode'
import axios from 'axios'

export const AuthContext = createContext({})

const BASE_URL = 'https://kinosun.herokuapp.com'

export const AuthProvider: React.FC<{
  children: React.ReactNode
}> = (props) => {
  const { children } = props

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(
          String(localStorage.getItem('authTokens'))
        )
      : null
  )

  const [user, setUser] = useState<any>(() =>
    localStorage.getItem('authTokens')
      ? jwt_decode.default(authTokens.access_token)
      : null
  )

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode.default(authTokens.access_token))
    }
    setIsLoading(false)
  }, [authTokens, isLoading])

  const checkAuth = async () => {
    await axios
      .get<{
        access_token: string
        refresh_token: string
      }>(`${BASE_URL}/auth/refresh`, {
        headers: {
          Authorization: `Bearer ${authTokens.refresh_token}`,
        },
      })
      .then((response) => {
        localStorage.setItem(
          'authTokens',
          JSON.stringify(response.data)
        )
        setUser(JSON.stringify(response.data.access_token))
      })
      .catch((error: any) => {
        console.log(error.response?.data)
      })
  }

  const value: {
    user: any
    setUser: any
    authTokens: any
    setAuthTokens: any
    checkAuth: any
  } = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    checkAuth,
  }

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  )
}
