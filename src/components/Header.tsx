import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export default function Header() {
  const { t, toggleLanguage, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-top-content">
          <div className="contact-info">
            <a href="tel:+441234567890" className="contact-link">
              <i className="fas fa-phone"></i>
              <span>+44 123 456 7890</span>
            </a>
            <span className="contact-divider">|</span>
            <a href="mailto:info@church.com" className="contact-link">
              <i className="fas fa-envelope"></i>
              <span>info@church.com</span>
            </a>
          </div>
          <div className="header-actions">
            <button
              onClick={toggleLanguage}
              className="lang-button"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'ትግርኛ' : 'English'}
            </button>
          </div>
        </div>
      </div>
      
      <nav className="main-nav">
        <div className="container nav-content">
          <div className="logo">
            <Link to="/">
              <img src="/images/church-logo.png" alt="Church Logo" className="church-logo" />
              <span className="church-name">{t('churchName')}</span>
            </Link>
          </div>

          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="menu-icon"></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link">{t('home')}</Link>
            <Link to="/about" className="nav-link">{t('about')}</Link>
            <Link to="/ministries" className="nav-link">{t('ministries')}</Link>
            <Link to="/events" className="nav-link">{t('events')}</Link>
            <Link to="/gallery" className="nav-link">{t('gallery')}</Link>
            <Link to="/contact" className="nav-link">{t('contact')}</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}