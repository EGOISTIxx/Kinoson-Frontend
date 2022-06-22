import React, {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'
import { useLocation } from 'react-router-dom'
import useAxios from '../Utils/hooks/useAxios'

export const WatchContext = createContext({})

export const WatchProvider: React.FC<{
  children: React.ReactNode
}> = (props) => {
  const { children } = props

  const axiosPrivate = useAxios()

  const location = useLocation()

  const [currentFilm, setCurrentFilm] = useState()
  const [filmActors, setFilmActors] = useState([])
  const [filmComments, setFilmComments] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const filmId = location.pathname.split('/')[3]

  useEffect(() => {
    setIsLoading(true)

    axiosPrivate
      .get(`/film/one/${filmId}`)
      .then((film) => {
        setCurrentFilm(film.data)
      })
      .finally(() => {
        setIsLoading(false)
      })

    return () => {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    setIsLoading(true)

    axiosPrivate
      .get(`/film/getActors/${filmId}`)
      .then((film) => {
        setFilmActors(film.data)
      })
      .finally(() => {
        setIsLoading(false)
      })

    return () => {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getFilmComments(filmId)
  }, [])

  const getFilmComments = async (filmId: string) => {
    await axiosPrivate
      .get(`/film/getComments/${filmId}`)
      .then((comments) => {
        setFilmComments(comments.data)
      })
  }

  const createComment = async (
    text: string,
    filmId: string,
    username: string,
    userImage: string = ''
  ) => {
    await axiosPrivate.post(`/film/createComment`, {
      text,
      filmId,
      username,
      userImage,
    })
  }

  const values: {
    currentFilm: any
    filmActors: object[]
    getFilmComments: (filmId: string) => Promise<void>
    setFilmComments: Dispatch<
      SetStateAction<undefined | object[] | any>
    >
    filmComments: object[] | undefined
    createComment: (
      text: string,
      filmId: string,
      username: string,
      userImage?: string
    ) => Promise<void>
    setCurrentFilm: Dispatch<
      SetStateAction<undefined | object | any>
    >
  } = {
    currentFilm,
    filmActors,
    getFilmComments,
    setFilmComments,
    filmComments,
    createComment,
    setCurrentFilm,
  }

  return (
    <WatchContext.Provider value={values}>
      {isLoading ? null : children}
    </WatchContext.Provider>
  )
}
