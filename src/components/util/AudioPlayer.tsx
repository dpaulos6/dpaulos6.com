import { MutedIcon } from '@/icons/MutedIcon'
import { PauseIcon } from '@/icons/PauseIcon'
import { PlayIcon } from '@/icons/PlayIcon'
import { VolumeIcon } from '@/icons/VolumeIcon'
import React, { useState, useEffect } from 'react'

interface AudioPlayerProps {
  src: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [audio] = useState(new Audio(src))
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.1)
  const [lastVolume, setLastVolume] = useState(volume)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    audio.volume = volume
  }, [volume])

  useEffect(() => {
    if (isMuted) {
      if (lastVolume === 0) setLastVolume(0.1)
      // else setLastVolume(volume);
      setVolume(0)
    } else {
      setVolume(lastVolume)
    }
  }, [isMuted])

  useEffect(() => {
    return () => {
      audio.pause()
    }
  }, [audio])

  const togglePlay = () => {
    if (audio.paused) {
      audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value)
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
    setLastVolume(newVolume)
  }

  return (
    <div className="flex-1 bg-primary py-3 px-4 rounded-xl z-10">
      <audio src={src}></audio>
      <div className="flex items-center gap-2 controls h-full">
        <button
          className="flex text-white text-3xl justify-center items-center p-2 rounded-xl hover:bg-audio-hover transition-[background-color]"
          onClick={togglePlay}
        >
          {!isPlaying ? <PlayIcon /> : <PauseIcon />}
        </button>
        <button
          id="volumeButton"
          className="flex text-white text-3xl justify-center items-center p-2 rounded-xl hover:bg-audio-hover transition-[background-color] z-20"
          onClick={toggleMute}
        >
          {isMuted ? <MutedIcon /> : <VolumeIcon />}
        </button>
        <div className="flex items-center w-full h-full rounded-xl hover:bg-audio-hover transition-[background-color] cursor-pointer">
          <input
            id="volumeSlider"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-full py-6 px-3"
          />
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer
