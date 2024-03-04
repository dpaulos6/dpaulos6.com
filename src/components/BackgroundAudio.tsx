import React, { useEffect } from 'react'

const BackgroundAudio: React.FC = () => {
  useEffect(() => {
    const audio = document.getElementById('bgMusic') as HTMLAudioElement
    if (audio) {
      audio.volume = 0.1
    }
  }, [])

  function playMusic() {
    const audio = document.getElementById('bgMusic') as HTMLAudioElement
    if (audio) {
      audio.play()
    }
  }

  return (
    <div className="fixed flex flex-col gap-2 bottom-4 right-4 text-text">
      <span className="text-base text-center">
        Click{' '}
        <button className="font-bold text-primary" onClick={playMusic}>
          play
        </button>{' '}
        for an amazing experience
      </span>
      <audio id="bgMusic" controls loop>
        <source src="bgmusic.mp3" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default BackgroundAudio
