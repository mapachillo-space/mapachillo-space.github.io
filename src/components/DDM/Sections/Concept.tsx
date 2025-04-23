import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import GeneralContent from '../Content/GeneralContent';
import InfoCard from '../InfoCard';
import { Link } from 'react-router-dom';
i18n.addResourceBundle('es', 'GeneralContent', GeneralContent.es);
i18n.addResourceBundle('en', 'GeneralContent', GeneralContent.en);

const Concept = () => {
  const { t } = useTranslation('GeneralContent');

  return (
    <InfoCard id="concepto" title={`🐷${t('concept.title')}`}>
      {t('concept.body')}
      <br />
      <br />
      <Link to="/dosdemilanesa/demo" className="link">
        <button className="button">{t('concept.demo')}</button>
      </Link>
    </InfoCard>
  );
};

export default Concept;
