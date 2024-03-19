'use client'
import React, { useEffect } from 'react'
import AudioPlayer from './util/AudioPlayer'

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
    <div className="fixed min-w-[332px] w-full p-4 xs:w-fit flex flex-col gap-2 right-1/2 translate-x-1/2 -bottom-[4.5rem] md:right-0 md:-translate-x-0 text-text hover:bottom-0 group transition-all !duration-500 z-50">
      <span className="w-full text-xs xs:text-sm md:text-base text-center absolute left-1/2 -translate-x-1/2 top-4 opacity-0 group-hover:-top-4 group-hover:opacity-100 transition-all !duration-500 select-none cursor-default">
        Click{' '}
        <button className="font-bold text-primary" onClick={playMusic}>
          play
        </button>{' '}
        for an amazing experience
      </span>
      <AudioPlayer src="bgmusic.mp3" />
    </div>
  )
}

export default BackgroundAudio
