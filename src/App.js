import React, { useRef, useEffect } from 'react';
import './App.css';

const App = () => {
  const numberOfStars = 100;
  const stars = Array.from({ length: numberOfStars }).map((_, i) => ({
    key: i,
    left: Math.random() * 100 + 'vw',
    top: Math.random() * 100 + 'vh',
  }));

  const audioRef = useRef();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }

    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        if (audioRef.current.paused) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <audio ref={audioRef} autoPlay loop>
        <source src="/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <img
        src="/mapachillo.png"
        alt="Under Construction"
        className="bouncingImage"
      />
      <div className="message">Come Back Soon</div>
      {stars.map((star) => (
        <div
          className="star"
          key={star.key}
          style={{ left: star.left, top: star.top }}
        ></div>
      ))}
    </div>
  );
};

export default App;
