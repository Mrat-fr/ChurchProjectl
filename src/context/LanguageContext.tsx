import React, { createContext, useState, useContext } from 'react';
import translations from '../translations';

// Define types
type Language = 'en' | 'ti';

interface TranslationKeys {
  welcome: string;
  tagline: string;
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  mission: string;
  contactUs: string;
  findUs: string;
  address: string;
  phone: string;
  email: string;
  send: string;
  home: string;
  about: string;
  contact: string;
  serviceTimes: string;
  sundayMass: string;
  weekdayMass: string;
  confession: string;
  bibleStudy: string;
  events: string;
  copyright: string;
  social: string;
  name: string;
  message: string;
  ministries: string;
  gallery: string;
  churchName: string;
  phoneNumber: string;
}

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: keyof TranslationKeys) => string;
}

// Create Context
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider Component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ti' : 'en'));
  };

  const t = (key: keyof TranslationKeys): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};