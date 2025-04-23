import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import GeneralContent from '../Content/GeneralContent';
import InfoCard from '../InfoCard';
i18n.addResourceBundle('es', 'GeneralContent', GeneralContent.es);
i18n.addResourceBundle('en', 'GeneralContent', GeneralContent.en);

const Concept = () => {
  const { t } = useTranslation('GeneralContent');

  return (
    <InfoCard id="concepto" title={t('concept.title')}>
      {t('concept.body')}
    </InfoCard>
  );
};

export default Concept;
