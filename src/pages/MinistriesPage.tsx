import { useLanguage } from '../context/LanguageContext';

export default function MinistriesPage() {
  const { t } = useLanguage();

  return (
    <div className="ministries-page">
      <section className="ministries-hero">
        <div className="container">
          <h1>{t('ministries')}</h1>
        </div>
      </section>

      <section className="ministries-section">
        <div className="container">
          <div className="ministries-grid">
            <div className="ministry-card">
              <div className="ministry-icon">
                <i className="fas fa-music"></i>
              </div>
              <h3>Choir Ministry</h3>
              <p>Our choir leads the congregation in traditional Eritrean and English hymns, creating a beautiful atmosphere of worship.</p>
              <a href="#" className="ministry-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="ministry-card">
              <div className="ministry-icon">
                <i className="fas fa-child"></i>
              </div>
              <h3>Youth Ministry</h3>
              <p>Engaging young people in faith formation, community service, and social activities to build strong foundations.</p>
              <a href="#" className="ministry-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="ministry-card">
              <div className="ministry-icon">
                <i className="fas fa-book-reader"></i>
              </div>
              <h3>Bible Study</h3>
              <p>Weekly gatherings to study scripture, share insights, and grow together in understanding God's word.</p>
              <a href="#" className="ministry-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="ministry-card">
              <div className="ministry-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Community Outreach</h3>
              <p>Supporting local initiatives and providing assistance to those in need within our community.</p>
              <a href="#" className="ministry-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="ministry-card">
              <div className="ministry-icon">
                <i className="fas fa-pray"></i>
              </div>
              <h3>Prayer Groups</h3>
              <p>Regular prayer meetings where members come together to pray for our church, community, and world.</p>
              <a href="#" className="ministry-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="ministry-card">
              <div className="ministry-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Family Ministry</h3>
              <p>Supporting families through counseling, workshops, and social activities that strengthen bonds.</p>
              <a href="#" className="ministry-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      <section className="get-involved">
        <div className="container">
          <div className="involved-content">
            <h2>Get Involved</h2>
            <p>We welcome all members of our community to participate in our ministries. Whether you're interested in music, teaching, or community service, there's a place for you to serve and grow.</p>
            <button className="involved-button">
              Contact Us <i className="fas fa-envelope"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 