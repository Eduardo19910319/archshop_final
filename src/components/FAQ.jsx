import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

const FAQ = ({ items }) => {
  const defaultFaqs = [
    {
      q: "Quanto custa um projeto personalizado?",
      a: "O valor varia de acordo com a área do lote e do projeto. Porém, nosso projeto executivo se paga na obra, gerando economia real de até 20% em materiais e evitando retrabalhos."
    },
    {
      q: "Qual o prazo de entrega?",
      a: "O prazo médio para entrega completa (Estudo Preliminar ao Executivo) é de 60 a 90 dias, dependendo da rapidez nas aprovações."
    },
    {
      q: "Vocês atendem minha cidade?",
      a: "Sim! Trabalhamos com atendimento nacional e 100% online. As reuniões são feitas por videoconferência com entregas digitais de alta resolução."
    },
    {
      q: "O projeto já inclui aprovação na prefeitura?",
      a: "Fornecemos pranchas técnicas no padrão municipal (Projeto Legal). Você precisará de um profissional local apenas para o protocolo e acompanhamento da aprovação."
    }
  ];

  const faqs = items || defaultFaqs;
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-16 md:mb-20">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-archshop-orange/10 border border-archshop-orange/20 text-archshop-orange text-xs font-semibold mb-6 uppercase">
                Central de Ajuda
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 font-outfit uppercase-none">
              Dúvidas <span className="text-gray-400 italic">Frequentes.</span>
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} direction="up" delay={0.2 + (idx * 0.1)}>
              <div className={`border transition-all duration-300 rounded-2xl overflow-hidden ${openIdx === idx ? "border-orange-200 bg-orange-50/30" : "border-gray-100 bg-white hover:border-gray-200" }`} >
                <button className="flex items-center justify-between w-full p-6 sm:p-8 text-left cursor-pointer transition-colors" onClick={() => setOpenIdx(openIdx === idx ? null : idx)} >
                  <h3 className={`text-lg font-semibold pr-8 transition-colors font-outfit uppercase-none ${openIdx === idx ? "text-archshop-orange" : "text-gray-900"}`}>
                    {faq.q}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIdx === idx ? "bg-archshop-orange text-white" : "bg-gray-50 text-gray-400"}`}>
                    <ChevronDown size={20} className={`transition-transform duration-500 ${openIdx === idx ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIdx === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0" }`} >
                  <div className="p-8 pt-0 text-gray-500 leading-relaxed text-sm md:text-base font-light">
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
