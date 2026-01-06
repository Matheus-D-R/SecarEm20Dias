import React from 'react';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Bonuses from './components/Bonuses';
import RealResults from './components/RealResults';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MoreResults from './components/MoreResults';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white font-sans antialiased overflow-x-hidden selection:bg-brand-green selection:text-black">
      <Hero />
      <Testimonials />
      <Features />
      <div className="bg-gradient-to-b from-[#0f0f0f] to-brand-card">
        <Bonuses />
      </div>
      <RealResults />
      <Offer />
      <MoreResults />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;