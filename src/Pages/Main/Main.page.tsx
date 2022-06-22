import React, { useContext } from 'react'
import PopularitySlider from '../../Components/PopularitySlider/PopularitySlider'
import CustomSlider from '../../Components/Slider/Slider'
import { MainContext } from '../../Context/MainContext.context'
import {
  MainPageWrapper,
  PopularityLine,
  PopularityTitle,
  PopularityWrapper,
} from './SMain'

export const MainPage: React.FC = () => {
  const { recentlyAdded, kinopoiskPopular, IMDbPopular } =
    useContext<any>(MainContext)

  if (
    recentlyAdded === undefined ||
    kinopoiskPopular === undefined ||
    IMDbPopular === undefined
  ) {
    return null
  }

  return (
    <MainPageWrapper>
      <CustomSlider sliderItems={recentlyAdded} />
      {!!kinopoiskPopular.films.length && (
        <PopularityWrapper>
          <PopularityTitle>
            Популярные фильмы по рейтингу Кинопоиска
          </PopularityTitle>
          <PopularityLine />
          <PopularitySlider
            content={kinopoiskPopular.films}
          />
        </PopularityWrapper>
      )}
      {!!kinopoiskPopular.serials.length && (
        <PopularityWrapper>
          <PopularityTitle>
            Популярные сериалы по рейтингу Кинопоиск
          </PopularityTitle>
          <PopularityLine />
          <PopularitySlider
            content={kinopoiskPopular.serials}
          />
        </PopularityWrapper>
      )}
      {!!IMDbPopular.films.length && (
        <PopularityWrapper>
          <PopularityTitle>
            Популярные фильмы по рейтингу IMDb
          </PopularityTitle>
          <PopularityLine />
          <PopularitySlider
            content={IMDbPopular.films}
          />
        </PopularityWrapper>
      )}
      {!!IMDbPopular.serials.length && (
        <PopularityWrapper>
          <PopularityTitle>
            Популярные сериалы по рейтингу IMDb
          </PopularityTitle>
          <PopularityLine />
          <PopularitySlider
            content={IMDbPopular.serials}
          />
        </PopularityWrapper>
      )}
    </MainPageWrapper>
  )
}
