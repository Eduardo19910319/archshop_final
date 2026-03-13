import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const Authority = () => {
  const testimonials = [
    {
      name: "Anderson Mota",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      text: "Uma empresa composta de profissionais altamente qualificados, competentes e atenciosos que conseguiram materializar meu sonho, super recomendo!"
    },
    {
      name: "Juliana Costa",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      text: "Surpreendente. Entregaram a planta exata do jeito que eu imaginei, mas de uma forma que meu bolso consegue pagar a obra."
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const next = () => setActiveIdx((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10 text-center">
        <Reveal direction="up" delay={0.1}>
          <p className="text-archshop-orange font-medium text-sm md:text-base mb-4 tracking-wide uppercase font-outfit">depoimentos, por que experiências importam</p>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-medium text-zinc-900 mb-16 tracking-tight leading-[1.1] uppercase">
            O que falam da nossa<br />
            <span className="text-zinc-400 italic font-light">arquitetura.</span>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.3}>
          <div className="flex items-center justify-center gap-6 md:gap-12 min-h-[400px]">
            <button onClick={prev} className="w-12 h-12 md:w-14 md:h-14 bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-full flex items-center justify-center hover:bg-zinc-100 hover:scale-105 transition-all shrink-0">
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <div className="flex flex-col items-center max-w-xs md:max-w-xl mx-auto" key={activeIdx}>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8">
                <img src={testimonials[activeIdx].image} alt={testimonials[activeIdx].name} className="w-full h-full object-cover" />
              </div>
              <p className="text-zinc-500 text-lg md:text-2xl font-light leading-relaxed italic mb-8"> "{testimonials[activeIdx].text}" </p>
              <h3 className="text-lg md:text-xl font-medium text-zinc-900 tracking-wide uppercase font-outfit">{testimonials[activeIdx].name}</h3>
            </div>
            <button onClick={next} className="w-12 h-12 md:w-14 md:h-14 bg-zinc-900 text-white rounded-full flex items-center justify-center hover:bg-black hover:scale-105 transition-all shrink-0 shadow-xl shadow-zinc-900/20">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Authority;
