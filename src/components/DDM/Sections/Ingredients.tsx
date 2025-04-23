import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import InfoCard from '../InfoCard';
import FeatureCard from '../FeatureCard';
import IngredientsContent from '../Content/IngredientsContent';
import './Features.css';

i18n.addResourceBundle('es', 'IngredientsContent', IngredientsContent.es);
i18n.addResourceBundle('en', 'IngredientsContent', IngredientsContent.en);
const Ingredients = () => {
  const { t } = useTranslation('IngredientsContent');
  return (
    <InfoCard id="characters" title={`🥪${t('title')}`}>
      <h2>{t('base.title')}</h2>
      <div className="features-wrapper">
        <div className="features-container">
          <div className="features-card">
            <FeatureCard type="ingredient" slug="base.jamon" />
          </div>
          <div className="features-card">
            <FeatureCard type="ingredient" slug="base.frijoles_negros" />
          </div>
          <div className="features-card">
            <FeatureCard type="ingredient" slug="base.queso_amarillo" />
          </div>
        </div>
      </div>
      <h2>{t('toppings.title')}</h2>
      <div className="features-wrapper">
        <div className="features-container">
          <div className="features-card">
            <FeatureCard type="ingredient" slug="toppings.salsa_verde" />
          </div>
          <div className="features-card">
            <FeatureCard type="ingredient" slug="toppings.salsa_roja" />
          </div>
          <div className="features-card">
            <FeatureCard type="ingredient" slug="toppings.aguacate" />
          </div>
          <div className="features-card">
            <FeatureCard type="ingredient" slug="toppings.crema" />
          </div>
          <div className="features-card">
            <FeatureCard type="ingredient" slug="toppings.limon" />
          </div>
        </div>
      </div>
    </InfoCard>
  );
};

export default Ingredients;
