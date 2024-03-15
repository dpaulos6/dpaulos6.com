import { MutedIcon } from '@/icons/MutedIcon'
import { PauseIcon } from '@/icons/PauseIcon'
import { PlayIcon } from '@/icons/PlayIcon'
import { VolumeIcon } from '@/icons/VolumeIcon'
import React, { useState, useEffect } from 'react'

interface AudioPlayerProps {
  src: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const defaultVolume = 0.15
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(defaultVolume)
  const [lastVolume, setLastVolume] = useState(volume)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    setAudio(new Audio(src))
  }, [])

  useEffect(() => {
    if (audio) {
      audio.volume = volume
    }
  }, [volume, audio])

  useEffect(() => {
    if (isMuted && audio) {
      if (lastVolume === 0) setLastVolume(defaultVolume)
      audio.volume = 0
    } else if (audio) {
      audio.volume = lastVolume
    }
  }, [isMuted])

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause()
      }
    }
  }, [audio])

  const togglePlay = () => {
    if (audio) {
      if (audio.paused) {
        audio.play()
        setIsPlaying(true)
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    }
  }

  const toggleMute = () => {
    if (!isMuted) {
      setLastVolume(volume)
      setVolume(0)
    } else {
      setVolume(lastVolume)
    }
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
      {audio && <audio src={src}></audio>}
      <div className="flex items-center text-white controls">
        <button
          onClick={togglePlay}
          className="flex text-white text-3xl justify-center items-center p-2 rounded-xl hover:bg-audio-hover transition-[background-color]"
        >
          {!isPlaying ? <PlayIcon /> : <PauseIcon />}
        </button>
        <button
          id="volumeButton"
          className="flex text-white text-3xl justify-center items-center p-2 rounded-xl hover:bg-audio-hover transition-[background-color]"
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
