import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import '../components/InfoPage.css'

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
      <section id="privacy" className="info-section">
        <h2>{t('privacyTitle')}</h2>
        <p>{t('privacyContent')}</p>
      </section>

      <section id="copyright" className="info-section">
        <h2>{t('copyrightTitle')}</h2>
        <p>{t('copyrightContent')}</p>
      </section>

      <section id="cookies" className="info-section">
        <h2>{t('cookiesTitle')}</h2>
        <p>{t('cookiesContent')}</p>
      </section>
    </div>
  );
}
