import { useApp } from '@/context/AppContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ProblemSolution() {
  const { t } = useApp();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="separator-fade" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Problem Side */}
          <div
            className={`glass p-8 md:p-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-muted">
                <AlertTriangle className="w-6 h-6 text-muted-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {t('Das Problem', 'The Problem')}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 uppercase">
              {t(
                'Wird Ihr Unternehmen durch veraltete Technologie begrenzt?',
                'Is Your Business Limited by Outdated Technology?'
              )}
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {t(
                'Viele Unternehmen kämpfen mit ineffizienten Arbeitsabläufen, isolierten Systemen und veralteter Software. Dies führt zu verpassten Chancen, frustrierenden Benutzererfahrungen und einem Wettbewerbsnachteil in der digitalen Landschaft.',
                'Many businesses struggle with inefficient workflows, disconnected systems, and outdated software. This leads to missed opportunities, frustrating user experiences, and a competitive disadvantage in the digital landscape.'
              )}
            </p>

            <ul className="space-y-3">
              {[
                t('Manuelle Prozesse verschwenden wertvolle Zeit', 'Manual processes waste valuable time'),
                t('Datensilos verhindern effektive Zusammenarbeit', 'Data silos prevent effective collaboration'),
                t('Veraltete Technologie bremst das Wachstum aus', 'Outdated technology hinders growth'),
                t('Schlechte UX führt zu Kundenverlust', 'Poor UX leads to customer churn'),
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Side */}
          <div
            className={`glass p-8 md:p-10 border-blue-500/30 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-blue-600/10">
                <CheckCircle2 className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                {t('Unsere Lösung', 'Our Solution')}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 uppercase">
              {t(
                'Entfesseln Sie Ihr Potenzial mit zukunftssicheren Lösungen.',
                'Unlock Your Potential with Future-Proof Solutions.'
              )}
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {t(
                'AutoMiQ Corp. entwickelt maßgeschneiderte Softwarelösungen, die Ihre Geschäftsprozesse automatisieren, optimieren und transformieren. Unser Ansatz kombiniert technische Exzellenz mit strategischem Denken.',
                'AutoMiQ Corp. develops custom software solutions that automate, optimize, and transform your business processes. Our approach combines technical excellence with strategic thinking.'
              )}
            </p>

            <ul className="space-y-3">
              {[
                t('Automatisierung wiederholbarer Aufgaben', 'Automation of repetitive tasks'),
                t('Nahtlose Integration bestehender Systeme', 'Seamless integration of existing systems'),
                t('Skalierbare Architektur für Wachstum', 'Scalable architecture for growth'),
                t('Intuitive Benutzeroberflächen', 'Intuitive user interfaces'),
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
