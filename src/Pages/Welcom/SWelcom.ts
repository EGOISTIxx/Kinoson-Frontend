import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const WelcomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 650px;
  z-index: 10;

  & > :first-child {
    margin-bottom: 50px;
  }
`

export const WelcomText = styled.span`
  z-index: 10;
  color: ${(props) => props.theme.colors.gray.gray1};
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-weight: 600;
  font-size: 65px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;
`

export const SButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
`

export const CustomLink = styled(Link)`
  & > * {
    width: 100%;
    color: ${(props) => props.theme.colors.gray.gray2};

    &:hover {
      color: ${(props) => props.theme.colors.gray.gray2};
    }
  }
`
