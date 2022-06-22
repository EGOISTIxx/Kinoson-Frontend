import styled from 'styled-components'

export const TrailerWrapper = styled.div`
  height: 85vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(17, 17, 17, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(17, 17, 17, 0.7);
    z-index: 2;
  }
`

export const TrailerImage = styled.img`
  height: 85vh;
  width: 100%;
  max-width: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  object-fit: cover;
`

export const STrailerWrapper = styled.div`
  width: 1150px;
  height: 630px;
  z-index: 10;

  filter: drop-shadow(0px 4px 100px rgba(0, 0, 0, 0.74));
`
