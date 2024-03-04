import React, { useEffect } from 'react';

const BackgroundAudio: React.FC = () => {
  useEffect(() => {
    const audio = document.getElementById('bgMusic') as HTMLAudioElement;
    if (audio) {
      audio.volume = 0.15;
    }
  }, []);

  return (
    <audio id="bgMusic" className='fixed bottom-4 right-4' controls autoPlay loop>
      <source src="bgmusic.mp3" type="audio/ogg" />
      Your browser does not support the audio element.
    </audio>
  );
}

export default BackgroundAudio;
