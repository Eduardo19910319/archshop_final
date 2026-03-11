import React from 'react';
import RHeroArchitects from '../components/rendering/architects/RHeroArchitects';
import RAgonyArchitects from '../components/rendering/architects/RAgonyArchitects';
import RServicesArchitects from '../components/rendering/architects/RServicesArchitects';
import RPricingArchitects from '../components/rendering/architects/RPricingArchitects';
import FAQ from '../components/FAQ';

const RenderArchitectsPage = () => {
  const faqs = [
    { q: "O arquivo é compatível com SketchUp e V-Ray?", a: "Sim, trabalhamos nativamente com SketchUp, Revit e os principais motores de render (V-Ray/Corona)." },
    { q: "Como funciona a entrega White Label?", a: "Nós entregamos as imagens finais sem marca d'água ArchShop e em alta resolução para que sua logo seja a única a brilhar." }
  ];

  return (
    <div className="bg-white">
      <RHeroArchitects />
      <RAgonyArchitects />
      <RServicesArchitects />
      <RPricingArchitects />
      <FAQ items={faqs} />
    </div>
  );
};

export default RenderArchitectsPage;
