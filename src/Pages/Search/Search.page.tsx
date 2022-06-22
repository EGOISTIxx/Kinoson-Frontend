import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TextInput from '../../Components/TextInput/TextInput'
import useAxios from '../../Utils/hooks/useAxios'
import useDebounce from '../../Utils/hooks/useDebounce'
import {
  ItemImage,
  ItemName,
  SearchedItem,
  SearchedWrapper,
  SearchWrapper,
} from './SSearch'

type TSearchFilm = {
  id: string
  images: { logo: string; mainPoster: string }
  releaseDate: string
  titleEn: string
  titleRu: string
  type: string
}

export const SearchPage: React.FC = () => {
  const axiosPrivate = useAxios()

  const [searchedValue, setSearchedValue] = useState('')

  const [result, setResult] = useState<
    TSearchFilm[] | undefined
  >()

  const debouncedSearchedValue = useDebounce(
    searchedValue,
    1800
  )

  useEffect(() => {
    if (debouncedSearchedValue) {
      axiosPrivate
        .get(`/film/search`, {
          params: { query: debouncedSearchedValue },
        })
        .then((searcedContent) => {
          setResult(searcedContent.data)
        })
    } else {
      setResult(undefined)
    }
  }, [debouncedSearchedValue])

  const handleSearch = (event: any) => {
    if (event.target.value === '') {
      setSearchedValue('')
      return
    }

    setSearchedValue(event.target.value)
  }

  console.log(result)

  return (
    <SearchWrapper>
      <TextInput
        onChange={handleSearch}
        type='text'
        placeholder='Введите название'
      />
      <SearchedWrapper>
        {result?.map((film: TSearchFilm) => (
          <Link to={`/watch/${film.type}/${film.id}`}>
            <SearchedItem key={film.id}>
              <ItemImage src={film.images.logo} />
              <ItemName>
                {film.titleRu} ({film.titleEn})
              </ItemName>
            </SearchedItem>
          </Link>
        ))}
      </SearchedWrapper>
    </SearchWrapper>
  )
}
