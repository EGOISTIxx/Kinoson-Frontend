import styled from 'styled-components'

export const SearchWrapper = styled.div`
  margin: 0 auto;
  padding-top: 75px;
  width: 80vw;
  height: 100vh;

  & > :first-child {
    width: 100%;
    & > :first-child {
      width: 100%;
      & > * {
        width: 100%;
        color: ${(props) => props.theme.colors.gray.gray2};
        font-size: 16px;
      }
    }
  }
`

export const SearchedWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
`

export const SearchedItem = styled.div`
  height: 35vh;
  margin: 10px;
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
  object-fit: fill;
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
