import { Suspense, lazy, useState, useEffect } from 'react';
import { AppProvider } from '@/context/AppContext';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import UnicornSticky from '@/components/UnicornSticky';
import './App.css';

// Lazy load sections below the fold
const ProblemSolution = lazy(() => import('@/sections/ProblemSolution'));
const Team = lazy(() => import('@/sections/Team'));
const ImagineAI = lazy(() => import('@/sections/ImagineAI'));
const Testimonials = lazy(() => import('@/sections/Testimonials'));
const FAQ = lazy(() => import('@/sections/FAQ'));
const Contact = lazy(() => import('@/sections/Contact'));
const Footer = lazy(() => import('@/sections/Footer'));
const Impressum = lazy(() => import('@/sections/Impressum'));
const Datenschutz = lazy(() => import('@/sections/Datenschutz'));

// Loading fallbacks to prevent layout shift
const SectionLoader = () => <div className="min-h-[400px] bg-[#0A0A0A]" />;

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#impressum' || hash === '#datenschutz') {
        setCurrentPage(hash.replace('#', ''));
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
        <Header />
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
          {currentPage === 'home' && (
            <>
              <Hero />
              <Suspense fallback={<SectionLoader />}>
                <ProblemSolution />

                {/* Shared Background for Team & Testimonials */}
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
                    <ImagineAI />
                    <Testimonials />
                  </div>
                </div>

                <FAQ />
                <Contact />
              </Suspense>
            </>
          )}
        </main>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
        <UnicornSticky />
      </div>
    </AppProvider>
  );
}

export default App;
