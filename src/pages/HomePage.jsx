import React from 'react';
import Hero from '../components/Hero';
import Agony from '../components/Agony';
import PainPoints from '../components/PainPoints';
import Process from '../components/Process';
import ServiceDetails from '../components/ServiceDetails';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CaptureCTA from '../components/CaptureCTA';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Agony />
      <PainPoints />
      <Process />
      <ServiceDetails />
      <Stats />
      <Testimonials />
      <FAQ />
      <CaptureCTA />
    </main>
  );
};

export default HomePage;
