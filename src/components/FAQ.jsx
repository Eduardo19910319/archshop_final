import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const FAQ = () => {
  const faqs = [
    {
      q: "Quanto custa um projeto personalizado?",
      a: "O valor varia de acordo com a área do lote e do projeto. Porém, nosso projeto executivo se paga na obra, gerando economia real de até 20% em materiais e evitando retrabalhos. O investimento inicial no projeto garante a segurança e previsibilidade do seu orçamento de obra."
    },
    {
      q: "Qual o prazo de entrega?",
      a: "O prazo médio para entrega completa (Estudo Preliminar, Anteprojeto, Compatibilização e Projeto Executivo) é de 60 a 90 dias, dependendo do tamanho da residência e da rapidez na aprovação das fases pelo cliente."
    },
    {
      q: "Vocês atendem minha cidade?",
      a: "Sim! Trabalhamos com atendimento nacional e 100% online. As reuniões de briefing e apresentação do 3D são feitas por videoconferência. Entregamos todo o material em formato digital para você imprimir ou enviar diretamente para seus fornecedores locais."
    },
    {
      q: "O projeto já inclui aprovação na prefeitura?",
      a: "Nós fornecemos pranchas técnicas no padrão municipal da sua cidade (Projeto Legal). Com este material, basta contratar um engenheiro ou despachante local para protocolar a documentação na prefeitura."
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full py-16 md:py-24 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <Reveal direction="up" delay={0.1}>
            <p className="text-archshop-orange font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 font-outfit">Central de Dúvidas</p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-medium text-zinc-900 tracking-tight leading-[1.1] uppercase">
              Perguntas <span className="text-zinc-400 italic font-light">Frequentes.</span>
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} direction="up" delay={0.3 + (idx * 0.1)}>
              <div className={`border transition-all duration-300 rounded-2xl overflow-hidden ${openIdx === idx ? "border-orange-200 bg-orange-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" : "border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-sm" }`} >
                <button className="flex items-center justify-between w-full p-6 sm:p-8 text-left cursor-pointer transition-colors" onClick={() => setOpenIdx(openIdx === idx ? null : idx)} >
                  <h3 className={`text-lg sm:text-xl font-medium pr-4 sm:pr-8 transition-colors font-outfit uppercase ${openIdx === idx ? "text-orange-600" : "text-zinc-800"}`}>
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIdx === idx ? "bg-archshop-orange text-white" : "bg-zinc-50 border border-zinc-200 text-zinc-400"}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-500 ease-in-out ${openIdx === idx ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIdx === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0" }`} >
                  <div className="p-6 sm:p-8 pt-0 text-zinc-500 leading-relaxed text-base sm:text-lg font-light">
                    {faq.a}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
