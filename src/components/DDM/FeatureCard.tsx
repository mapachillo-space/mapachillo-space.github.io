import React from 'react';
import './FeatureCard.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import CharactersContent from './Content/CharactersContent';
import IngredientsContent from './Content/IngredientsContent';

i18n.addResourceBundle('es', 'character', CharactersContent.es);
i18n.addResourceBundle('en', 'character', CharactersContent.en);
i18n.addResourceBundle('es', 'ingredient', IngredientsContent.es);
i18n.addResourceBundle('en', 'ingredient', IngredientsContent.en);

interface FeatureCardProps {
  type: string;
  slug: string;
  cardColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  type,
  slug,
  cardColor = '#ffeef6',
}) => {
  const { t } = useTranslation(type);
  return (
    <div className="feature-card" style={{ backgroundColor: cardColor }}>
      <div className="card-border">
        <div className="card-header">
          <h3 className="card-title">{t(`${slug}.name`)}</h3>
        </div>
        <div className="card-image-container">
          <img
            src={t(`${slug}.thumbnail`)}
            alt={t(`${slug}.alt`)}
            className="card-image"
          />
        </div>
        <div className="card-body">{t(`${slug}.description`)}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
