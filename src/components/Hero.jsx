import React from 'react';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import Reveal from './Reveal';

const Hero = () => {
  return (
    <section className="w-full min-h-screen px-4 md:px-6 pt-4 pb-24 md:pt-6 md:pb-32 flex flex-col justify-center bg-zinc-100 transition-colors duration-500">
      {/* Floating Hero Card Container */}
      <div className="relative w-full min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] rounded-[2rem] sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden bg-zinc-50 flex flex-col justify-center shadow-xl border border-black/5 group">

        {/* Cinematic Backdrop & Lighting */}
        <div className="absolute inset-0 z-0 overflow-hidden w-full h-full max-w-[100vw]">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2600&auto=format&fit=crop"
            alt="Arquitetura Noturna Iluminada"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
          />
          {/* Intense Orange/Brand Glows */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-transparent z-10 transition-colors duration-500"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F58249]/15 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-10 translate-x-1/4 transition-colors duration-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-zinc-50/80 to-transparent z-10 transition-colors duration-500"></div>
        </div>

        <div className="relative z-20 w-full px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-16 min-h-[70vh]">

          {/* Left Column - Colossal High-Contrast Typography */}
          <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
            <Reveal direction="up" delay={0.1}>
              {/* Tech UI Pill */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/5 border border-black/10 backdrop-blur-md text-zinc-600 font-medium text-xs tracking-[0.2em] uppercase mb-8 shadow-sm transition-colors duration-500">
                <span className="relative w-2 h-2 flex items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#F58249] opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#F58249]"></span>
                </span>
                ArchShop Studio
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-medium text-zinc-900 leading-[1.1] tracking-tight mb-6 transition-colors duration-500 max-w-[90%] uppercase">
                MAXIMIZE O <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-400">SEU TEMPO.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-base md:text-lg text-zinc-600 max-w-xl font-light leading-relaxed mb-10 border-l border-[#F58249]/30 pl-6 transition-colors duration-500">
                Redefinimos a arquitetura de alto padrão. Projetos majestosos entregues em tempo recorde, com tecnologia BIM e <strong className="font-medium text-zinc-900">absoluto controle</strong> sobre cada centavo da sua obra.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                {/* Glowing CTA Button */}
                <a href="#orcamento" className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold transition-all duration-300 transform shadow-lg hover:shadow-[0_0_30px_rgba(245,130,73,0.3)] hover:-translate-y-0.5 text-sm md:text-base overflow-hidden border border-zinc-800">
                  <span className="relative z-10 tracking-wide">Construir Agora</span>
                  <span className="relative z-10 bg-white/10 p-2 rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <ArrowRight strokeWidth={1.25} className="w-5 h-5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                </a>

                <div className="flex flex-col">
                  <span className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-1 font-outfit">Status de Entrega</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 strokeWidth={1.25} className="w-4 h-4 text-[#F58249]" />
                    <span className="text-zinc-900 text-sm font-medium transition-colors duration-500">Prazo Fixo (60 a 90 dias)</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column - Tech UI "Jewelry" Overlays */}
          <div className="w-full lg:w-[40%] relative flex flex-col lg:flex-row lg:justify-end items-end h-full mt-16 lg:mt-0 gap-6 lg:gap-0">

            {/* Main Glass Widget */}
            <Reveal direction="left" delay={0.5} className="w-full sm:w-auto lg:w-full lg:max-w-sm ml-auto z-30">
              <div className="bg-white/70 backdrop-blur-xl border border-black/5 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden group hover:border-[#F58249]/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F58249]/5 rounded-full blur-[40px] pointer-events-none transition-colors duration-500"></div>

                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <p className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-1 font-outfit">Fase de Projeto</p>
                    <p className="text-zinc-900 text-xl font-medium transition-colors duration-500 font-outfit">Render Executivo</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-zinc-400 transition-colors duration-500">
                    <FileText strokeWidth={1.25} className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-zinc-500 font-medium transition-colors duration-500">
                      <span>Economia Gerada (BIM)</span>
                      <span className="text-[#F58249]">20%</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden transition-colors duration-500">
                      <div className="w-[20%] h-full bg-gradient-to-r from-[#F58249] to-[#F58249] rounded-full relative">
                        <div className="absolute right-0 top-0 w-2 h-full bg-white blur-[2px]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-zinc-500 font-medium transition-colors duration-500">
                      <span>Previsibilidade de Obra</span>
                      <span className="text-zinc-900">100%</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden transition-colors duration-500">
                      <div className="w-full h-full bg-[#F58249] rounded-full"></div>
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
