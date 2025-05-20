import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>{t('welcome')}</h1>
          <p className="tagline">{t('tagline')}</p>
          <div className="hero-buttons">
            <a href="/about" className="hero-button primary">{t('about')}</a>
            <a href="/contact" className="hero-button secondary">{t('contact')}</a>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title">{t('serviceTimes')}</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-church"></i>
              </div>
              <h3>{t('sundayMass')}</h3>
              <p>10:00 AM</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-pray"></i>
              </div>
              <h3>{t('weekdayMass')}</h3>
              <p>8:00 AM</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cross"></i>
              </div>
              <h3>{t('confession')}</h3>
              <p>Saturday 4:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <h2 className="section-title">{t('aboutTitle')}</h2>
            <p>{t('aboutText1')}</p>
            <p>{t('aboutText2')}</p>
            <p className="mission-text">{t('mission')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}