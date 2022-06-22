import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const SNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.gray.gray1};
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  transition: all .3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.yellow.yellow2};
    text-shadow: 0px 0px 10px rgba(253, 230, 138, 0.45);
  }

  &.active {
    color: ${(props) => props.theme.colors.yellow.yellow5};
  }
`
