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
    <div className="fixed w-full px-[15%] xs:px-0 xs:w-fit flex flex-col gap-2 right-1/2 translate-x-1/2 bottom-4 md:right-4 md:-translate-x-0 text-text">
      <span className="text-xs xs:text-sm md:text-base text-center">
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
