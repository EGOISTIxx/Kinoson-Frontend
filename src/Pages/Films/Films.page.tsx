import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react'
import {
  ECountry,
  EGenr,
  EPeriod,
  ESorted,
} from '../../Constants/filter.constants'
import useAxios from '../../Utils/hooks/useAxios'
import {
  ContainerItem,
  FilmsWrapper,
  FilterContainer,
  ItemImage,
  ItemName,
  ItemSelect,
  ItemSlider,
  ItemTitle,
  SearchedItem,
  SearchedWrapper,
  SelectOption,
  SLink,
} from './SFilms'

export const FilmsPage: React.FC = () => {
  const axiosPrivate = useAxios()

  const [filters, setFilters] = useState<{
    sorted: ESorted
    period: EPeriod
    gener: EGenr
    country: ECountry
    ratingKino: [number, number]
    ratingIMDb: [number, number]
    releaseYear: [number, number]
  }>({
    sorted: ESorted.BY_ADDED,
    period: EPeriod.BY_ALL_TIME,
    gener: EGenr.ALL,
    country: ECountry.ALL,
    ratingKino: [0, 10],
    ratingIMDb: [0, 10],
    releaseYear: [2000, 2022],
  })

  const [films, setFilms] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [changedFilms, setChangedFilms] = useState<
    any[] | undefined | null | any
  >()

  useEffect(() => {
    let isMounted = true
    axiosPrivate.get(`/film/allFilms`).then((films) => {
      if (isMounted) {
        setFilms(films.data)
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (films.length) {
      if (!changedFilms) {
        setChangedFilms(films)
      }
    }
  }, [films, films.length])

  const handleChangeFilters = useCallback(
    (value, type, films: any[], stateValue) => {
      let changedFilms = [...films]

      if (type === 'sort') {
        changedFilms = changedFilms.sort((a, b) => {
          switch (value) {
            case ESorted.BY_ADDED:
              setFilters((prevValue) => {
                return {
                  ...prevValue,
                  sorted: ESorted.BY_ADDED,
                }
              })
              return b.createdAt - a.createdAt
            case ESorted.BY_KINOPOISK:
              setFilters((prevValue) => {
                return {
                  ...prevValue,
                  sorted: ESorted.BY_KINOPOISK,
                }
              })
              return (
                b.externalRainting.kinopoisk -
                a.externalRainting.kinopoisk
              )
            case ESorted.BY_IMDB:
              setFilters((prevValue) => {
                return {
                  ...prevValue,
                  sorted: ESorted.BY_IMDB,
                }
              })
              return (
                b.externalRainting.IMDb -
                a.externalRainting.IMDb
              )
            default:
              return b.createdAt - a.createdAt
          }
        })
      } else {
        changedFilms = changedFilms.sort((a, b) => {
          switch (stateValue.sorted) {
            case ESorted.BY_ADDED:
              return b.createdAt - a.createdAt
            case ESorted.BY_KINOPOISK:
              return (
                b.externalRainting.kinopoisk -
                a.externalRainting.kinopoisk
              )
            case ESorted.BY_IMDB:
              return (
                b.externalRainting.IMDb -
                a.externalRainting.IMDb
              )
            default:
              return b.createdAt - a.createdAt
          }
        })
      }

      if (type === 'period') {
        changedFilms = changedFilms.filter(
          (film, _, films) => {
            switch (value) {
              case EPeriod.BY_ALL_TIME:
                setFilters((prevValue) => {
                  return {
                    ...prevValue,
                    period: EPeriod.BY_ALL_TIME,
                  }
                })
                return films
              case EPeriod.BY_DAY:
                setFilters((prevValue) => {
                  return {
                    ...prevValue,
                    period: EPeriod.BY_DAY,
                  }
                })
                return (
                  (Number(new Date().getTime()) -
                    Number(
                      new Date(film.createdAt).getTime()
                    )) /
                    (24 * 60) <=
                  1
                )
              case EPeriod.BY_WEEK:
                setFilters((prevValue) => {
                  return {
                    ...prevValue,
                    period: EPeriod.BY_WEEK,
                  }
                })
                return (
                  (Number(new Date().getTime()) -
                    Number(
                      new Date(film.createdAt).getTime()
                    )) /
                    (24 * 60 * 60 * 1000) <=
                  7
                )
              case EPeriod.BY_MONTH:
                setFilters((prevValue) => {
                  return {
                    ...prevValue,
                    period: EPeriod.BY_MONTH,
                  }
                })
                return (
                  (Number(new Date().getTime()) -
                    Number(
                      new Date(film.createdAt).getTime()
                    )) /
                    (24 * 60 * 60 * 1000) <=
                  30
                )
              default:
                setFilters((prevValue) => {
                  return {
                    ...prevValue,
                    period: EPeriod.BY_ALL_TIME,
                  }
                })
                return films
            }
          }
        )
      } else {
        changedFilms = changedFilms.filter(
          (film, _, films) => {
            switch (stateValue.period) {
              case EPeriod.BY_ALL_TIME:
                return films
              case EPeriod.BY_DAY:
                return (
                  (Number(new Date().getTime()) -
                    Number(
                      new Date(film.createdAt).getTime()
                    )) /
                    (24 * 60) <=
                  1
                )
              case EPeriod.BY_WEEK:
                return (
                  (Number(new Date().getTime()) -
                    Number(
                      new Date(film.createdAt).getTime()
                    )) /
                    (24 * 60 * 60 * 1000) <=
                  7
                )
              case EPeriod.BY_MONTH:
                return (
                  (Number(new Date().getTime()) -
                    Number(
                      new Date(film.createdAt).getTime()
                    )) /
                    (24 * 60 * 60 * 1000) <=
                  30
                )
              default:
                return films
            }
          }
        )
      }

      if (type === 'country') {
        changedFilms = changedFilms.filter(
          (film, _, films) => {
            if (value === ECountry.ALL) {
              setFilters((prevValue) => {
                return {
                  ...prevValue,
                  country: ECountry.ALL,
                }
              })
              return films
            } else {
              setFilters((prevValue) => {
                return {
                  ...prevValue,
                  country: value,
                }
              })
              return film.countries.includes(value)
            }
          }
        )
      } else {
        changedFilms = changedFilms.filter(
          (film, _, films) => {
            if (stateValue.country === ECountry.ALL) {
              return films
            } else {
              return film.countries.includes(
                stateValue.country.toLowerCase()
              )
            }
          }
        )
      }

      if (type === 'gener') {
        changedFilms = changedFilms.filter(
          (film, _, films) => {
            if (value === EGenr.ALL) {
              setFilters((prevValue) => {
                return {
                  ...prevValue,
                  gener: EGenr.ALL,
                }
              })
              return films
            } else {
              setFilters((prevValue) => {
                return {
                  ...prevValue,
                  gener: value,
                }
              })
              return film.geners.includes(
                value.toLowerCase()
              )
            }
          }
        )
      } else {
        changedFilms = changedFilms.filter(
          (film, _, films) => {
            if (stateValue.gener === EGenr.ALL) {
              return films
            } else {
              return film.geners.includes(
                stateValue.gener.toLowerCase()
              )
            }
          }
        )
      }

      if (type === 'kinopoisk') {
        setFilters((prevValue) => {
          return {
            ...prevValue,
            ratingKino: value,
          }
        })
        changedFilms = changedFilms.filter(
          (film) =>
            +film.externalRainting.kinopoisk >= value[0] &&
            +film.externalRainting.kinopoisk <= value[1]
        )
      } else {
        changedFilms = changedFilms.filter(
          (film) =>
            +film.externalRainting.kinopoisk >=
              stateValue.ratingKino[0] &&
            +film.externalRainting.kinopoisk <=
              stateValue.ratingKino[1]
        )
      }

      if (type === 'IMDb') {
        setFilters((prevValue) => {
          return {
            ...prevValue,
            ratingIMDb: value,
          }
        })
        changedFilms = changedFilms.filter(
          (film) =>
            +film.externalRainting.IMDb >= value[0] &&
            +film.externalRainting.IMDb <= value[1]
        )
      } else {
        changedFilms = changedFilms.filter(
          (film) =>
            +film.externalRainting.IMDb >=
              stateValue.ratingIMDb[0] &&
            +film.externalRainting.IMDb <=
              stateValue.ratingIMDb[1]
        )
      }

      if (type === 'year') {
        setFilters((prevValue) => {
          return {
            ...prevValue,
            releaseYear: value,
          }
        })
        console.log(stateValue.releaseYear)
        changedFilms = changedFilms.filter(
          (film) =>
            Number(film.releaseDate) >= value[0] &&
            Number(film.releaseDate) <= value[1]
        )
      } else {
        changedFilms = changedFilms.filter(
          (film) =>
            Number(film.releaseDate) >=
              stateValue.releaseYear[0] &&
            Number(film.releaseDate) <=
              stateValue.releaseYear[1]
        )
      }

      console.log(changedFilms)

      setChangedFilms(changedFilms)
    },
    []
  )

  return (
    <FilmsWrapper>
      <FilterContainer>
        <ContainerItem>
          <ItemTitle>Сортировка</ItemTitle>
          <ItemSelect
            defaultValue={filters.sorted}
            onChange={(value) => {
              handleChangeFilters(
                value,
                'sort',
                films,
                filters
              )
            }}>
            {Object.entries(ESorted).map((option) => {
              return (
                <SelectOption
                  value={option[1]}
                  key={option[0]}>
                  {option[1]}
                </SelectOption>
              )
            })}
          </ItemSelect>
        </ContainerItem>
        <ContainerItem>
          <ItemTitle>Период</ItemTitle>
          <ItemSelect
            defaultValue={filters.period}
            onChange={(value) => {
              handleChangeFilters(
                value,
                'period',
                films,
                filters
              )
            }}>
            {Object.entries(EPeriod).map((option) => {
              return (
                <SelectOption
                  value={option[1]}
                  key={option[0]}>
                  {option[1]}
                </SelectOption>
              )
            })}
          </ItemSelect>
        </ContainerItem>
        <ContainerItem>
          <ItemTitle>Страна</ItemTitle>
          <ItemSelect
            defaultValue={filters.country}
            onChange={(value) => {
              handleChangeFilters(
                value,
                'country',
                films,
                filters
              )
            }}>
            {Object.entries(ECountry).map((option) => {
              return (
                <SelectOption
                  value={option[1]}
                  key={option[0]}>
                  {option[1]}
                </SelectOption>
              )
            })}
          </ItemSelect>
        </ContainerItem>
        <ContainerItem>
          <ItemTitle>Жанр</ItemTitle>
          <ItemSelect
            defaultValue={filters.gener}
            onChange={(value) => {
              handleChangeFilters(
                value,
                'gener',
                films,
                filters
              )
            }}>
            {Object.entries(EGenr).map((option) => {
              return (
                <SelectOption
                  value={option[1]}
                  key={option[0]}>
                  {option[1]}
                </SelectOption>
              )
            })}
          </ItemSelect>
        </ContainerItem>
        <ContainerItem>
          <ItemTitle>Рейтинг Кинопоиска</ItemTitle>
          <ItemSlider
            range
            defaultValue={filters.ratingKino}
            onChange={(value: any) => {
              console.log(value)
              handleChangeFilters(
                value,
                'kinopoisk',
                films,
                filters
              )
            }}
            min={0}
            max={10}
            marks={{
              0: '0',
              10: '10',
            }}
          />
        </ContainerItem>
        <ContainerItem>
          <ItemTitle>Рейтинг IMDb</ItemTitle>
          <ItemSlider
            range
            defaultValue={filters.ratingIMDb}
            min={0}
            max={10}
            onChange={(value: any) => {
              console.log(value)
              handleChangeFilters(
                value,
                'IMDb',
                films,
                filters
              )
            }}
            marks={{
              0: '0',
              10: '10',
            }}
          />
        </ContainerItem>
        <ContainerItem isYear={true}>
          <ItemTitle>Год выхода</ItemTitle>
          <ItemSlider
            range
            defaultValue={filters.releaseYear}
            onChange={(value: any) => {
              console.log(value)
              handleChangeFilters(
                value,
                'year',
                films,
                filters
              )
            }}
            min={2000}
            max={2022}
            isYear={true}
            marks={{
              2000: '2000',
              2022: '2022',
            }}
          />
        </ContainerItem>
      </FilterContainer>
      <SearchedWrapper>
        {films.length &&
          changedFilms?.map((film: any) => (
            <SLink
              to={`/watch/${film.type}/${film.id}`}
              key={film.id}>
              <SearchedItem>
                <ItemImage src={film.images.logo} />
                <ItemName>
                  {film.titleRu} ({film.titleEn})
                </ItemName>
              </SearchedItem>
            </SLink>
          ))}
      </SearchedWrapper>
    </FilmsWrapper>
  )
}
