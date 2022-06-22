import styled from 'styled-components'

export const AuthLayoutWrapper = styled.div`
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const VideoWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  &::after {
    content: '';
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
    position: absolute;
  }
`

export const SVideo = styled.video`
  z-index: -10;
`