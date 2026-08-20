import React, { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef();
  useEffect(() => {
    if (isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlay]);

  return (
    <div style={{ position: "fixed", bottom: 16, left: 16, zIndex: 10 }}>
      <button
        onClick={() => {
          setIsPlay(!isPlay);
        }}
      >
        🔊
      </button>
      <audio ref={audioRef} loop>
        <source src="CryOnMyShoulder.mp4" type="audio/mp4" loop />
      </audio>
    </div>
  );
}
