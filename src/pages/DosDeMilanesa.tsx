import './DosDeMilanesa.css';
import DDMHeader from '../components/DDM/DDMHeader';
import TranslateButton from '../components/DDM/TranslateButton';
import InfoCard from '../components/DDM/InfoCard';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import pageContent from './PageContent';
import NewsCarousel from '../components/DDM/NewsCarousel/index';
import { ImageCard } from '../components/DDM/NewsCarousel/ImageCard';
import { MediaCard } from '../components/DDM/NewsCarousel/MediaCard';
import FeatureCard from '../components/DDM/FeatureCard';

i18n.addResourceBundle('es', 'DDMPageContent', pageContent.es);
i18n.addResourceBundle('en', 'DDMPageContent', pageContent.en);

const DosDeMilanesa = () => {
  const { t } = useTranslation('DDMPageContent');
  return (
    <div className="dos-de-milanesa">
      <TranslateButton />
      <DDMHeader />
      <main className="ddm-content">
        <InfoCard id="concepto" title={t('concept.title')}>
          {t('concept.body')}
        </InfoCard>
        <InfoCard id="noticias" title={t('devnews.title')}>
          <NewsCarousel>
            <MediaCard
              date={t('devnews.APR01_25.date')}
              description={t('devnews.APR01_25.body')}
              imageSrc="/dosdemilanesa/img/illust/guitarra-sketch.svg"
              audioSrc="/dosdemilanesa/music/tema.mp3"
            />
            <ImageCard
              date={t('devnews.MAR30_25.date')}
              description={t('devnews.MAR30_25.body')}
              imageSrc="/dosdemilanesa/img/screen-captures/demo-8.gif"
              altText={t('devnews.MAR30_25.alt')}
            />
            <ImageCard
              date={t('devnews.MAR29_25.date')}
              description={t('devnews.MAR29_25.body')}
              imageSrc="/dosdemilanesa/img/screen-captures/demo-7.gif"
              altText={t('devnews.MAR29_25.alt')}
            />
            <ImageCard
              date={t('devnews.MAR28_25.date')}
              description={t('devnews.MAR28_25.body')}
              imageSrc="/dosdemilanesa/img/screen-captures/demo-6.gif"
              altText={t('devnews.MAR28_25.alt')}
            />
            <ImageCard
              date={t('devnews.MAR27_25.date')}
              description={t('devnews.MAR27_25.body')}
              imageSrc="/dosdemilanesa/img/screen-captures/demo-5.gif"
              altText={t('devnews.MAR27_25.alt')}
            />
            <ImageCard
              date={t('devnews.MAR26_25.date')}
              description={t('devnews.MAR26_25.body')}
              imageSrc="/dosdemilanesa/img/screen-captures/demo-3.gif"
              altText={t('devnews.MAR26_25.alt')}
            />
            <ImageCard
              date={t('devnews.MAR25_25.date')}
              description={t('devnews.MAR25_25.body')}
              imageSrc="/dosdemilanesa/img/screen-captures/demo-2.gif"
              altText={t('devnews.MAR25_25.alt')}
            />
            <ImageCard
              date={t('devnews.MAR24_25.date')}
              description={t('devnews.MAR24_25.body')}
              imageSrc="/dosdemilanesa/img/screen-captures/demo-1.gif"
              altText={t('devnews.MAR24_25.alt')}
            />
            <ImageCard
              date={t('devnews.MAR23_25.date')}
              description={t('devnews.MAR23_25.body')}
              imageSrc="/dosdemilanesa/img/illust/control-sketch1.jpeg"
              altText={t('devnews.MAR23_25.alt')}
            />
            <ImageCard
              date={t('devnews.MAR22_25.date')}
              description={t('devnews.MAR22_25.body')}
              imageSrc="/dosdemilanesa/img/illust/concept-sketch.jpeg"
              altText={t('devnews.MAR22_25.alt')}
            />
          </NewsCarousel>
        </InfoCard>
        <InfoCard id="controls" title={t('controls.title')}>
          {t('controls.body')}
        </InfoCard>
        {/* characters info card */}
        <InfoCard id="characters" title={t('characters.title')}>
          <div className="characters-wrapper">
            <div className="player-container">
              <FeatureCard
                title={t('characters.miguel.name')}
                body={t('characters.miguel.description')}
                img="/dosdemilanesa/img/characters/miggy-piggy-sketch.svg"
              />
            </div>
          </div>
          <h2>{t('characters.clients.title')}</h2>
          <div className="characters-wrapper">
            <div className="client-container">
              <div className="client-card">
                <FeatureCard
                  title={t('characters.clients.gato.name')}
                  body={t('characters.clients.gato.description')}
                  img="/dosdemilanesa/img/characters/cat-sketch.svg"
                />
              </div>
              <div className="client-card">
                <FeatureCard
                  title={t('characters.clients.perro.name')}
                  body={t('characters.clients.perro.description')}
                  img="/dosdemilanesa/img/characters/xolo-sketch.svg"
                />
              </div>
              <div className="client-card">
                <FeatureCard
                  title={t('characters.clients.camaleon.name')}
                  body={t('characters.clients.camaleon.description')}
                  img="/dosdemilanesa/img/characters/chameleon-sketch.svg"
                />
              </div>
              <div className="client-card">
                <FeatureCard
                  title={t('characters.clients.mamut.name')}
                  body={t('characters.clients.mamut.description')}
                  img="/dosdemilanesa/img/characters/mammoth-sketch.svg"
                />
              </div>
            </div>
          </div>
          <h2>{t('characters.obstacles.title')}</h2>
          <div className="characters-wrapper">
            <div className="player-container">
              <FeatureCard
                title={t('characters.obstacles.tlacuache.name')}
                body={t('characters.obstacles.tlacuache.description')}
                img="/dosdemilanesa/img/characters/tlacuache-sketch.svg"
              />
            </div>
          </div>
        </InfoCard>
      </main>
    </div>
  );
};

export default DosDeMilanesa;
