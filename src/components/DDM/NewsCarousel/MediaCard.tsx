import { useState, useRef } from 'react';
import './NewsCarousel.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import DevNewsContent from '../Content/DevNewsContent';

i18n.addResourceBundle('es', 'DevNews', DevNewsContent.es);
i18n.addResourceBundle('en', 'DevNews', DevNewsContent.en);

interface MediaCardProps {
  slug: string;
}

export const MediaCard = ({ slug }: MediaCardProps) => {
  const { t } = useTranslation('DevNews');
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
        <img src={t(`${slug}.thumbnail`)} alt={t(`${slug}.alt`)} />
        {t(`${slug}.mediaSrc`) != `${slug}.mediaSrc` && (
          <>
            <button className="play-button" onClick={toggleAudio}>
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <audio ref={audioRef}>
              <source src={t(`${slug}.mediaSrc`)} type="audio/mpeg" />
              Tu navegador no soporta audio.
            </audio>
          </>
        )}
      </div>
      <p>
        <strong>{t(`${slug}.date`)}</strong> — {t(`${slug}.body`)}
      </p>
    </div>
  );
};
export default MediaCard;
