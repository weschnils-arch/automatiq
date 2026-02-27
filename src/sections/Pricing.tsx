import { useApp } from '@/context/AppContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, Settings } from 'lucide-react';

const pricingPlans = [
  {
    id: 'starter',
    name: {
      de: 'Starter',
      en: 'Starter',
    },
    price: '€2,999',
    description: {
      de: 'Perfekt für kleine Unternehmen und Startups.',
      en: 'Perfect for small businesses and startups.',
    },
    features: {
      de: [
        'Responsives Design',
        'SEO-optimiert',
        '2 Überarbeitungsrunden',
        'Kontaktformular',
        'Social Media Integration',
      ],
      en: [
        'Responsive Design',
        'SEO Optimized',
        '2 Rounds of Revisions',
        'Contact Form',
        'Social Media Integration',
      ],
    },
    cta: {
      de: 'Loslegen',
      en: 'Get Started',
    },
    highlighted: false,
  },
  {
    id: 'professional',
    name: {
      de: 'Professional',
      en: 'Professional',
    },
    price: '€7,999',
    description: {
      de: 'Maßgeschneiderte Software für wachsende Unternehmen.',
      en: 'Tailored software for growing enterprises.',
    },
    features: {
      de: [
        'Full Custom Development',
        'Datenbank-Integration',
        'Benutzer-Authentifizierung',
        '4 Überarbeitungsrunden',
        'API-Integrationen',
        'Analytics Dashboard',
      ],
      en: [
        'Full Custom Development',
        'Database Integration',
        'User Authentication',
        '4 Rounds of Revisions',
        'API Integrations',
        'Analytics Dashboard',
      ],
    },
    cta: {
      de: 'Demo anfragen',
      en: 'Request Demo',
    },
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: {
      de: 'Enterprise',
      en: 'Enterprise',
    },
    price: 'Custom',
    description: {
      de: 'Komplette Immobilienmanagement-Plattform.',
      en: 'Complete property management platform.',
    },
    features: {
      de: [
        'End-to-End Entwicklung',
        'Erweiterte Analytics',
        'Multi-User Support',
        'Dedizierter Support',
        'SLA-Garantie',
        'On-Premise Option',
      ],
      en: [
        'End-to-End Development',
        'Advanced Analytics',
        'Multi-User Support',
        'Dedicated Support',
        'SLA Guarantee',
        'On-Premise Option',
      ],
    },
    cta: {
      de: 'Sales kontaktieren',
      en: 'Contact Sales',
    },
    highlighted: false,
  },
];

export default function Pricing() {
  const { t } = useApp();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/videos/pricing.webm" type="video/webm" />
        </video>
        {/* Gradients for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="separator-fade" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-4 block">
            {t('Preise', 'Pricing')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 uppercase">
            {t(
              'Flexible Preise für jedes Unternehmen',
              'Flexible Pricing for Every Business'
            )}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Wählen Sie das Paket, das am besten zu Ihren Anforderungen passt. Alle Preise sind transparent und ohne versteckte Kosten.',
              'Choose the plan that best fits your requirements. All prices are transparent with no hidden costs.'
            )}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className={`glass p-8 h-full flex flex-col card-hover relative group ${plan.highlighted ? 'border-blue-500/50 shadow-blue-500/10' : ''
                }`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="badge-blue-glass shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                      <Settings className="w-3.5 h-3.5 animate-spin-slow" />
                      {t('Beliebt', 'Popular')}
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {t(plan.name.de, plan.name.en)}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      / {t('Projekt', 'Project')}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t(plan.description.de, plan.description.en)}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.de.map((_feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-blue-400' : 'text-muted-foreground'
                        }`} />
                      <span className="text-sm text-muted-foreground">
                        {t(plan.features.de[i], plan.features.en[i])}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href="#contact"
                    className="block w-full text-center btn-blue-glass"
                  >
                    {t(plan.cta.de, plan.cta.en)}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
