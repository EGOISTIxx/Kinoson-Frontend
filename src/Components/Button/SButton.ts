import styled, { css } from 'styled-components'
import { Button } from 'antd'

export const SButton = styled(Button)`
  font-family: 'Yanone Kaffeesatz', sans-serif;
  background: ${(props) =>
    props.theme.colors.yellow.yellow5};
  border-color: ${(props) =>
    props.theme.colors.yellow.yellow5};

  &:hover {
    background: ${(props) =>
      props.theme.colors.yellow.yellow4};
    border-color: ${(props) =>
      props.theme.colors.yellow.yellow4};
  }

  &:focus {
    background: ${(props) =>
      props.theme.colors.yellow.yellow5};
    border-color: ${(props) =>
      props.theme.colors.yellow.yellow5};
  }

  ${(props: any): any => {
    if (props.authBtn) {
      return css`
        width: 450px;
        height: 60px;
        font-size: 35px;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 5px;
      `
    }
  }};
`
