import React from 'react';
import RHeroLaunches from '../components/rendering/launches/RHeroLaunches';
import RAgonyLaunches from '../components/rendering/launches/RAgonyLaunches';
import RServicesLaunches from '../components/rendering/launches/RServicesLaunches';
import FAQ from '../components/FAQ';

const RenderLaunchesPage = () => {
  const faqs = [
    { q: "Qual o nível de realismo das imagens?", a: "Trabalhamos com visualização fotorrealista extrema em 8K, garantindo que cada textura e detalhe de luz venda o projeto." },
    { q: "Vocês fazem vídeos para redes sociais?", a: "Sim, produzimos teasers cinematográficos otimizados para Instagram (Reels), YouTube e anúncios pagos." }
  ];

  return (
    <div className="bg-white">
      <RHeroLaunches />
      <RAgonyLaunches />
      <RServicesLaunches />
      <FAQ items={faqs} />
    </div>
  );
};

export default RenderLaunchesPage;
