import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const { t, toggleLanguage, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu when pressing Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Handle menu button click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll lock
    document.body.classList.toggle('menu-open', !isMenuOpen);
    // Focus first menu item when opening
    if (!isMenuOpen && menuRef.current) {
      setTimeout(() => {
        const firstLink = menuRef.current?.querySelector('a');
        firstLink?.focus();
      }, 100);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isMenuOpen) return;

    const links = Array.from(menuRef.current?.querySelectorAll('a') || []);
    const currentIndex = links.indexOf(document.activeElement as HTMLAnchorElement);
    let nextIndex: number;
    let prevIndex: number;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        nextIndex = (currentIndex + 1) % links.length;
        links[nextIndex]?.focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        prevIndex = (currentIndex - 1 + links.length) % links.length;
        links[prevIndex]?.focus();
        break;
      case 'Tab':
        if (!event.shiftKey && currentIndex === links.length - 1) {
          event.preventDefault();
          setIsMenuOpen(false);
          buttonRef.current?.focus();
        }
        break;
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-top-content">
          <div className="contact-info">
            <a href="tel:+441234567890" className="contact-link">
              <i className="fas fa-phone" aria-hidden="true"></i>
              <span>+44 123 456 7890</span>
            </a>
            <span className="contact-divider">|</span>
            <a href="mailto:info@church.com" className="contact-link">
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <span>info@church.com</span>
            </a>
          </div>
          <div className="header-actions">
            <button
              onClick={toggleLanguage}
              className="lang-button"
              aria-label={`Switch to ${language === 'en' ? 'Tigrinya' : 'English'}`}
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
            ref={buttonRef}
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="nav-links"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="menu-icon" aria-hidden="true"></span>
          </button>

          <div 
            ref={menuRef}
            id="nav-links"
            className={`nav-links ${isMenuOpen ? 'active' : ''}`}
            role="navigation"
            onKeyDown={handleKeyDown}
          >
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('home')}</Link>
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('about')}</Link>
            <Link to="/ministries" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('ministries')}</Link>
            <Link to="/events" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('events')}</Link>
            <Link to="/gallery" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('gallery')}</Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('contact')}</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}