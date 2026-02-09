import { useApp } from '@/context/AppContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    id: 'timeline',
    question: {
      de: 'Wie lange dauert ein typisches Projekt?',
      en: 'How long does a typical project take?',
    },
    answer: {
      de: 'Die Projektlaufzeiten variieren je nach Umfang und Komplexität. Eine Landing Page dauert typischerweise 2-4 Wochen, während maßgeschneiderte SaaS-Lösungen 3-6 Monate in Anspruch nehmen können. Wir erstellen eine detaillierte Zeitplanung während der Discovery-Phase.',
      en: 'Project timelines vary based on scope and complexity. A landing page typically takes 2-4 weeks, while custom SaaS solutions can take 3-6 months. We provide a detailed timeline during the discovery phase.',
    },
  },
  {
    id: 'support',
    question: {
      de: 'Bieten Sie laufenden Support und Wartung an?',
      en: 'Do you offer ongoing support and maintenance?',
    },
    answer: {
      de: 'Ja, wir bieten umfassende Support-Pakete nach dem Launch an, einschließlich Bugfixes, Updates und Feature-Erweiterungen. Unsere Support-Verträge sind flexibel und können an Ihre Bedürfnisse angepasst werden.',
      en: 'Yes, we offer comprehensive post-launch support packages, including bug fixes, updates, and feature enhancements. Our support contracts are flexible and can be tailored to your needs.',
    },
  },
  {
    id: 'technologies',
    question: {
      de: 'Welche Technologien verwenden Sie?',
      en: 'What technologies do you use?',
    },
    answer: {
      de: 'Wir setzen auf moderne, skalierbare Technologien wie React, Node.js, TypeScript, Tailwind CSS und Cloud-Plattformen wie AWS und Firebase. Die genaue Technologiewahl hängt von den spezifischen Anforderungen Ihres Projekts ab.',
      en: 'We use modern, scalable technologies including React, Node.js, TypeScript, Tailwind CSS, and cloud platforms like AWS and Firebase. The exact technology stack depends on your project\'s specific requirements.',
    },
  },
  {
    id: 'integration',
    question: {
      de: 'Können Sie mit bestehenden Systemen integrieren?',
      en: 'Can you integrate with existing systems?',
    },
    answer: {
      de: 'Absolut. Wir sind auf nahtlose Integrationen mit Drittanbieter-APIs, Datenbanken und Legacy-Systemen spezialisiert. Unsere Lösungen sind so konzipiert, dass sie sich in Ihre bestehende Infrastruktur einfügen.',
      en: 'Absolutely. We specialize in seamless integrations with third-party APIs, databases, and legacy systems. Our solutions are designed to fit into your existing infrastructure.',
    },
  },
  {
    id: 'pricing',
    question: {
      de: 'Wie ist Ihr Preismodell?',
      en: 'What is your pricing model?',
    },
    answer: {
      de: 'Wir bieten flexible Preise basierend auf dem Projektkontext. Nach einem initialen Discovery-Call erstellen wir ein maßgeschneidertes Angebot. Wir arbeiten mit Festpreisen für klar definierte Projekte oder mit Stundensätzen für agile Entwicklung.',
      en: 'We offer flexible pricing based on project scope. After an initial discovery call, we create a custom quote. We work with fixed prices for well-defined projects or hourly rates for agile development.',
    },
  },
  {
    id: 'process',
    question: {
      de: 'Wie läuft der Entwicklungsprozess ab?',
      en: 'How does the development process work?',
    },
    answer: {
      de: 'Unser Prozess umfasst 5 Phasen: 1) Discovery & Anforderungsanalyse, 2) Design & Prototyping, 3) Entwicklung, 4) Testing & QA, 5) Deployment & Launch. Wir arbeiten iterativ und halten Sie während des gesamten Prozesses auf dem Laufenden.',
      en: 'Our process includes 5 phases: 1) Discovery & Requirements Analysis, 2) Design & Prototyping, 3) Development, 4) Testing & QA, 5) Deployment & Launch. We work iteratively and keep you informed throughout the entire process.',
    },
  },
];

export default function FAQ() {
  const { t, language } = useApp();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
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
            {t('FAQ', 'FAQ')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t(
              'Häufig gestellte Fragen',
              'Frequently Asked Questions'
            )}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Hier finden Sie Antworten auf die am häufigsten gestellten Fragen.',
              'Find answers to the most commonly asked questions here.'
            )}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="glass border-none rounded-xl overflow-hidden px-6 data-[state=open]:border-blue-500/50 data-[state=open]:border"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-blue-400 transition-colors py-5 [&[data-state=open]>svg]:text-blue-400">
                  {language === 'de' ? item.question.de : item.question.en}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {language === 'de' ? item.answer.de : item.answer.en}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <p className="text-muted-foreground mb-4">
            {t(
              'Noch Fragen? Wir sind hier, um zu helfen.',
              'Still have questions? We are here to help.'
            )}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 btn-blue-glass"
          >
            {t('Kontaktieren Sie uns', 'Contact Us')}
          </a>
        </div>
      </div>
    </section>
  );
}
