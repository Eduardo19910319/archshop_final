import React from 'react';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import HowItWorks from '../components/HowItWorks';
import Statistics from '../components/Statistics';
import WhatsIncluded from '../components/WhatsIncluded';
import Authority from '../components/Authority';
import FAQ from '../components/FAQ';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Statistics />
      <WhatsIncluded />
      <Authority />
      <FAQ />
    </main>
  );
};

export default HomePage;
