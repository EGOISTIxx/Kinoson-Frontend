import React, { useContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { AuthContext } from './Context/AuthContext.context'
import { LoginPage, RegistrationPage } from './Pages/Auth'
import { theme } from './Theme/Theme'
import AuthLayout from './Layouts/Auth/AuthLayout.layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MainPage } from './Pages/Main'
import MainLayout from './Layouts/Main/MainLayout.layout'
import { WatchPage } from './Pages/Watch/Watch.page'
import { WatchProvider } from './Context/WatchContext.context'
import { SubscribePage } from './Pages/Subscribe/Subscribe.page'
import { SearchPage } from './Pages/Search/Search.page'
import { FilmsPage } from './Pages/Films/Films.page'
import { ProfilePage } from './Pages/Profile/Profile.page'
import { SerialsPage } from './Pages/Serials/Serials.page'

const App = () => {
  const { checkAuth, authTokens, user } =
    useContext<any>(AuthContext)

  useEffect(() => {
    if (localStorage.getItem('authTokens')) {
      checkAuth()
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {!user ? (
          <Route path='/auth/' element={<AuthLayout />}>
            <Route path='signin' element={<LoginPage />} />
            <Route
              path='signup'
              element={<RegistrationPage />}
            />
          </Route>
        ) : (
          <Route path='/' element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route
              path='watch/:type/:id'
              element={
                <WatchProvider>
                  <WatchPage />
                </WatchProvider>
              }
            />
            <Route
              path='buySubscribe'
              element={<SubscribePage />}
            />
            <Route path='search' element={<SearchPage />} />
            <Route path='films' element={<FilmsPage />} />
            <Route
              path='serials'
              element={<SerialsPage />}
            />
            <Route path='me' element={<ProfilePage />} />
          </Route>
        )}
        <Route
          path='*'
          element={
            <Navigate
              to={user ? '/' : '/auth/signin'}
              replace
            />
          }
        />
      </Routes>
    </ThemeProvider>
  )
}

export default App
