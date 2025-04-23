import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import GeneralContent from '../Content/GeneralContent';
import InfoCard from '../InfoCard';
i18n.addResourceBundle('es', 'GeneralContent', GeneralContent.es);
i18n.addResourceBundle('en', 'GeneralContent', GeneralContent.en);

const Team = () => {
  const { t } = useTranslation('GeneralContent');

  return (
    <InfoCard id="controls" title={t('team.title')}>
      <ul>
        <li>
          <strong>{t('team.members.gema.name')}</strong> —
          {t('team.members.gema.role')}
        </li>
        <li>
          <strong>{t('team.members.toledano.name')}</strong> —{' '}
          {t('team.members.toledano.role')}
        </li>
        <li>
          <strong>{t('team.members.arturo.name')}</strong> —{' '}
          {t('team.members.arturo.role')}
        </li>
        <li>
          <strong>{t('team.members.hideki.name')}</strong> —{' '}
          {t('team.members.hideki.role')}
        </li>
      </ul>
    </InfoCard>
  );
};

export default Team;
