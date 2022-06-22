import React from 'react'

import dayjs from 'dayjs'

import {
  DescriptionShort,
  DescriptionTitle,
  GenersItem,
  InformationDescription,
  InformationGeners,
  InformationLink,
  InformationRaiting,
  InformationTitle,
  InformationWrapper,
  ItemDuration,
  RaitingItem,
  SCarouselSlider,
  SClockCircleOutlined,
  SliderItem,
  SliderItemImage,
} from './SSlider'
import formatTrackTime from '../../Utils/formatTime'

type TBanner = {
  createdAt: string
  duration: string
  externalRainting: { kinopoisk: number; IMDb: number }
  geners: string[]
  id: string
  images: { logo: string; mainPoster: string }
  releaseDate: string
  shortDescription: string
  titleEn: string
  titleRu: string
  type: string
}

const CustomSlider: React.FC<{ sliderItems: TBanner[] }> = (
  props
) => {
  const { sliderItems } = props

  return (
    <SCarouselSlider
      autoplay
      infinite
      autoplaySpeed={5000}
      dotPosition='right'>
      {sliderItems.map((film: TBanner) => {
        return (
          <SliderItem key={film.id}>
            <SliderItemImage src={film.images.mainPoster} />
            <InformationWrapper>
              <InformationGeners>
                {film.geners.map(
                  (
                    gener: string,
                    index: number,
                    array: string[]
                  ) => {
                    return (
                      <GenersItem key={index + 1}>
                        {gener}
                        {index + 1 !== array.length && ', '}
                      </GenersItem>
                    )
                  }
                )}
              </InformationGeners>
              <InformationTitle>
                {film.titleRu} <br />({film.titleEn}) <br />
                ({film.releaseDate})
              </InformationTitle>
              <InformationRaiting>
                <RaitingItem>
                  Kinopoisk:{' '}
                  {film.externalRainting.kinopoisk}
                </RaitingItem>
                <RaitingItem>
                  IMDb: {film.externalRainting.IMDb}
                </RaitingItem>
                <ItemDuration>
                  <SClockCircleOutlined />
                  &nbsp;
                  {formatTrackTime(
                    Number(film.duration) * 60
                  )}
                </ItemDuration>
              </InformationRaiting>
              <InformationDescription>
                <DescriptionTitle>
                  Описание
                </DescriptionTitle>
                <DescriptionShort>
                  {film.shortDescription}
                </DescriptionShort>
              </InformationDescription>
              <InformationLink
                to={`/watch/${film.type}/${film.id}`}>
                Перейти к просмотру
              </InformationLink>
            </InformationWrapper>
          </SliderItem>
        )
      })}
    </SCarouselSlider>
  )
}

export default CustomSlider
