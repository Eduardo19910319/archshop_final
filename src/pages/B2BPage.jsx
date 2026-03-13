import { Helmet } from 'react-helmet-async';
import B2BHero from '../components/b2b/B2BHero';
import B2BStats from '../components/b2b/B2BStats';
import B2BWorkflow from '../components/b2b/B2BWorkflow';
import B2BPortfolio from '../components/b2b/B2BPortfolio';
import B2BServiceDetails from '../components/b2b/B2BServices';
import B2BComparison from '../components/b2b/B2BComparison';
import B2BGuarantee from '../components/b2b/B2BGuarantee';
import B2BPricing from '../components/b2b/B2BPricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import B2BCTA from '../components/b2b/B2BCTA';
import B2BPainPoints from '../components/b2b/B2BPainPoints';

const B2BPage = () => {
  const b2bFaqs = [
    { q: "A ArchShop assina os projetos?", a: "Sim, emitimos ART de todos os projetos complementares e estruturais calculados por nosso time." },
    { q: "Quais softwares vocês utilizam?", a: "Trabalhamos 100% em BIM (Revit/TQS/QiBuilder), garantindo compatibilização total." },
    { q: "Como é feito o envio dos arquivos?", a: "Utilizamos um CDE (Ambiente Comum de Dados) onde você acessa os modelos centralizados." }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Helmet>
        <title>Engenharia Complementar e Compatibilização BIM para Arquitetos | ArchShop</title>
        <meta name="description" content="Terceirize seus projetos de cálculo estrutural, elétrico e hidráulico em tecnologia BIM. Elimine erros de obra com compatibilização técnica." />
      </Helmet>
      <B2BHero />
      <B2BPainPoints />
      <B2BStats />
      <B2BServices />
      <B2BWorkflow />
      <B2BComparison />
      <B2BPortfolio />
      <B2BGuarantee />
      <B2BPricing />
      <Testimonials />
      <FAQ items={b2bFaqs} />
      <B2BCTA />
    </main>
  );
};

export default B2BPage;
