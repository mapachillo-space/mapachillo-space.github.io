import './DosDeMilanesa.css';
import DDMHeader from '../components/DDM/DDMHeader';
import InfoCard from '../components/DDM/InfoCard';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import pageContent from './PageContent';

i18n.addResourceBundle('es', 'DDMPageContent', pageContent.es);
i18n.addResourceBundle('en', 'DDMPageContent', pageContent.en);

const DosDeMilanesa = () => {
  const { t } = useTranslation('DDMPageContent');
  return (
    <div className="dos-de-milanesa">
      <DDMHeader />
      <main className="ddm-content">
        <InfoCard id="concepto" title={t('concept.title')}>
          {t('concept.body')}
        </InfoCard>
        <InfoCard id="controls" title={t('controls.title')}>
          {t('controls.body')}
        </InfoCard>
      </main>
    </div>
  );
};

export default DosDeMilanesa;
