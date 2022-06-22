import React, {
  createContext,
  useState,
  useEffect,
} from 'react'
import useAxios from '../Utils/hooks/useAxios'

export const MainContext = createContext({})

export const MainProvider: React.FC<{
  children: React.ReactNode
}> = (props) => {
  const { children } = props

  const axiosPrivate = useAxios()

  const [recentlyAdded, setRecentlyAdded] = useState<any>()
  const [kinopoiskPopular, setKinopoiskPopular] =
    useState<any>()
  const [IMDbPopular, setIMDbPopular] = useState<any>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axiosPrivate
      .get('/film/recentlyAdded')
      .then((recentlyAddedFilms) => {
        setRecentlyAdded(recentlyAddedFilms.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    axiosPrivate
      .get('/film/find/Kinopoisk')
      .then((kinopoiskPopular) => {
        setKinopoiskPopular(kinopoiskPopular.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    axiosPrivate
      .get('/film/find/IMDb')
      .then((IMDbPopular) => {
        setIMDbPopular(IMDbPopular.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const values: {
    isLoading: boolean
    recentlyAdded: object[]
    kinopoiskPopular: object
    IMDbPopular: object
  } = {
    isLoading,
    recentlyAdded,
    kinopoiskPopular,
    IMDbPopular,
  }

  return (
    <MainContext.Provider value={values}>
      {isLoading ? null : children}
    </MainContext.Provider>
  )
}
