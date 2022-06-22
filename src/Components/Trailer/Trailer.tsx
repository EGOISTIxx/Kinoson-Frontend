import React, { useRef } from 'react'
import {
  TrailerImage,
  TrailerWrapper,
  STrailerWrapper,
} from './STrailer'

const Trailer: React.FC<{
  poster: string
  trailer: string
}> = (props) => {
  const { poster, trailer } = props

  return (
    <TrailerWrapper>
      <TrailerImage src={poster} />
      <STrailerWrapper>
        <div
          style={{
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
            paddingBottom: '56.25%',
            borderRadius: 10,
          }}>
          <iframe
            src={trailer}
            width='100%'
            height='100%'
            frameBorder='0'
            scrolling='auto'
            title='Oblivion'
            style={{ position: 'absolute' }}
            allowFullScreen
          />
        </div>
      </STrailerWrapper>
    </TrailerWrapper>
  )
}

export default Trailer
