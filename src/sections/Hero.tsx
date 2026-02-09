import { useState } from 'react';
import { Building2, Settings, Globe, ArrowRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useParallax } from '@/hooks/useScrollAnimation';

const services = [
  {
    id: 'real-estate',
    icon: Building2,
    title: {
      de: 'Immobilienmanagement Software',
      en: 'Real Estate Management Software',
    },
    description: {
      de: 'Fortschrittliche, intuitive Software für Immobilienverwaltung, Portfolioanalyse und Marktintelligenz.',
      en: 'Advanced, intuitive software for property management, portfolio analysis, and market intelligence.',
    },
  },
  {
    id: 'saas',
    icon: Settings,
    title: {
      de: 'Maßgeschneiderte SaaS & Enterprise-Systeme',
      en: 'Customized SaaS & Enterprise Systems',
    },
    description: {
      de: 'Maßgeschneiderte B2B- und B2C-Software, von Kundenmanagementsystemen bis hin zu Enterprise-Anwendungen.',
      en: 'Bespoke B2B and B2C software, from customer management systems to full-scale enterprise applications.',
    },
  },
  {
    id: 'websites',
    icon: Globe,
    title: {
      de: 'Premium Landing Pages & Websites',
      en: 'Premium Landing Pages & Websites',
    },
    description: {
      de: 'Visuell beeindruckende, leistungsstarke Websites mit unvergesslichem Nutzererlebnis.',
      en: 'Visually stunning, high-performance websites that offer an unforgettable user experience.',
    },
  },
];

export default function Hero() {
  const { t } = useApp();
  const { ref: parallaxRef, offset } = useParallax(0.3);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; // Max 10px shift
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={parallaxRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background Video with Parallax */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-[54%_center]"
            poster="/images/hero-bg.png"
          >
            <source src="/videos/hero-bg.webm" type="video/webm" />
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Light black overlay for contrast */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Subtle bottom gradient for transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline with Mouse Follow */}
          <div
            style={{
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-hero animate-fade-in-up bg-gradient-to-r from-white from-60% to-gray-300 bg-clip-text text-transparent">
              {t('Software. Präzision. Zukunft.', 'Software. Precision. Future.')}
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-12 animate-fade-in-up stagger-1 whitespace-pre-line">
            {t(
              'Wir entwickeln maßgeschneiderte Softwarelösungen und Premium-Websites,\ndie Ihr Unternehmen transformieren.',
              'We develop custom software solutions and premium websites that transform your business.'
            )}
          </p>

          {/* Service Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-up stagger-2">
            {services.map((service) => {
              const Icon = service.icon;
              const isHovered = hoveredService === service.id;

              return (
                <div
                  key={service.id}
                  className="glass p-6 cursor-pointer card-hover group"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    transform: isHovered ? 'perspective(1000px) rotateX(5deg) rotateY(-5deg)' : 'none',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg transition-all duration-300 ${isHovered ? 'bg-blue-600/20' : 'bg-muted'
                      }`}>
                      <Icon className={`w-5 h-5 transition-colors ${isHovered ? 'text-blue-400' : 'text-muted-foreground'
                        }`} />
                    </div>
                    <h3 className="font-semibold text-foreground text-left text-sm">
                      {t(service.title.de, service.title.en)}
                    </h3>
                  </div>

                  {/* Description - shows on hover */}
                  <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <p className="text-xs text-muted-foreground text-left">
                      {t(service.description.de, service.description.en)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up stagger-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 btn-blue-glass text-base"
            >
              {t('Projekt anfragen', 'Request a Project')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
