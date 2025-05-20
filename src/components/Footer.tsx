import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-heading">{t('serviceTimes')}</h3>
            <p className="footer-text">{t('sundayMass')}: 10:00 AM</p>
            <p className="footer-text">{t('weekdayMass')}: 8:00 AM</p>
            <p className="footer-text">{t('confession')}: Saturday 4:00 PM</p>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">{t('contactUs')}</h3>
            <p className="footer-text">{t('address')}: 123 Church St</p>
            <p className="footer-text">{t('phone')}: (555) 123-4567</p>
            <p className="footer-text">{t('email')}: info@church.com</p>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">{t('social')}</h3>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">YouTube</a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}