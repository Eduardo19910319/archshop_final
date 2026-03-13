import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Visualização 3D e Renders para Lançamentos Imobiliários | ArchShop</title>
        <meta name="description" content="Acelere o VGV do seu empreendimento com imagens cinematográficas e vídeos que vendem antes do primeiro tijolo." />
      </Helmet>
      <RHeroLaunches />
      <RAgonyLaunches />
      <RServicesLaunches />
      <FAQ items={faqs} />
    </div>
  );
};

export default RenderLaunchesPage;
