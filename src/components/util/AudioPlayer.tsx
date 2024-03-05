import { PauseIcon } from '@/icons/PauseIcon'
import { PlayIcon } from '@/icons/PlayIcon'
import React, { useState, useEffect } from 'react'

interface AudioPlayerProps {
  src: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [audio] = useState(new Audio(src))
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.1)

  useEffect(() => {
    audio.volume = volume
  }, [volume])

  const togglePlay = () => {
    if (audio.paused) {
      audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(event.target.value))
  }

  useEffect(() => {
    // Cleanup function to stop audio when unmounting
    return () => {
      audio.pause()
    }
  }, [audio])

  return (
    <div className="flex-1 bg-primary py-5 px-6 rounded-xl z-10">
      <audio src={src}></audio>
      <div className="flex items-center controls">
        <button onClick={togglePlay}>
          {!isPlaying ? (
            <PlayIcon />
          ) : (
            <PauseIcon />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  )
}

export default AudioPlayer
