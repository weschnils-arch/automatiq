import { useEffect, useRef, useState } from 'react';
import { useApp } from '@/context/AppContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    client: 'TATEKU GROUP GMBH',
    testimonial: {
      de: 'AutoMiQ hat unser Unternehmen mit einem maßgeschneiderten CRM-System transformiert. Wir sahen eine 200%ige Produktivitätssteigerung innerhalb von 3 Monaten.',
      en: 'AutoMiQ transformed our business with a custom CRM system. We saw a 200% increase in productivity within 3 months.',
    },
    metric: '+200%',
    metricLabel: {
      de: 'Produktivitätssteigerung',
      en: 'Productivity Boost',
    },
  },
  {
    id: '2',
    client: 'Real Estate Group ABC',
    testimonial: {
      de: 'Ihr Immobilienmanagementsystem ist intuitiv und leistungsstark. Unser Team liebt es.',
      en: 'Their real estate management system is intuitive and powerful. Our team loves it.',
    },
    metric: '50K+',
    metricLabel: {
      de: 'Verwaltete Immobilien',
      en: 'Properties Managed',
    },
  },
  {
    id: '3',
    client: 'E-Commerce Brand DEF',
    testimonial: {
      de: 'Die Landing Page, die sie entworfen haben, ist atemberaubend und konvertiert hervorragend.',
      en: 'The landing page they designed is stunning and converts like crazy.',
    },
    metric: '+45%',
    metricLabel: {
      de: 'Conversion-Rate',
      en: 'Conversion Rate',
    },
  },
];

const counters = [
  { id: 'projects', value: 150, suffix: '+', label: { de: 'Abgeschlossene Projekte', en: 'Projects Completed' }, icon: TrendingUp },
  { id: 'satisfaction', value: 98, suffix: '%', label: { de: 'Kundenzufriedenheit', en: 'Client Satisfaction' }, icon: Award },
  { id: 'clients', value: 100, suffix: '+', label: { de: 'Zufriedene Kunden', en: 'Happy Clients' }, icon: Users },
  { id: 'experience', value: 15, suffix: '+', label: { de: 'Jahre Erfahrung', en: 'Years Experience' }, icon: Clock },
];

function AnimatedCounter({
  value,
  suffix,
  isVisible
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // easeOutQuad
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const currentCount = Math.floor(value * easeProgress);

        countRef.current = currentCount;
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, value]);

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Testimonials() {
  const { t } = useApp();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-transparent"
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
            {t('Testimonials', 'Testimonials')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 uppercase">
            {t(
              'Was unsere Kunden sagen',
              'What Our Clients Say'
            )}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Vertrauen Sie auf die Erfahrung von Unternehmen, die bereits mit uns zusammengearbeitet haben.',
              'Trust the experience of companies that have already worked with us.'
            )}
          </p>
        </div>

        {/* Stats Counters */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {counters.map((counter) => {
            const Icon = counter.icon;
            return (
              <div
                key={counter.id}
                className="glass p-6 text-center card-hover"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-blue-500/10">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient-blue mb-2">
                  <AnimatedCounter
                    value={counter.value}
                    suffix={counter.suffix}
                    isVisible={isVisible}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {t(counter.label.de, counter.label.en)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              <div className="glass p-8 h-full card-hover flex flex-col">
                {/* Metric Badge */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    {testimonial.metric} {t(testimonial.metricLabel.de, testimonial.metricLabel.en)}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed flex-grow">
                  "{t(testimonial.testimonial.de, testimonial.testimonial.en)}"
                </blockquote>

                {/* Client Name */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.client.charAt(0)}
                  </div>
                  <span className="font-medium text-foreground">
                    {testimonial.client}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
