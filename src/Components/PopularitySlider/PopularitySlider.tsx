import React from 'react'
import {
  CustomLink,
  ItemLogo,
  ItemTitle,
  SliderItem,
  SPopularitySlider,
} from './SPopularitySlider'

type TPopularityItems = {
  externalRainting: { kinopoisk: number; IMDb: number }
  id: string
  images: { logo: string; mainPoster: string }
  titleEn: string
  titleRu: string
  type: string
}

const PopularitySlider: React.FC<{
  content: TPopularityItems[]
}> = (props) => {
  const { content } = props

  return (
    <SPopularitySlider slidesPerRow={8}>
      {content.map((film: TPopularityItems) => {
        return (
          <CustomLink
            to={`/watch/${film.type}/${film.id}`}
            key={film.id}>
            <SliderItem>
              <ItemLogo src={film.images.logo} />
              <ItemTitle>
                {film.titleRu} ({film.titleEn})
              </ItemTitle>
            </SliderItem>
          </CustomLink>
        )
      })}
    </SPopularitySlider>
  )
}

export default PopularitySlider
