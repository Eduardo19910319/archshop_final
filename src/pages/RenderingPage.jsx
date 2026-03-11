import React from 'react';
import RHero from '../components/rendering/RHero';
import RAgony from '../components/rendering/RAgony';
import RServices from '../components/rendering/RServices';
import RStats from '../components/rendering/RStats';
import RDifferentials from '../components/rendering/RDifferentials';
import RPortfolio from '../components/rendering/RPortfolio';
import FAQ from '../components/FAQ';

const RenderingPage = () => {
  const renderingFaqs = [
    { q: "Qual o prazo entrega?", a: "O prazo médio é de 5 a 10 dias úteis, dependendo da complexidade do projeto." },
    { q: "Quantas revisões estão inclusas?", a: "Oferecemos 2 rodadas de revisões gratuitas para garantir sua satisfação total." }
  ];

  return (
    <div className="bg-white pt-20">
      <RHero />
      <RAgony />
      <RServices />
      <RStats />
      <RDifferentials />
      <RPortfolio />
      <FAQ items={renderingFaqs} />
    </div>
  );
};

export default RenderingPage;
