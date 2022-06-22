import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const SCarousel = styled(Swiper)`
  max-width: 1250px !important;
  width: 100% !important;
`

export const SliderItemWrapper = styled.div`
  height: 190px !important;
  width: 130px !important;
  margin: 0 25px !important;
  position: relative !important;
  border-radius: 15px !important;
  overflow: hidden !important;
  position: relative;

  &:first-child {
    margin-left: 0 !important;
  }

  &:last-child {
    margin-right: 0 !important;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(37, 37, 37, 0.33) -8.93%,
      rgba(103, 74, 0, 0.88) 121.13%
    );
    z-index: 1;
  }
`

export const ItemImage = styled.img`
  max-height: 100%;
  width: 100%;
  height: 100%;
  min-width: 100%;
  object-fit: cover;
  border-radius: 15px;
`

export const ItemName = styled.span`
  position: absolute;
  bottom: 8px;
  left: 8px;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  z-index: 10;
  color: ${(props) => props.theme.colors.gray.gray2};
`
