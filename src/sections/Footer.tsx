import { useApp } from '@/context/AppContext';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

const quickLinks = {
  de: [
    { label: 'Leistungen', href: '#services' },
    { label: 'Über uns', href: '#about' },
    { label: 'Portfolio', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  en: [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Portfolio', href: '#' },
    { label: 'Blog', href: '#' },
  ],
};

const legalLinks = {
  de: [
    { label: 'Impressum', href: '#' },
    { label: 'Datenschutz', href: '#' },
    { label: 'AGB', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
  en: [
    { label: 'Legal Notice', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contact@automiq.com', label: 'Email' },
];

export default function Footer() {
  const { t, language } = useApp();
  const currentYear = new Date().getFullYear();

  const links = language === 'de' ? quickLinks.de : quickLinks.en;
  const legal = language === 'de' ? legalLinks.de : legalLinks.en;

  return (
    <footer className="relative py-16 bg-secondary/50 border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a
              href="#"
              className="text-xl font-bold tracking-wider text-foreground hover:text-blue-400 transition-colors mb-4 block"
            >
              AUTOMIQ CORP.
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t(
                'Premium Softwarelösungen & Webdesign. Wir transformieren Unternehmen durch innovative Technologie.',
                'Premium Software Solutions & Web Design. We transform businesses through innovative technology.'
              )}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2.5 rounded-full bg-muted hover:bg-blue-500/20 transition-all group"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t('Quick Links', 'Quick Links')}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t('Rechtliches', 'Legal')}
            </h4>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t('Newsletter', 'Newsletter')}
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              {t(
                'Abonnieren Sie unsere neuesten Updates und Einblicke.',
                'Subscribe to our latest updates and insights.'
              )}
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t('Ihre E-Mail', 'Your email')}
                className="flex-1 input-glass text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-500 transition-colors"
              >
                {t('Abonnieren', 'Subscribe')}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AutoMiQ Corp. {t('Alle Rechte vorbehalten.', 'All rights reserved.')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('Made with', 'Made with')} <span className="text-blue-400">♥</span> {t('in Berlin', 'in Berlin')}
          </p>
        </div>
      </div>
    </footer>
  );
}
