import { Carousel } from 'antd'
import styled from 'styled-components'
import { ClockCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const SClockCircleOutlined = styled(
  ClockCircleOutlined
)``

export const SCarouselSlider = styled(Carousel)`
  height: 85vh;
  position: relative;

  & .slick-vertical .slick-slide {
    height: 85vh;
  }
`

export const SliderItem = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;
  color: ${(props) => props.theme.colors.gray.gray2};
  z-index: 40;
  font-family: 'Roboto';
  font-style: normal;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0px 0px 500px 135px rgba(0, 0, 0, 0.7) inset;
    z-index: 1;
  }
`

export const SliderItemImage = styled.img`
  height: 85vh;
  width: 100%;
  max-width: 100%;
  z-index: -10;
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  object-fit: cover;
`

export const InformationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  z-index: 3;
  height: 400px;
  width: 650px;
  position: absolute;
  bottom: 40px;
  left: 40px;
`

export const InformationGeners = styled.div``

export const GenersItem = styled.span`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  text-shadow: 0px 3px 12px
    ${(props) => props.theme.colors.gray.gray10};
`

export const InformationTitle = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-shadow: 0px 3px 12px
    ${(props) => props.theme.colors.gray.gray10};
`

export const InformationRaiting = styled.div`
  display: flex;
  column-gap: 15px;
  font-size: 16px;
`

export const RaitingItem = styled.span`
  color: ${(props) => props.theme.colors.yellow.yellow5};
  text-shadow: 0px 3px 12px #ff6b00;
`

export const InformationDescription = styled.div`
  display: flex;
  flex-direction: column;
`

export const DescriptionTitle = styled.span`
  color: ${(props) => props.theme.colors.yellow.yellow5};
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`

export const DescriptionShort = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: justify;
  text-shadow: 0px 3px 12px
    ${(props) => props.theme.colors.gray.gray10};
`

export const InformationLink = styled(Link)`
  color: ${(props) => props.theme.colors.yellow.yellow5};
  text-decoration: underline;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`

export const ItemDuration = styled.span`
  text-shadow: 0px 3px 12px
    ${(props) => props.theme.colors.gray.gray10};
`
