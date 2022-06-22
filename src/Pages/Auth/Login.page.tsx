import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Field } from 'react-final-form'
import { AuthContext } from '../../Context/AuthContext.context'
import jwtDecode from 'jwt-decode'
import { api } from '../../Utils/apiAxios'
import TextInput from '../../Components/TextInput/TextInput'
import {
  FormWrapper,
  SMailOutlined,
  SLockOutlined,
  SEyeInvisibleOutlined,
  SEyeTwoTone,
  FormTitle,
  RedirectText,
} from './SAuth'
import PasswordInput from '../../Components/PasswordInput/PasswordInput'
import CustomButton from '../../Components/Button/Button'
import CustomLink from '../../Components/Link/CustomLink'
import { notification } from 'antd'

interface Values {
  email: string
  password: string
}

export const LoginPage: React.FC = () => {
  const { setUser, setAuthTokens } = useContext<
    | {
        user: any
        setUser: any
        authTokens: any
        setAuthTokens: any
      }
    | any
  >(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = async (values: Values) => {
    await api
      .post('/auth/local/signin', {
        email: values.email,
        password: values.password,
      })
      .then((data) => {
        notification.success({
          message: `Вы успешно вошли`,
          placement: 'bottomRight',
        })
        navigate('/', { replace: true })
        setAuthTokens(data.data)
        setUser(jwtDecode(data.data.access_token))
        localStorage.setItem(
          'authTokens',
          JSON.stringify(data.data)
        )
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response)
        }
        notification.error({
          message: `Ошибка регистрации`,
          description: error.response.data.message,
          placement: 'bottomRight',
        })
      })
  }

  return (
    <Form
      onSubmit={handleSubmit}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
      }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <FormTitle>Авторизация</FormTitle>
          <Field name='email'>
            {({ input, meta }) => (
              <TextInput
                autoComplete='off'
                prefix={<SMailOutlined />}
                type='email'
                placeholder='Почта'
                {...input}
              />
            )}
          </Field>
          <Field name='password'>
            {({ input, meta }) => (
              <PasswordInput
                prefix={<SLockOutlined />}
                type='Email'
                placeholder='Пароль'
                iconRender={(visible: boolean) =>
                  visible ? (
                    <SEyeTwoTone />
                  ) : (
                    <SEyeInvisibleOutlined />
                  )
                }
                {...input}
              />
            )}
          </Field>
          <CustomButton
            authBtn={true}
            type='primary'
            disabled={submitting}
            htmlType='submit'>
            Войти
          </CustomButton>
          <RedirectText>
            Нет аккаунта?{' '}
            <CustomLink to={'/auth/signup'}>
              Зарегистрироваться
            </CustomLink>
          </RedirectText>
        </FormWrapper>
      )}
    />
  )
}
