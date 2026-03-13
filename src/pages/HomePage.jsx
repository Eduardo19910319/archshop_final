import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>ArchShop | Projetos de Arquitetura Residencial de Alto Padrão e BIM</title>
        <meta name="description" content="A ArchShop transforma terrenos em residências de luxo com tecnologia BIM e previsibilidade total. Projetos arquitetônicos e executivos completos." />
      </Helmet>
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
