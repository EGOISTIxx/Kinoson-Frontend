import styled from 'styled-components'
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from '@ant-design/icons'

export const SMailOutlined = styled(MailOutlined)`
  & > * {
    font-size: 25px;
    fill: #ffffff;
  }
`

export const SLockOutlined = styled(LockOutlined)`
  & > * {
    font-size: 25px;
    fill: #ffffff;
  }
`

export const SEyeInvisibleOutlined = styled(
  EyeInvisibleOutlined
)`
  & > * {
    font-size: 25px;
    fill: #ffffff;
  }
`

export const SEyeTwoTone = styled(EyeTwoTone)`
  & > * {
    font-size: 25px;
    fill: #ffffff;
  }
`

export const SUserOutlined = styled(UserOutlined)`
  & > * {
    font-size: 25px;
    fill: #ffffff;
  }
`

export const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 450px;
  z-index: 10;

  & > :not(:last-child) {
    margin-bottom: 50px;
  }

  & > :nth-last-child(-n + 2) {
    margin-bottom: 10px;
  }
`
export const FormTitle = styled.h1`
  z-index: 10;
  color: ${(props) => props.theme.colors.gray.gray1};
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-weight: 600;
  font-size: 65px;
  text-transform: uppercase;
  letter-spacing: 4px;
`

export const RedirectText = styled.div`
  z-index: 10;
  color: ${(props) => props.theme.colors.gray.gray1};
  font-family: 'Yanone Kaffeesatz', sans-serif;
  width: 100%;
  text-align: left;
  font-size: 25px;
`

// export const SNotification = styled(notification)``
