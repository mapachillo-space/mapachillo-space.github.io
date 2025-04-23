import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import InfoCard from '../InfoCard';
import NewsCarousel from '../NewsCarousel/';
import MediaCard from '../NewsCarousel/MediaCard';
import ImageCard from '../NewsCarousel/ImageCard';
import DevNewsContent from '../Content/DevNewsContent';

i18n.addResourceBundle('es', 'DevNews', DevNewsContent.es);
i18n.addResourceBundle('en', 'DevNews', DevNewsContent.en);

const DevNews = () => {
  const { t } = useTranslation('DevNews');
  return (
    <InfoCard id="noticias" title={t('title')}>
      <NewsCarousel>
        <MediaCard slug="APR01_25" />
        <ImageCard slug="MAR30_25" />
        <ImageCard slug="MAR29_25" />
        <ImageCard slug="MAR28_25" />
        <ImageCard slug="MAR27_25" />
        <ImageCard slug="MAR26_25" />
        <ImageCard slug="MAR25_25" />
        <ImageCard slug="MAR24_25" />
        <ImageCard slug="MAR23_25" />
        <ImageCard slug="MAR22_25" />
      </NewsCarousel>
    </InfoCard>
  );
};
export default DevNews;
