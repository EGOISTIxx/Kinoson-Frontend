import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {
  AuthLayoutWrapper,
  SVideo,
  VideoWrapper,
} from './SAuthLayout.layout'

const AuthLayout: React.FC = () => {
  return (
    <AuthLayoutWrapper>
      <VideoWrapper>
        <SVideo
          crossOrigin='anonymous | use-credentials'
          src='https://739005.selcdn.ru/KinoSon/videoplayback%20(online-video-cutter.com).mp4'
          autoPlay
          muted
          loop
        />
      </VideoWrapper>
      <Outlet />
    </AuthLayoutWrapper>
  )
}

export default AuthLayout
