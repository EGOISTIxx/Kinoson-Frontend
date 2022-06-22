import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SLink = styled(Link)`
  color: ${(props) => props.theme.colors.yellow.yellow5};

  &:hover {
    color: ${(props) => props.theme.colors.yellow.yellow4};
  }

  &:focus {
    color: ${(props) => props.theme.colors.yellow.yellow5};
  }
`
