import React, {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'
import axios from 'axios'
import useAxios from '../Utils/hooks/useAxios'

export const UserContext = createContext({})

export const UserProvider: React.FC<{
  children: React.ReactNode
}> = (props) => {
  const { children } = props

  const axiosPrivate = useAxios()

  const [userData, setUserData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    axiosPrivate
      .get(`/user/me`)
      .then((user) => {
        setUserData(user.data)
      })
      .finally(() => {
        setIsLoading(false)
      })

    return () => {
      setIsLoading(false)
    }
  }, [])

  const values: {
    userData: object | undefined
    setUserData: Dispatch<
      SetStateAction<undefined | object[] | any>
    >
  } = {
    userData,
    setUserData,
  }

  return (
    <UserContext.Provider value={values}>
      {isLoading ? null : children}
    </UserContext.Provider>
  )
}
