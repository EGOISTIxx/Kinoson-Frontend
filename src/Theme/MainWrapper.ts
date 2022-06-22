import styled, {
  createGlobalStyle,
} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  & .ant-notification {
    .ant-notification-notice {
      background: #0D0D0D;

      .ant-notification-notice-close-icon {
          & > :first-child {
            color: #ffffff;
          }
        }

      .ant-notification-notice-content {
        color: #ffffff !important;

        .ant-notification-notice-message {
          color: #ffffff !important;
        }
      }
    }
  }

  & .ant-popover-content {
    background: #0D0D0D;

    & .ant-popover-arrow {
      & .ant-popover-arrow-content{
        background-color: #FDE68A;
      
        &::before {
          background: linear-gradient(to left, #0D0D0D 50%, #0D0D0D 50%) no-repeat -10px -10px;
        }
      }
    }

    & .ant-popover-inner {
      background: #0D0D0D;
      border: 1px solid #FDE68A;
      border-radius: 5px;

      & .ant-popover-inner-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        & > * {
          margin: 5px;
        }

        & > :last-child {
          color: #ffffff;
        }
      }
    }
  }
`
