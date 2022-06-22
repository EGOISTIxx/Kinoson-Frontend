import { Input } from 'antd'
import styled from 'styled-components'

export const SPasswordInput = styled(Input.Password)`
  background: ${(props) => props.theme.colors.gray.gray9};
  border: 1px solid
    ${(props) => props.theme.colors.yellow.yellow5};
  width: 450px;
  height: 60px;
  border-radius: 10px;

  &:hover {
    border-color: ${(props) =>
      props.theme.colors.yellow.yellow5} !important;
  }

  &:focus {
    border-color: ${(props) =>
      props.theme.colors.yellow.yellow5};
    box-shadow: 0px 4px 42px rgba(251, 191, 36, 0.36);
    border-right-width: 1px;
    outline: 0;
  }

  & > :nth-last-child(-n + 2) {
    font-size: 25px;
    border-radius: 10px;
    color: ${(props) => props.theme.colors.gray.gray1};
    background: ${(props) => props.theme.colors.gray.gray9};
  }
`
