import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useScrollPosition } from '@/hooks/useScrollAnimation';

const navItems = [
  { id: 'services', label: { de: 'Leistungen', en: 'Services' }, href: '#services' },
  { id: 'solutions', label: { de: 'Lösungen', en: 'Solutions' }, href: '#solutions' },
  { id: 'about', label: { de: 'Über uns', en: 'About' }, href: '#about' },
  { id: 'imagine-ai', label: { de: 'IMAGINE AI', en: 'IMAGINE AI' }, href: '#imagine-ai' },
  { id: 'contact', label: { de: 'Kontakt', en: 'Contact' }, href: '#contact' },
];

export default function Header() {
  const { language, toggleLanguage, theme, toggleTheme, t } = useApp();
  const { scrollPosition } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isScrolled = scrollPosition > 80;

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mx-4 md:mx-8 ${isScrolled
          ? 'glass-strong py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="relative flex items-center justify-between">
            {/* Left Side - Logo & Navigation */}
            <div className="flex items-center gap-8 lg:gap-16">
              <a
                href="#"
                className="text-xl md:text-2xl font-bold tracking-wider text-foreground hover:text-foreground transition-all whitespace-nowrap"
              >
                AUTOMIQ
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  >
                    {t(item.label.de, item.label.en)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Language Toggle - Desktop Only */}
              <button
                onClick={toggleLanguage}
                className="hidden md:flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all font-inter"
                aria-label={t('Sprache wechseln', 'Change language')}
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{language.toUpperCase()}</span>
              </button>

              {/* Theme Toggle - Desktop Only */}
              <button
                onClick={toggleTheme}
                className="hidden md:flex p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                aria-label={t('Theme wechseln', 'Change theme')}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                aria-label={t('Menü öffnen', 'Open menu')}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-20 left-4 right-4 glass-strong rounded-2xl p-6 transition-all duration-300 ${isMobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-4 opacity-0'
            }`}
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-blue-400 transition-colors py-3"
              >
                {t(item.label.de, item.label.en)}
              </a>
            ))}

            {/* Divider */}
            <div className="h-px bg-white/10 my-2" />

            {/* Mobile Actions (Language & Theme) */}
            <div className="flex items-center justify-between py-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all w-full"
              >
                <Globe className="w-5 h-5" />
                <span>{language === 'de' ? 'English' : 'Deutsch'}</span>
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all w-full"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-5 h-5" />
                    <span>{t('Heller Modus', 'Light Mode')}</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5" />
                    <span>{t('Dunkler Modus', 'Dark Mode')}</span>
                  </>
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
