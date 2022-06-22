import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Carousel } from 'antd'

export const SPopularitySlider = styled(Carousel)``

export const CustomLink = styled(Link)`
  width: 10%;
  margin: 20px;
  border-radius: 5px;
`

export const SliderItem = styled.div`
  width: 100%;
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
    z-index: 1;
  }
`

export const ItemLogo = styled.img`
  height: 300px;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  z-index: -1;
`

export const ItemTitle = styled.span`
  color: ${(props) => props.theme.colors.gray.gray1};
  position: absolute;
  bottom: 10px;
  z-index: 10;
  left: 10px;
  right: 10px;
`
