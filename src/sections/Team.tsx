import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Linkedin, Mail, ChevronDown } from 'lucide-react';

const teamMembers = [
  {
    id: 'michael',
    name: 'Michael Zarre',
    title: {
      de: 'Co-Founder & CTO',
      en: 'Co-Founder & CTO',
    },
    bio: {
      de: 'Michael ist ein visionärer Technologe mit tiefer Expertise in Immobilientech und maßgeschneiderten Softwaresystemen, der die technische Exzellenz von AutoMiQ vorantreibt.',
      en: 'Michael is a visionary technologist with deep expertise in real estate tech and custom software systems, driving AutoMiQ\'s technical excellence.',
    },
    initials: 'MZ',
    color: 'from-blue-600 to-cyan-500',
    image: '/images/team/michael.png',
  },
  {
    id: 'nils',
    name: 'Nils Wesch',
    title: {
      de: 'Design & Projektmanagement',
      en: 'Design & Project Management',
    },
    bio: {
      de: 'Nils bringt über 15 Jahre Erfahrung in der Enterprise-Softwareentwicklung ein und ist auf skalierbare SaaS-Architekturen und innovative Lösungen spezialisiert.',
      en: 'Nils brings 15+ years of enterprise software development expertise, specializing in scalable SaaS architectures and innovative solutions.',
    },
    initials: 'NW',
    color: 'from-blue-500 to-purple-600',
    image: '/images/team/nils.jpeg',
  },
  {
    id: 'leon',
    name: 'Leon Schaefer',
    title: {
      de: 'Software Engineer',
      en: 'Software Engineer',
    },
    bio: {
      de: 'Leon ist ein leidenschaftlicher Software Engineer mit Expertise in modernen Webtechnologien und skalierbaren Anwendungen, der innovative Lösungen bei AutoMiQ entwickelt.',
      en: 'Leon is a passionate Software Engineer with expertise in modern web technologies and scalable applications, building innovative solutions at AutoMiQ.',
    },
    initials: 'LS',
    color: 'from-indigo-500 to-blue-500',
    image: '/images/team/leon.jpeg',
  },
  {
    id: 'flavi',
    name: 'Flavi Ghea',
    title: {
      de: 'Business Development',
      en: 'Business Development',
    },
    bio: {
      de: 'Flavi treibt das Geschäftswachstum von AutoMiQ voran und baut strategische Partnerschaften auf, um innovative Softwarelösungen an die richtigen Kunden zu bringen.',
      en: 'Flavi drives AutoMiQ\'s business growth and builds strategic partnerships to bring innovative software solutions to the right clients.',
    },
    initials: 'FG',
    color: 'from-emerald-500 to-teal-500',
    image: '/images/team/flavi.jpeg',
  },
];

export default function Team() {
  const { t } = useApp();
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  return (
    <section
      id="about"
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
            {t('Unser Team', 'Our Team')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t(
              'Treffen Sie die Köpfe hinter der Mission',
              'Meet the Minds Behind the Mission'
            )}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Gegründet von erfahrenen Technologieexperten, die eine Vision teilen: Unternehmen durch innovative Software zu transformieren.',
              'Founded by experienced technology experts who share a vision: transforming businesses through innovative software.'
            )}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => {
            const isExpanded = expandedMember === member.id;

            return (
              <div
                key={member.id}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <div
                  className="glass p-8 text-center card-hover cursor-pointer"
                  onClick={() => setExpandedMember(isExpanded ? null : member.id)}
                >
                  {/* Avatar */}
                  <div className="relative mb-6 mx-auto">
                    <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br ${member.color} opacity-30 blur-xl -z-10`}
                    />
                  </div>

                  {/* Name & Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium mb-4">
                    {t(member.title.de, member.title.en)}
                  </p>

                  {/* Expand Button */}
                  <button
                    className="flex items-center gap-1 mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedMember(isExpanded ? null : member.id);
                    }}
                  >
                    {t('Mehr erfahren', 'Learn more')}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  {/* Bio - Expandable */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {t(member.bio.de, member.bio.en)}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href="#"
                        className="p-2 rounded-full bg-muted hover:bg-blue-500/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-4 h-4 text-muted-foreground hover:text-blue-400" />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-full bg-muted hover:bg-blue-500/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="w-4 h-4 text-muted-foreground hover:text-blue-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
