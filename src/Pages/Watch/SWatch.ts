import styled, { css } from 'styled-components'
import { ReactComponent as KinopoiskLogo } from '../../Assets/Images/kinopoisk.svg'
import { ReactComponent as IMDbLogo } from '../../Assets/Images/imdb.svg'
import { Button, Form, Collapse } from 'antd'
import {
  UserOutlined,
  SendOutlined,
} from '@ant-design/icons'

const { Panel } = Collapse

export const SUserOutlined = styled(UserOutlined)`
  color: ${(props) => props.theme.colors.gray.gray2};
  font-size: 40px;
`

export const SSendOutlined = styled(SendOutlined)`
  color: ${(props) => props.theme.colors.gray.gray2};
  font-size: 30px;
`

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  & > :first-child {
    margin-top: 25px;
  }

  & > * {
    margin-bottom: 40px;
  }
`

export const InfoTitle = styled.div`
  font-weight: 700;
  font-size: 48px;
  color: ${(props) => props.theme.colors.gray.gray2};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 15px;
`

export const RaitingWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  color: ${(props) => props.theme.colors.gray.gray2};
`

export const RaitingItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
`

export const Description = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: ${(props) => props.theme.colors.gray.gray2};
  width: 50vw;
  text-align: center;
`

export const OtherInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: #0d0d0d;
  box-shadow: 0px 0px 55px 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 30px;
  width: 832px;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 15px 15px;
  flex: 1 1 20rem;
  row-gap: 15px;
`

export const Title = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.gray.gray2};
`

export const Desc = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.gray.gray2};
  white-space: nowrap;
`

export const GalleryWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  & > * {
    height: 25vh;
    flex: 1 1 5em;
    margin: 10px;
    border-radius: 15px;
    vertical-align: top;

    & > * {
      max-height: 100%;
      min-width: 100%;
      object-fit: cover;
      border-radius: 15px;
      vertical-align: baseline;
      vertical-align: top;
    }
  }
`

export const SGroup = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  z-index: 20;
`

export const RaitingButton = styled(Button)`
  color: ${(props) => props.theme.colors.gray.gray2};
  width: 120px;
  display: flex;
  justify-content: center;

  &:disabled {
    color: ${(props) => props.theme.colors.gray.gray2};
  }

  ${({ view }: { view: string }) => {
    switch (view) {
      case 'like':
        return css`
          background: ${(props) =>
            props.theme.colors.green.green6} !important;
          border-color: ${(props) =>
            props.theme.colors.green.green6} !important;

          &:hover {
            background: ${(props) =>
              props.theme.colors.green.green3} !important;
            border-color: ${(props) =>
              props.theme.colors.green.green3} !important;
            color: ${(props) =>
              props.theme.colors.gray.gray2};
          }

          &:disabled {
            color: ${(props) =>
              props.theme.colors.gray.gray2};

            &:hover {
              background: ${(props) =>
                props.theme.colors.green.green6} !important;
              border-color: ${(props) =>
                props.theme.colors.green.green6} !important;
              color: ${(props) =>
                props.theme.colors.gray.gray2};
            }
          }
        `
      case 'dislike':
        return css`
          background: ${(props) =>
            props.theme.colors.red.red6} !important;
          border-color: ${(props) =>
            props.theme.colors.red.red6} !important;

          &:hover {
            background: ${(props) =>
              props.theme.colors.red.red3} !important;
            border-color: ${(props) =>
              props.theme.colors.red.red3} !important;
            color: ${(props) =>
              props.theme.colors.gray.gray2};
          }

          &:disabled {
            color: ${(props) =>
              props.theme.colors.gray.gray2};

            &:hover {
              background: ${(props) =>
                props.theme.colors.red.red6} !important;
              border-color: ${(props) =>
                props.theme.colors.red.red6} !important;
              color: ${(props) =>
                props.theme.colors.gray.gray2};
            }
          }
        `
    }
  }}
`

export const FavouritesButton = styled(Button)`
  color: ${(props) => props.theme.colors.gray.gray1};
  font-weight: 400;
  font-size: 18px;
  background: ${(props) =>
    props.theme.colors.yellow.yellow5};
  border: 2px solid
    ${(props) => props.theme.colors.yellow.yellow6};
  height: 50px;

  & > * {
    margin: 5px 0;
    padding: 0 20px;
  }

  &:hover {
    background: ${(props) =>
      props.theme.colors.yellow.yellow4};
    border: 2px solid
      ${(props) => props.theme.colors.yellow.yellow5};
    color: ${(props) => props.theme.colors.gray.gray1};
  }

  &:focus {
    color: ${(props) => props.theme.colors.gray.gray1};
    background: ${(props) =>
      props.theme.colors.yellow.yellow5};
    border: 2px solid
      ${(props) => props.theme.colors.yellow.yellow6};
  }
`

export const SForm = styled(Form)`
  display: flex;
  align-items: center;
  column-gap: 20px;

  & > :nth-child(2) {
    margin: 0;
  }
`

export const CommentsBlock = styled.div`
  & > :nth-child(2) {
    margin: 25px 0;
    & > * {
    }
  }
`

export const CollapseWrapper = styled(Collapse)`
  width: 100%;
  background-color: transparent;
  margin-bottom: 50px;
`

export const CustomPanel = styled(Panel)`
  margin-bottom: 65px;
  border-bottom: 1px solid
    ${(props) => props.theme.colors.gray.gray2} !important;
  border-radius: 7px;

  &:first-child {
    box-shadow: 0px 4px 50px rgba(254, 243, 199, 0.59);
  }

  &:nth-child(2) {
    box-shadow: 0px 4px 50px rgba(251, 191, 36, 0.59);
  }

  &:last-child {
    box-shadow: 0px 4px 50px rgba(217, 119, 6, 0.59);
    margin-bottom: 0;
  }

  .ant-collapse-header {
    font-size: 16px;
  }

  .ant-collapse-content-box {
    display: flex;
    flex-direction: column;
    row-gap: 6px;

    .ant-radio-button-wrapper-checked {
      border-color: ${(props) =>
        props.theme.colors.yellow.yellow4} !important;
      border-right-color: ${(props) =>
        props.theme.colors.yellow.yellow4} !important;
      border-left-color: ${(props) =>
        props.theme.colors.yellow.yellow4} !important;
      border-top-color: ${(props) =>
        props.theme.colors.yellow.yellow4} !important;
      border-bottom-color: ${(props) =>
        props.theme.colors.yellow.yellow4} !important;

      &::before {
        background-color: ${(props) =>
          props.theme.colors.yellow.yellow4} !important;
      }
    }

    .ant-radio-button-wrapper {
      background: transparent;
      color: ${(props) => props.theme.colors.gray.gray2};
    }
  }

  & > * {
    color: ${(props) =>
      props.theme.colors.gray.gray2} !important;
  }
`

export const SKinopoiskLogo = styled(KinopoiskLogo)``
export const SIMDbLogo = styled(IMDbLogo)``
