import React from 'react'
import { SPlayerWrapper } from './SPlayer'

const Player: React.FC<{
  player: string
}> = (props) => {
  const { player } = props

  return (
    <SPlayerWrapper>
      <div
        style={{
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          paddingBottom: '56.25%',
          borderRadius: 10,
        }}>
        <iframe
          src={player}
          width='100%'
          height='100%'
          frameBorder='0'
          scrolling='auto'
          title='Oblivion'
          style={{ position: 'absolute' }}
          allowFullScreen
        />
      </div>
    </SPlayerWrapper>
  )
}

export default Player
