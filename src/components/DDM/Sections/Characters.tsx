import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import InfoCard from '../InfoCard';
import FeatureCard from '../FeatureCard';
import CharactersContent from '../Content/CharactersContent';
import './Characters.css';

i18n.addResourceBundle('es', 'CharactersContent', CharactersContent.es);
i18n.addResourceBundle('en', 'CharactersContent', CharactersContent.en);
const Characters = () => {
  const { t } = useTranslation('CharactersContent');
  return (
    <InfoCard id="characters" title={t('title')}>
      <div className="characters-wrapper">
        <div className="player-container">
          <FeatureCard type="character" slug="miguel" />
        </div>
      </div>
      <h2>{t('clients.title')}</h2>
      <div className="characters-wrapper">
        <div className="client-container">
          <div className="client-card">
            <FeatureCard type="character" slug="clients.gato" />
          </div>
          <div className="client-card">
            <FeatureCard type="character" slug="clients.perro" />
          </div>
          <div className="client-card">
            <FeatureCard type="character" slug="clients.camaleon" />
          </div>
          <div className="client-card">
            <FeatureCard type="character" slug="clients.mamut" />
          </div>
        </div>
      </div>
      <h2>{t('obstacles.title')}</h2>
      <div className="characters-wrapper">
        <div className="player-container">
          <FeatureCard type="character" slug="obstacles.tlacuache" />
        </div>
      </div>
    </InfoCard>
  );
};

export default Characters;
