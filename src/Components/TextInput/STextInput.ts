import { Input } from 'antd'
import styled, { css } from 'styled-components'

export const STextInput = styled(Input)`
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

  & > :last-child {
    font-size: 25px;
    border-radius: 10px;
    color: ${(props) => props.theme.colors.gray.gray1};
    background: ${(props) => props.theme.colors.gray.gray9};
  }

  ${(props: any) => {
    if (props.isCommentary) {
      return css`
        width: 600px;
        font-size: 20px;
        color: ${(props) => props.theme.colors.gray.gray1};
      `
    }
  }}
`
