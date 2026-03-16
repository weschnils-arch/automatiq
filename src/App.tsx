import { Suspense, lazy, useState, useEffect } from 'react';
import { AppProvider } from '@/context/AppContext';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import UnicornSticky from '@/components/UnicornSticky';
import { motion } from 'motion/react';
import './App.css';

// Lazy load sections below the fold
const ProblemSolution = lazy(() => import('@/sections/ProblemSolution'));
const Team = lazy(() => import('@/sections/Team'));
const Testimonials = lazy(() => import('@/sections/Testimonials'));
const FAQ = lazy(() => import('@/sections/FAQ'));
const Contact = lazy(() => import('@/sections/Contact'));
const Footer = lazy(() => import('@/sections/Footer'));
const Impressum = lazy(() => import('@/sections/Impressum'));
const Datenschutz = lazy(() => import('@/sections/Datenschutz'));
const ImagineAIPage = lazy(() => import('@/pages/ImagineAIPage'));

// Loading fallbacks to prevent layout shift
const SectionLoader = () => <div className="min-h-[400px] bg-[#0A0A0A]" />;

function ImagineAITeaser() {
  const navigateToImagineAI = () => {
    window.location.hash = '#imagine-ai-page';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="imagine-ai" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Gradient background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs font-bold tracking-[6px] uppercase text-blue-400 mb-6"
        >
          AUTOMIQ STUDIO
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.05]"
        >
          AI IMAG<span className="text-blue-400">/</span>INE
        </motion.h2>

        {/* Sub-headline / tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mb-12 leading-relaxed"
        >
          One Character. Infinite Worlds. Zero Compromise. — Explore our full AI-generated image portfolio.
        </motion.p>

        {/* Preview thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
        >
          {[
            '/images/hf_20260226_190127_d32cba66-0f70-4e19-8390-13c309bc698f_1.webp',
            '/images/hf_20260226_190553_3998c3a6-59cb-4764-8a8d-e2254aec952e_1.webp',
            '/images/hf_20260226_191526_ce117c66-5840-4f63-b511-56a58d07eee0_1.webp',
            '/images/hf_20260226_191143_7c946b2d-9d26-4d05-9227-afc8c355e872_1.webp',
          ].map((src, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${i * 80}ms` }}
              onClick={navigateToImagineAI}
            >
              <img
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
        >
          <button
            onClick={navigateToImagineAI}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-white overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.14)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
            }}
          >
            <span>Show Full Portfolio</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {/* Button shimmer */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#impressum') {
        setCurrentPage('impressum');
        window.scrollTo(0, 0);
      } else if (hash === '#datenschutz') {
        setCurrentPage('datenschutz');
        window.scrollTo(0, 0);
      } else if (hash === '#imagine-ai-page') {
        setCurrentPage('imagine-ai-page');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
        if (hash && hash !== '#' && hash !== '#home') {
          setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <AppProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {currentPage !== 'imagine-ai-page' && <Header />}
        <main>
          {currentPage === 'impressum' && (
            <Suspense fallback={<SectionLoader />}>
              <Impressum />
            </Suspense>
          )}
          {currentPage === 'datenschutz' && (
            <Suspense fallback={<SectionLoader />}>
              <Datenschutz />
            </Suspense>
          )}
          {currentPage === 'imagine-ai-page' && (
            <Suspense fallback={<SectionLoader />}>
              <ImagineAIPage />
            </Suspense>
          )}
          {currentPage === 'home' && (
            <>
              <Hero />
              <Suspense fallback={<SectionLoader />}>
                <ProblemSolution />

                {/* Video Background — About Us (Team) section only */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="none"
                      className="w-full h-full object-cover opacity-40"
                    >
                      <source src="/videos/about-divider.webm" type="video/webm" />
                    </video>
                    {/* Smooth transition gradients */}
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                  </div>
                  <div className="relative z-10 bg-[#0A0A0A]/30">
                    <Team />
                  </div>
                </div>

                <ImagineAITeaser />
                <Testimonials />

                <FAQ />
                <Contact />
              </Suspense>
            </>
          )}
        </main>
        {currentPage !== 'imagine-ai-page' && (
          <Suspense fallback={<SectionLoader />}>
            <Footer />
          </Suspense>
        )}
        <UnicornSticky />
      </div>
    </AppProvider>
  );
}

export default App;
