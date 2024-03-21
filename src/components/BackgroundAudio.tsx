'use client'
import React, { useEffect, useState } from 'react'
import AudioPlayer from './util/AudioPlayer'
import { useSwipeable } from 'react-swipeable'
import config from 'next/config'

const BackgroundAudio: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined)
  const [containerSwipeStyles, setContainerSwipeStyles] = useState('')
  const [labelSwipeStyles, setLabelSwipeStyles] = useState('')
  const audioContainer = React.useRef<HTMLDivElement>(null)
  const audioLabel = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const audio = document.getElementById('bgMusic') as HTMLAudioElement
    if (audio) {
      audio.volume = 0.1
    }

    // Function to handle window resize and update states accordingly
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setIsTouchDevice(window.innerWidth <= 768)
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Call handleResize once when the component mounts to set initial values
    handleResize()

    // Cleanup function to remove event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function playMusic() {
    const audio = document.getElementById('bgMusic') as HTMLAudioElement
    if (audio) {
      audio.play()
    }
  }

  const handlers = useSwipeable({
    onSwipedUp: () => {
      if (audioContainer.current) {
        setContainerSwipeStyles('bottom-0')
      }
      if (audioLabel.current) {
        setLabelSwipeStyles('-top-4 opacity-100')
      }
    },
    onSwipedDown: () => {
      if (audioContainer.current) {
        setContainerSwipeStyles('')
      }
      if (audioLabel.current) {
        setLabelSwipeStyles('')
      }
    },
    ...config,
  });

  return (
    <>
      <div className='flex md:hidden w-full h-1/3 absolute bottom-0 z-50' {...handlers}></div>
      <div ref={audioContainer} className={`fixed min-w-[332px] p-4 xs:w-fit flex flex-col gap-2 right-1/2 translate-x-1/2 -bottom-[4.5rem] group md:right-0 md:-translate-x-0 text-text transition-all !duration-500 z-50 ${isTouchDevice ? containerSwipeStyles : 'hover:bottom-0 group'}`}>
        <span ref={audioLabel} className={`w-full text-[.85rem] xs:text-sm md:text-base text-center absolute left-1/2 -translate-x-1/2 top-4 opacity-0 ${isTouchDevice ? labelSwipeStyles : 'group-hover:-top-4 group-hover:opacity-100' } transition-all !duration-500 select-none cursor-default`}>
          Click{' '}
          <button className="font-bold text-primary" onClick={playMusic}>
            play
          </button>{' '}
          for an amazing experience
        </span>
        <AudioPlayer src="bgmusic.mp3" />
      </div>
    </>
    
  )
}

export default BackgroundAudio
