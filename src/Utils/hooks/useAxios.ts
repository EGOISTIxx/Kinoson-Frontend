import { useContext } from 'react'
import axios from 'axios'
import * as jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'
import { AuthContext } from '../../Context/AuthContext.context'

const BASE_URL = 'https://kinosun.herokuapp.com'

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext<
    | {
        user: any
        setUser: any
        authTokens: any
        setAuthTokens: any
      }
    | any
  >(AuthContext)

  const axiosPrivate = axios.create({
    baseURL: BASE_URL,
  })

  axiosPrivate.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${authTokens.access_token}`
    return config
  })

  axiosPrivate.interceptors.response.use(
    (config: any) => {
      return config
    },
    async (error) => {
      const originalRequest = error.config
      if (
        Number(error.response?.status) === 401 &&
        error.config &&
        !error.config._isRetry
      ) {
        originalRequest._isRetry = true
        try {
          const response = await axios.get(
            `${BASE_URL}/auth/refresh`,
            {
              headers: {
                Authorization: `Bearer ${authTokens.refresh_token}`,
              },
            }
          )
          localStorage.setItem(
            'authTokens',
            JSON.stringify(response.data)
          )
          return axiosPrivate.request(originalRequest)
        } catch (e) {
          console.log('Not authorized')
        }
      }
      throw error
    }
  )

  return axiosPrivate
}

export default useAxios
