import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import Reveal from './Reveal';

const PainPoints = () => {
  return (
    <section className="w-full py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-archshop-orange/10 border border-archshop-orange/20 text-archshop-orange text-xs font-semibold mb-6">
              ArchShop vs. Tradicional
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 font-outfit uppercase-none">
              Por que projetos comuns <span className="text-gray-400 italic">demoram tanto?</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* The Problem Card */}
          <Reveal direction="up" delay={0.2}>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm h-full">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-gray-400 mb-6 shadow-sm">
                <XCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-outfit">O Arquiteto Tradicional</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                A maioria foca no processo artístico e não no seu cronograma. O resultado? Reuniões exaustivas, infinitas revisões e custos extras.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Falta de transparência nos custos
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Prazos que nunca são cumpridos
                </li>
              </ul>
            </div>
          </Reveal>

          {/* The Solution Card */}
          <Reveal direction="up" delay={0.3}>
            <div className="bg-orange-50/30 border border-archshop-orange/10 rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden h-full">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-archshop-orange mb-6 shadow-sm">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-outfit">O Método ArchShop</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Limpamos a gordura do processo. Através de um Briefing Assertivo e um sistema ágil, entregamos projetos completos no ritmo que você exige.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-800 text-sm font-medium">
                  <CheckCircle2 size={16} className="text-archshop-orange" /> Orçamento compatível com a obra
                </li>
                <li className="flex items-center gap-3 text-gray-800 text-sm font-medium">
                  <CheckCircle2 size={16} className="text-archshop-orange" /> Entrega 3x mais rápida em BIM
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
