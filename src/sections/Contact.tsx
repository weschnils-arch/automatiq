import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

const projectTypes = {
  de: [
    { value: 'website', label: 'Website / Landing Page' },
    { value: 'saas', label: 'SaaS Entwicklung' },
    { value: 'realestate', label: 'Immobiliensoftware' },
    { value: 'other', label: 'Sonstiges' },
  ],
  en: [
    { value: 'website', label: 'Website / Landing Page' },
    { value: 'saas', label: 'SaaS Development' },
    { value: 'realestate', label: 'Real Estate Software' },
    { value: 'other', label: 'Other' },
  ],
};

export default function Contact() {
  const { t, language } = useApp();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: '',
        privacy: false,
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[#0A0A0A]"
    >
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="separator-fade" />
      </div>
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-4 block">
            {t('Kontakt', 'Contact')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t(
              'Bereit, Ihr Projekt zu starten?',
              'Ready to Start Your Project?'
            )}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Nehmen Sie Kontakt mit unserem Team auf, um Ihre Vision und Ziele zu besprechen.',
              'Get in touch with our team to discuss your vision and goals.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
            <div className="glass-strong p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {t('Nachricht gesendet!', 'Message Sent!')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(
                      'Vielen Dank! Wir werden uns so schnell wie möglich bei Ihnen melden.',
                      'Thank you! We will get back to you as soon as possible.'
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('Name', 'Name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input-glass"
                        placeholder={t('Ihr Name', 'Your name')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('E-Mail', 'Email')} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-glass"
                        placeholder={t('ihre@email.de', 'your@email.com')}
                      />
                    </div>
                  </div>

                  {/* Company & Project Type Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('Unternehmen', 'Company')}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-glass"
                        placeholder={t('Ihr Unternehmen', 'Your company')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('Projekttyp', 'Project Type')}
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="input-glass cursor-pointer"
                      >
                        <option value="">
                          {t('Bitte wählen', 'Please select')}
                        </option>
                        {(language === 'de' ? projectTypes.de : projectTypes.en).map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('Nachricht', 'Message')} *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-glass resize-none"
                      placeholder={t(
                        'Beschreiben Sie Ihr Projekt...',
                        'Describe your project...'
                      )}
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="privacy"
                      id="privacy"
                      required
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-border bg-background text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      {t(
                        'Ich stimme der Datenschutzerklärung zu *',
                        'I agree to the privacy policy *'
                      )}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn-blue-glass flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {t('Nachricht senden', 'Send Message')}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
            <div className="flex flex-col h-full justify-between">
              {/* Contact Cards */}
              <div className="glass p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-blue-600/10">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('E-Mail', 'Email')}</p>
                    <a
                      href="mailto:contact@automiq.com"
                      className="font-medium text-foreground hover:text-blue-400 transition-colors"
                    >
                      contact@automiq.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-blue-600/10">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('Telefon', 'Phone')}</p>
                    <a
                      href="tel:+49123456789"
                      className="font-medium text-foreground hover:text-blue-400 transition-colors"
                    >
                      +49 (0) 123 456789
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-blue-600/10">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t('Standort', 'Location')}</p>
                    <p className="font-medium text-foreground">
                      Berlin, Germany
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="glass p-6">
                <h4 className="font-semibold text-foreground mb-3">
                  {t('Bürozeiten', 'Office Hours')}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('Mo - Fr', 'Mon - Fri')}</span>
                    <span className="text-foreground">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('Sa - So', 'Sat - Sun')}</span>
                    <span className="text-muted-foreground">{t('Geschlossen', 'Closed')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
