import React, { useState, useEffect } from 'react';
import { Building2, Settings, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useParallax } from '@/hooks/useScrollAnimation';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';


const particlesOptions = {
  fullScreen: { enable: false, zIndex: 1 },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: { enable: false },
      onHover: { enable: false },
      resize: { enable: true },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 300,
      enable: true,
      opacity: 0.4,
      width: 1.5,
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: {
        default: "bounce" as const,
      },
      random: false,
      speed: 0.2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
      value: 30,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle" as const,
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

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
  {
    id: 'ai-art',
    icon: Sparkles,
    title: {
      de: 'AI Art Direction',
      en: 'AI Art Direction',
    },
    description: {
      de: 'KI-gestützte Marken-Konsistenz-Engine. Intelligente generative Technologie für luxuriöse kreative Ausrichtung, die makellose Charakterkonsistenz über unbegrenzte Welten und Kontexte hinweg liefert.',
      en: 'AI-Powered Brand Consistency Engine. Intelligent generative technology for luxury creative direction, delivering flawless character consistency across unlimited worlds and contexts.',
    },
  },
];

const HeroParticles = React.memo(function HeroParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
      className="absolute inset-0 w-full h-full mix-blend-screen"
    />
  );
});

export default function Hero() {
  const { t } = useApp();
  const { ref: parallaxRef, offset } = useParallax(0.15);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Use refs for mouse tracking to avoid React re-renders which force Particles to reload/jolt.
  const titleContainerRef = React.useRef<HTMLDivElement>(null);
  const mousePosRef = React.useRef({ x: 0, y: 0 });

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mousePosRef.current = {
      x: (clientX / innerWidth - 0.5) * 20, // Max 10px shift
      y: (clientY / innerHeight - 0.5) * 20,
    };
  }, []);

  // Sync mouse position directly to the DOM node via RAF loop.
  useEffect(() => {
    let animationFrameId: number;

    const renderLoop = () => {
      if (titleContainerRef.current) {
        titleContainerRef.current.style.transform = `translate(${mousePosRef.current.x}px, ${mousePosRef.current.y}px)`;
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);


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
          className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
          style={{ transform: `translate3d(0, ${offset * 0.5}px, 0)`, transition: 'transform 0.1s ease-out' }}
        >
          <img
            src="/images/hero_BG.webp"
            alt="Hero Background"
            className="w-full h-full object-cover object-center md:object-[54%_center]"
          />
          {/* Light black overlay for contrast */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Subtle bottom gradient for transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />

          {/* Particles configuration entirely isolated inside this purely static shell wrapper component to prevent ANY re-renders falling down through state. */}
          <HeroParticles />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 pt-32 pb-20 w-full">
        <div className="text-left">
          {/* Main Headline with Mouse Follow */}
          <div
            ref={titleContainerRef}
            style={{
              transition: 'transform 0.1s ease-out'
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[49px] xl:text-[61px] 2xl:text-[74px] font-bold mb-6 text-shadow-hero animate-fade-in-up bg-gradient-to-r from-white from-60% to-gray-300 bg-clip-text text-transparent w-full whitespace-normal lg:whitespace-nowrap leading-tight overflow-visible pb-2 lg:pb-3 pr-2 lg:pr-4">
              {t('SOFTWARE. PRÄZISION. ZUKUNFT.', 'SOFTWARE. PRECISION. FUTURE.')}
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-[21px] font-medium text-gray-200 w-full lg:w-auto max-w-[90vw] md:max-w-2xl lg:max-w-none mb-12 animate-fade-in-up stagger-1 whitespace-normal lg:whitespace-nowrap leading-relaxed">
            {t('Wir entwickeln maßgeschneiderte Softwarelösungen und ', 'We develop custom software solutions and ')}
            <br className="lg:hidden" />
            {t('Premium-Websites, die Ihr Unternehmen transformieren.', 'premium websites that transform your business.')}
          </p>

          {/* Service Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mb-12 animate-fade-in-up stagger-2">
            {services.map((service) => {
              const Icon = service.icon;
              const isHovered = hoveredService === service.id;

              return (
                <div
                  key={service.id}
                  className="cursor-pointer group flex flex-col"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <Icon className={`w-5 h-5 shrink-0 transition-colors ${isHovered ? 'text-blue-400' : 'text-muted-foreground'}`} />
                    <h3 className="font-semibold text-foreground text-left text-sm tracking-tight lg:-tracking-[0.01em] xl:tracking-normal whitespace-nowrap leading-tight">
                      {t(service.title.de, service.title.en)}
                    </h3>
                  </div>

                  {/* Description - always visible */}
                  <div className="mt-0.5">
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
