import { useState, useRef } from 'react';
import './NewsCarousel.css';

interface MediaCardProps {
  date: string;
  description: string;
  imageSrc: string;
  audioSrc?: string;
}

export const MediaCard = ({
  date,
  description,
  imageSrc,
  audioSrc,
}: MediaCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="dev-card guitarra-card">
      <div className="audio-wrapper">
        <img src={imageSrc} alt="Media content" />
        {audioSrc && (
          <>
            <button className="play-button" onClick={toggleAudio}>
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <audio ref={audioRef}>
              <source src={audioSrc} type="audio/mpeg" />
              Tu navegador no soporta audio.
            </audio>
          </>
        )}
      </div>
      <p>
        <strong>{date}</strong> — {description}
      </p>
    </div>
  );
};
export default MediaCard;
