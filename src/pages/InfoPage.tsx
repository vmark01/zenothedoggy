import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export default function InfoPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const { t } = useTranslation()

  return (
    <div className="info-page container py-4">
      <h2 id="privacy">{t('privacyTitle')}</h2>
      <p>{t('privacyContent')}</p>

      <h2 id="copyright">{t('copyrightTitle')}</h2>
      <p>{t('copyrightContent')}</p>

      <h2 id="cookies">{t('cookiesTitle')}</h2>
      <p>{t('cookiesContent')}</p>
    </div>
  );
}
