import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Language, Theme } from '@/types';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  t: (de: string, en: string) => string;
  mounted: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('de');
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load preferences from localStorage
    try {
      const savedLang = localStorage.getItem('automiq-language') as Language;
      const savedTheme = localStorage.getItem('automiq-theme') as Theme;
      
      if (savedLang && (savedLang === 'de' || savedLang === 'en')) {
        setLanguageState(savedLang);
      }
      
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setThemeState(savedTheme);
      }
    } catch (e) {
      // localStorage not available (e.g., in SSR)
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('automiq-language', language);
      } catch (e) {
        // localStorage not available
      }
    }
  }, [language, mounted]);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('automiq-theme', theme);
      } catch (e) {
        // localStorage not available
      }
    }
    // Always update the class immediately
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'de' ? 'en' : 'de');
  };

  const toggleTheme = () => {
    setThemeState(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const t = (de: string, en: string) => {
    return language === 'de' ? de : en;
  };

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      theme,
      setTheme,
      toggleLanguage,
      toggleTheme,
      t,
      mounted
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
