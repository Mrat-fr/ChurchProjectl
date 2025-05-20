import { useLanguage } from '../context/LanguageContext';

export default function EventsPage() {
  const { t } = useLanguage();

  return (
    <div className="events-page">
      <section className="events-hero">
        <div className="container">
          <h1>{t('events')}</h1>
        </div>
      </section>

      <section className="events-section">
        <div className="container">
          <div className="events-filter">
            <button className="filter-button active">All Events</button>
            <button className="filter-button">Upcoming</button>
            <button className="filter-button">Past Events</button>
          </div>

          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">
                <span className="date">25</span>
                <span className="month">MAR</span>
              </div>
              <div className="event-content">
                <h3>Easter Celebration</h3>
                <p className="event-time"><i className="fas fa-clock"></i> 10:00 AM - 12:00 PM</p>
                <p className="event-location"><i className="fas fa-map-marker-alt"></i> Main Church Hall</p>
                <p className="event-description">Join us for a special Easter celebration with traditional Eritrean customs and fellowship.</p>
                <button className="event-button">Learn More</button>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <span className="date">15</span>
                <span className="month">APR</span>
              </div>
              <div className="event-content">
                <h3>Youth Conference</h3>
                <p className="event-time"><i className="fas fa-clock"></i> 2:00 PM - 6:00 PM</p>
                <p className="event-location"><i className="fas fa-map-marker-alt"></i> Community Center</p>
                <p className="event-description">A special gathering for young people to discuss faith, culture, and community.</p>
                <button className="event-button">Learn More</button>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <span className="date">01</span>
                <span className="month">MAY</span>
              </div>
              <div className="event-content">
                <h3>Community Festival</h3>
                <p className="event-time"><i className="fas fa-clock"></i> 11:00 AM - 4:00 PM</p>
                <p className="event-location"><i className="fas fa-map-marker-alt"></i> Church Grounds</p>
                <p className="event-description">Annual festival celebrating our community with food, music, and activities for all ages.</p>
                <button className="event-button">Learn More</button>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date">
                <span className="date">10</span>
                <span className="month">MAY</span>
              </div>
              <div className="event-content">
                <h3>Prayer Retreat</h3>
                <p className="event-time"><i className="fas fa-clock"></i> 9:00 AM - 3:00 PM</p>
                <p className="event-location"><i className="fas fa-map-marker-alt"></i> Retreat Center</p>
                <p className="event-description">A day of prayer, reflection, and spiritual renewal for all church members.</p>
                <button className="event-button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="calendar-section">
        <div className="container">
          <div className="calendar-content">
            <h2>Church Calendar</h2>
            <p>Stay updated with all our events and activities. Download our calendar or subscribe to receive notifications.</p>
            <div className="calendar-buttons">
              <button className="calendar-button">
                <i className="fas fa-calendar-alt"></i> Download Calendar
              </button>
              <button className="calendar-button">
                <i className="fas fa-bell"></i> Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}