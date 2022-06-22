import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import { MainProvider } from '../../Context/MainContext.context'
import { UserProvider } from '../../Context/UserContext.context'
import { MainLayoutWrapper } from './SMainLayout.layout'

const MainLayout: React.FC = () => {
  const navigate = useNavigate()

  return (
    <MainProvider>
      <UserProvider>
        <MainLayoutWrapper>
          <Header />
          <Outlet />
        </MainLayoutWrapper>
      </UserProvider>
    </MainProvider>
  )
}

export default MainLayout
