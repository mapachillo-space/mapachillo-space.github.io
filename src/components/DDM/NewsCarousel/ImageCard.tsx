import './NewsCarousel.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import DevNewsContent from '../Content/DevNewsContent';

i18n.addResourceBundle('es', 'DevNews', DevNewsContent.es);
i18n.addResourceBundle('en', 'DevNews', DevNewsContent.en);
interface ImageCardProps {
  slug: string;
}

const ImageCard = ({ slug }: ImageCardProps) => {
  const { t } = useTranslation('DevNews');
  return (
    <div className="dev-card">
      <img src={t(`${slug}.thumbnail`)} alt={t(`${slug}.alt`)} />
      <p>
        <strong>{t(`${slug}.date`)}</strong> — {t(`${slug}.body`)}
      </p>
    </div>
  );
};

export default ImageCard;
