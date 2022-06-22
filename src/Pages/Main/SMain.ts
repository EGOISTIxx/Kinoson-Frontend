import styled from 'styled-components'

export const MainPageWrapper = styled.div``

export const PopularityWrapper = styled.div`
  margin: 40px 20px;
  display: flex;
  flex-direction: column;

  & > :last-child {
    margin-bottom: 15px;
  }
`

export const PopularityTitle = styled.span`
  margin-left: 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.gray.gray2};
`

export const PopularityLine = styled.span`
  width: 61px;
  height: 0px;
  margin-left: 20px;

  border: 1px solid
    ${(props) => props.theme.colors.yellow.yellow5};
`
