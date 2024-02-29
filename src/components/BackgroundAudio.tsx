function BackgroundAudio() {
  return (
    <>
      <audio controls>
        <source src="bgmusic.mp3" type="audio/ogg"/>
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

export default BackgroundAudio;
