import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Terceirização de Render 3D para Arquitetos | White Label e Entrega 48h</title>
        <meta name="description" content="Aumente sua produtividade terceirizando a renderização dos seus projetos. Qualidade fotorrealista e entrega rápida para sua arquitetura." />
      </Helmet>
      <RHeroArchitects />
      <RAgonyArchitects />
      <RServicesArchitects />
      <RPricingArchitects />
      <FAQ items={faqs} />
    </div>
  );
};

export default RenderArchitectsPage;
