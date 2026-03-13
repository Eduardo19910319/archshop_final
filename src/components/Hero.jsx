import React from 'react';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import Reveal from './Reveal';

const Hero = () => {
  return (
    <section className="w-full min-h-screen px-4 md:px-6 pt-4 pb-24 md:pt-6 md:pb-32 flex flex-col justify-center bg-zinc-100">
      <div className="relative w-full min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] rounded-[2rem] sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden bg-zinc-50 flex flex-col justify-center shadow-xl border border-black/5 group">

        {/* Cinematic Backdrop & Lighting */}
        <div className="absolute inset-0 z-0 overflow-hidden w-full h-full max-w-[100vw]">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2600&auto=format&fit=crop"
            alt="Arquitetura Noturna Iluminada"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F58249]/15 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-10 translate-x-1/4"></div>
        </div>

        <div className="relative z-20 w-full px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[70vh]">

          <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
            <Reveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-archshop-orange/10 border border-archshop-orange/20 text-archshop-orange text-xs font-semibold mb-8">
                <span className="relative w-2 h-2 flex items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-archshop-orange opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-archshop-orange"></span>
                </span>
                ArchShop Studio
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] mb-6 font-outfit uppercase-none">
                Maximize o seu tempo com <span className="text-archshop-orange">projetos magistrais</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl font-light border-l-2 border-archshop-orange/30 pl-6">
                Redefinimos a arquitetura de alto padrão. Projetos entregues em tempo recorde com tecnologia BIM e <strong className="font-semibold text-gray-900">previsibilidade total</strong> sobre sua obra.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <a href="#orcamento" className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold transition-all duration-300 transform shadow-lg hover:shadow-[0_0_30px_rgba(245,130,73,0.3)] hover:-translate-y-0.5 text-base overflow-hidden border border-zinc-800">
                  <span className="relative z-10">Construir Agora</span>
                  <span className="relative z-10 bg-white/10 p-2 rounded-lg group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <ArrowRight size={20} />
                  </span>
                </a>

                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-1 font-outfit">Status de Entrega</span>
                  <div className="flex items-center gap-2 text-gray-900 font-semibold text-sm">
                    <CheckCircle2 size={16} className="text-archshop-orange" />
                    <span>Prazo Fixo (60 a 90 dias)</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="w-full lg:w-[40%] relative flex flex-col lg:flex-row lg:justify-end items-end h-full mt-16 lg:mt-0 gap-6 lg:gap-0">
            <Reveal direction="left" delay={0.5} className="w-full sm:w-auto lg:w-full lg:max-w-sm ml-auto z-30">
              <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-archshop-orange/30 transition-all">
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-1 font-outfit">Fase de Projeto</p>
                    <p className="text-gray-900 text-xl font-semibold font-outfit">Render Executivo</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                    <FileText size={20} />
                  </div>
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-tight text-gray-500">
                      <span>Economia Gerada (BIM)</span>
                      <span className="text-archshop-orange">20%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-[20%] h-full bg-archshop-orange rounded-full relative"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-tight text-gray-500">
                      <span>Previsibilidade de Obra</span>
                      <span className="text-gray-900">100%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-archshop-orange rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
