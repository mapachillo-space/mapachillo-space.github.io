import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const numberOfStars = 100;
  const stars = Array.from({ length: numberOfStars }).map((_, i) => ({
    key: i,
    left: `${Math.random() * 100}vw`,
    top: `${Math.random() * 100}vh`,
  }));

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && audioRef.current) {
        e.preventDefault(); // Prevent spacebar from scrolling page
        if (audioRef.current.paused) {
          audioRef.current
            .play()
            .catch((e) => console.error('Audio play failed:', e));
        } else {
          audioRef.current.pause();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="Home">
      <img
        src="/mapachillo.png"
        alt="Under Construction"
        className="bouncingImage"
      />
      <div className="message">Come Back Soon</div>
      <Link to="/dosdemilanesa" className="link">
        Dos de Milanesa
      </Link>
      {stars.map((star) => (
        <div
          className="star"
          key={star.key}
          style={{ left: star.left, top: star.top }}
        />
      ))}
    </div>
  );
};

export default Home;
