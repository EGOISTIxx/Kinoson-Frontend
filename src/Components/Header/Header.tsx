import React from 'react'
import { Link } from 'react-router-dom'
import CustomNavLink from '../NavLink/NavLink'
import {
  HeaderLinks,
  HeaderLogo,
  HeaderWrapper,
  SSearchOutlined,
  SUserOutlined,
  SPopover,
} from './SHeader'

const Header: React.FC = () => {
  const userList = (
    <>
      <CustomNavLink to={'me'}>Профиль</CustomNavLink>
      <CustomNavLink to={'buySubscribe'}>
        Подписка
      </CustomNavLink>
      <span>Выход</span>
    </>
  )

  return (
    <HeaderWrapper>
      <CustomNavLink to={'/'}>
        <HeaderLogo>kinoson</HeaderLogo>
      </CustomNavLink>
      <HeaderLinks>
        <CustomNavLink to={'/search'}>
          <SSearchOutlined /> Поиск
        </CustomNavLink>
        <CustomNavLink to={'/'}>Главная</CustomNavLink>
        <CustomNavLink to={'/films'}>Фильмы</CustomNavLink>
        <CustomNavLink to={'/serials'}>
          Сериалы
        </CustomNavLink>
        <SPopover
          trigger='hover'
          placement='bottom'
          content={userList}>
          <SUserOutlined />
        </SPopover>
      </HeaderLinks>
    </HeaderWrapper>
  )
}

export default Header
