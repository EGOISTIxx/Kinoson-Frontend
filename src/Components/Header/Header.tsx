import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext.context'
import useAxios from '../../Utils/hooks/useAxios'
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
  const axiosPrivate = useAxios()

  const navigate = useNavigate()

  const { setUser, setAuthTokens } = useContext<
    | {
        user: any
        setUser: any
        authTokens: any
        setAuthTokens: any
      }
    | any
  >(AuthContext)

  const handleClickExit = async () => {
    await axiosPrivate.post('/auth/logout').then(() => {
      setAuthTokens(null)
      setUser(null)
      localStorage.removeItem('authTokens')
      navigate('/auth/signin', { replace: true })
    })
  }

  const userList = (
    <>
      <CustomNavLink to={'me'}>Профиль</CustomNavLink>
      {/* <CustomNavLink to={'buySubscribe'}>
        Подписка
      </CustomNavLink> */}
      <span
        onClick={handleClickExit}
        style={{ cursor: 'pointer' }}>
        Выход
      </span>
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
