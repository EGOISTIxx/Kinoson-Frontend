import styled from 'styled-components'
import { Select, Slider } from 'antd'
import { Link } from 'react-router-dom'

const { Option } = Select

export const SerialsWrapper = styled.div`
  margin: 0 auto;
  width: 80vw;
  min-height: 100vh;
  padding: 75px 0 35px;
  color: ${(props) => props.theme.colors.gray.gray2};
`

export const FilterContainer = styled.div`
  width: 100%;
  border: 2px solid
    ${(props) => props.theme.colors.yellow.yellow5};
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 20px
    ${(props) => props.theme.colors.yellow.yellow4};
  display: flex;
  flex-wrap: wrap;
`

export const ContainerItem: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 15px;
  flex-basis: 50%;
  margin-bottom: 20px;

  ${(props: any) => {
    if (props.isYear) {
      return 'flex-basis: 100%;'
    }
  }}

  &:last-child {
    margin-bottom: 0px;
  }
`

export const ItemTitle = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`

export const ItemSelect = styled(Select)`
  width: 200px;
`

export const SelectOption = styled(Option)``

export const ItemSlider: any = styled(Slider)`
  width: 80%;

  .ant-slider-track {
    background-color: ${(props) =>
      props.theme.colors.yellow.yellow4} !important;
  }

  .ant-slider-handle {
    border: 2px solid
      ${(props) => props.theme.colors.yellow.yellow3};
  }

  .ant-slider-mark > * {
    color: ${(props) =>
      props.theme.colors.gray.gray2} !important;
  }

  ${(props: any) => {
    if (props.isYear) {
      return 'width: 90%;'
    }
  }}
`

export const SearchedWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
`

export const SLink = styled(Link)`
  margin: 25px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

export const SearchedItem = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 15px;
  vertical-align: top;
  overflow: hidden;
  position: relative;

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
  min-width: 100%;
  object-fit: cover;
  border-radius: 15px;
  vertical-align: baseline;
  vertical-align: top;
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
