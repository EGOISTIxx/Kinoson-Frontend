import React from 'react'
import CustomButton from '../../Components/Button/Button'
import {
  CustomLink,
  SButtonWrapper,
  WelcomText,
  WelcomWrapper,
} from './SWelcom'

export const WelcomPage: React.FC = () => {
  return (
    <WelcomWrapper>
      <WelcomText>
        просмотр на компьютере или телевизоре <br />
        присоединяйтесь!
      </WelcomText>
      <SButtonWrapper>
        <CustomLink to={'/auth/signin'}>
          <CustomButton authBtn={true}>Войти</CustomButton>
        </CustomLink>
        <CustomLink to={'/auth/signup'}>
          <CustomButton authBtn={true}>
            Зарегистрироваться
          </CustomButton>
        </CustomLink>
      </SButtonWrapper>
    </WelcomWrapper>
  )
}
