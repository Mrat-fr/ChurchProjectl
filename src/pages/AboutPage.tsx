import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>{t('aboutTitle')}</h1>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <p>{t('aboutText1')}</p>
              <p>{t('aboutText2')}</p>
            </div>
            <div className="about-image">
              <img src="/images/church-interior.jpg" alt="Church Interior" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-icon">
              <i className="fas fa-dove"></i>
            </div>
            <h2>{t('mission')}</h2>
            <p className="mission-text">{t('mission')}</p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Faith</h3>
              <p>Rooted in the traditions of the Eritrean Catholic Church</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Community</h3>
              <p>Building strong bonds within our parish family</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-pray"></i>
              </div>
              <h3>Worship</h3>
              <p>Celebrating our faith through meaningful liturgy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}