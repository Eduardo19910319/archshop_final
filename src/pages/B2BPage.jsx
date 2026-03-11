import React from 'react';
import B2BHero from '../components/b2b/B2BHero';
import B2BPainPoints from '../components/b2b/B2BPainPoints';
import B2BServices from '../components/b2b/B2BServices';
import B2BStats from '../components/b2b/B2BStats';
import B2BWorkflow from '../components/b2b/B2BWorkflow';
import B2BComparison from '../components/b2b/B2BComparison';
import B2BPricing from '../components/b2b/B2BPricing';
import B2BGuarantee from '../components/b2b/B2BGuarantee';
import B2BCTA from '../components/b2b/B2BCTA';
import FAQ from '../components/FAQ';

const B2BPage = () => {
  const b2bFaqs = [
    { q: "Quais projetos de engenharia vocês fazem?", a: "Trabalhamos com projetos elétricos, hidrossanitários, estruturais e de climatização, todos integrados em BIM." },
    { q: "Como funciona a entrega dos arquivos?", a: "Entregamos os arquivos em DWG, PDF e o modelo centralizado em IFC para garantir a compatibilidade total." }
  ];

  return (
    <div className="bg-white pt-20">
      <B2BHero />
      <B2BPainPoints />
      <B2BServices />
      <B2BStats />
      <B2BWorkflow />
      <B2BComparison />
      <B2BPricing />
      <B2BGuarantee />
      <B2BCTA />
      <FAQ items={b2bFaqs} />
    </div>
  );
};

export default B2BPage;
