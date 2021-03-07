import React from "react"
import useSound from 'use-sound'

function Audio( {audio} ) {
  const soundUrl = {audio}
  const [play, { stop, isPlaying }] = useSound(soundUrl)

  return (
    <>
      <button onClick={play}>Play the sound</button>
    </>
  )
}

export default Audio
