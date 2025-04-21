import { useTranslation } from 'react-i18next';
//import css
import './TranslateButton.css'; // Optional styling for the component

const TranslateButton = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      aria-label="Toggle language"
    >
      <span className="world-icon">🌐</span>
      <span className="lang-label">{i18n.language === 'es' ? 'en' : 'es'}</span>
    </button>
  );
};

export default TranslateButton;
