import { Link } from 'react-router-dom';
import './Footer.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className="footer-container mt-auto">
            <footer className="footer px-4 py-4">

                <div className="footer-content">
                    {/* Logo és copyright */}
                    <div className="footer-brand">
                        <Link to="/" aria-label="Logo">
                            <img
                                src="dog_logo1.png"
                                alt="Logo"
                                className="footer-logo"
                            />
                        </Link>
                        <span className="copyright-text">&copy; VM. {t('footerText')}</span>
                    </div>

                    {/* Linkek */}
                    <div className="footer-links">
                        <Link to="/info#privacy" className="footer-link">{t('privacyPolicy')}</Link>
                        <Link to="/info#copyright" className="footer-link">{t('Copyright')}</Link>
                        <Link to="/info#cookies" className="footer-link">{t('cookiePolicy')}</Link>
                    </div>

                    {/* Social */}
                    <div className="footer-social">
                        <a
                            className="social-link"
                            href="https://www.instagram.com/mark.veer"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <i className="bi bi-instagram social-icon"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}