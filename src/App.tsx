import React, { Suspense, lazy } from 'react';
import { AppProvider } from '@/context/AppContext';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import './App.css';

// Lazy load sections below the fold
const ProblemSolution = lazy(() => import('@/sections/ProblemSolution'));
const Pricing = lazy(() => import('@/sections/Pricing'));
const Team = lazy(() => import('@/sections/Team'));
const Testimonials = lazy(() => import('@/sections/Testimonials'));
const FAQ = lazy(() => import('@/sections/FAQ'));
const Contact = lazy(() => import('@/sections/Contact'));
const Footer = lazy(() => import('@/sections/Footer'));

// Loading fallbacks to prevent layout shift
const SectionLoader = () => <div className="min-h-[400px] bg-[#0A0A0A]" />;

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<SectionLoader />}>
            <ProblemSolution />
            <Pricing />

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
                  <source src="/videos/about-divider.mp4" type="video/mp4" />
                </video>
                {/* Smooth transition gradients */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              </div>

              <div className="relative z-10 bg-[#0A0A0A]/30">
                <Team />
                <Testimonials />
              </div>
            </div>

            <FAQ />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </AppProvider>
  );
}

export default App;
