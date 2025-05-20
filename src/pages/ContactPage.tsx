import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>{t('contactUs')}</h1>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-card">
              <h2>{t('findUs')}</h2>
              <div className="info-items">
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h3>{t('address')}</h3>
                    <p>Chapeltown Rd, Leeds LS7 4BZ</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h3>{t('phone')}</h3>
                    <p>+44 123 456 7890</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h3>{t('email')}</h3>
                    <p>info@church.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <h2>{t('send')}</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label className="form-label">{t('name')}</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Your name"
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('email')}</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="your.email@example.com"
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('message')}</label>
                  <textarea 
                    className="form-input" 
                    rows={4} 
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  <i className="fas fa-paper-plane"></i> {t('send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-header">
          <div className="container">
            <div className="map-title">
              <i className="fas fa-map-marked-alt"></i>
              <h2>{t('findUs')}</h2>
            </div>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1178.2222417349344!2d-1.5397371234421752!3d53.81679497259776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c1d4e6b3767%3A0x8d2a2a2c15e7a3b8!2sChapeltown%20Rd%2C%20Leeds%20LS7%204BZ!5e0!3m2!1sen!2suk!4v1709901234567!5m2!1sen!2suk&markers=color:red%7Clabel:C%7C53.81679497259776,-1.5397371234421752&zoom=17"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Church Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
}