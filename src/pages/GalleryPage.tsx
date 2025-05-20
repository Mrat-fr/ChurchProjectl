import { useLanguage } from '../context/LanguageContext';

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <h1>{t('gallery')}</h1>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-filters">
            <button className="filter-button active">All Photos</button>
            <button className="filter-button">Services</button>
            <button className="filter-button">Events</button>
            <button className="filter-button">Community</button>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/gallery/church-1.jpg" alt="Church Service" />
              <div className="gallery-overlay">
                <h3>Sunday Service</h3>
                <p>Easter Celebration 2024</p>
                <button className="view-button">
                  <i className="fas fa-expand"></i>
                </button>
              </div>
            </div>

            <div className="gallery-item">
              <img src="/images/gallery/church-2.jpg" alt="Youth Event" />
              <div className="gallery-overlay">
                <h3>Youth Conference</h3>
                <p>Building Future Leaders</p>
                <button className="view-button">
                  <i className="fas fa-expand"></i>
                </button>
              </div>
            </div>

            <div className="gallery-item">
              <img src="/images/gallery/church-3.jpg" alt="Community Festival" />
              <div className="gallery-overlay">
                <h3>Community Festival</h3>
                <p>Celebrating Our Culture</p>
                <button className="view-button">
                  <i className="fas fa-expand"></i>
                </button>
              </div>
            </div>

            <div className="gallery-item">
              <img src="/images/gallery/church-4.jpg" alt="Prayer Meeting" />
              <div className="gallery-overlay">
                <h3>Prayer Meeting</h3>
                <p>Morning Devotion</p>
                <button className="view-button">
                  <i className="fas fa-expand"></i>
                </button>
              </div>
            </div>

            <div className="gallery-item">
              <img src="/images/gallery/church-5.jpg" alt="Choir Performance" />
              <div className="gallery-overlay">
                <h3>Choir Performance</h3>
                <p>Traditional Hymns</p>
                <button className="view-button">
                  <i className="fas fa-expand"></i>
                </button>
              </div>
            </div>

            <div className="gallery-item">
              <img src="/images/gallery/church-6.jpg" alt="Bible Study" />
              <div className="gallery-overlay">
                <h3>Bible Study</h3>
                <p>Weekly Scripture Study</p>
                <button className="view-button">
                  <i className="fas fa-expand"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Share Your Moments</h2>
            <p>Have photos from our church events? Share them with our community!</p>
            <button className="cta-button">
              <i className="fas fa-cloud-upload-alt"></i> Submit Photos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 