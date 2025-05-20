export type Language = 'en' | 'ti';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
} 