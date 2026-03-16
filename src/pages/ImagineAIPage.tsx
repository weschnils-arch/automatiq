import { Suspense, lazy } from 'react';
import Header from '@/sections/Header';

const ImagineAI = lazy(() => import('@/sections/ImagineAI'));
const Footer = lazy(() => import('@/sections/Footer'));

const SectionLoader = () => <div className="min-h-[400px] bg-[#0A0A0A]" />;

export default function ImagineAIPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Header />
      <main>
        {/* Page Hero */}
        <div className="pt-32 pb-8 px-6 md:px-12 text-center">
          <p className="text-xs font-bold tracking-[6px] uppercase text-blue-400 mb-4">
            AUTOMIQ STUDIO
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            AI IMAG<span className="text-blue-400">/</span>INE
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            The holy grail of AI creation — persistent digital identities with flawless consistency across any world.
          </p>
        </div>

        <Suspense fallback={<SectionLoader />}>
          <ImagineAI />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}
