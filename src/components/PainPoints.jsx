import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const PainPoints = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 text-center">

        <Reveal direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-outfit font-medium text-zinc-900 mb-16 tracking-tight leading-tight uppercase">
            Por que <span className="text-archshop-orange relative inline-block">projetos comuns demoram
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
            </span><br className="hidden md:block" /> tanto para sair do papel?
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto text-left">
          {/* The Problem Card */}
          <Reveal direction="up" delay={0.2}>
            <div className="bg-zinc-50 border border-zinc-100 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 mb-6">
                <span className="font-bold text-xl block leading-none -mt-1">&times;</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4 font-outfit uppercase">O Arquiteto Tradicional</h3>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                A maioria foca no próprio ego e não no seu cronograma. O resultado? Reuniões exaustivas, infinitas revisões e você pagando meses de condomínio com o terreno vazio.
              </p>
            </div>
          </Reveal>

          {/* The Solution Card */}
          <Reveal direction="up" delay={0.3}>
            <div className="bg-orange-50/50 border border-orange-100 rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="w-12 h-12 rounded-full bg-archshop-orange flex items-center justify-center text-white mb-6 relative z-10 shadow-lg shadow-orange-500/20">
                <CheckCircle2 strokeWidth={1.25} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4 relative z-10 font-outfit uppercase">O Método ArchShop</h3>
              <p className="text-zinc-700 text-base md:text-lg leading-relaxed relative z-10">
                Limpamos a gordura do processo. Através de um Briefing Assertivo e um sistema ágil, entregamos projetos completos no ritmo que a sua vida exige. Você no controle.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
