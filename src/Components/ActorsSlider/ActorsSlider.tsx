import React from 'react'
import {
  ItemImage,
  ItemName,
  SCarousel,
  SliderItemWrapper,
} from './SActorsSlider'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

type TActors = {
  name: string
  avatar: string
}

const ActorsSlider: React.FC<{ actors: TActors[] }> = (
  props
) => {
  const { actors } = props

  return (
    <SCarousel spaceBetween={30} slidesPerView={8}>
      {actors.map((actor: TActors) => {
        return (
          <SwiperSlide key={actor.name}>
            <SliderItemWrapper key={actor.name}>
              <ItemImage src={actor.avatar} />
              <ItemName>{actor.name}</ItemName>
            </SliderItemWrapper>
          </SwiperSlide>
        )
      })}
    </SCarousel>
  )
}

export default ActorsSlider
