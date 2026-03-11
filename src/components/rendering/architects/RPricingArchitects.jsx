import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Target } from 'lucide-react';

const RPricingArchitects = () => {
  const plans = [
    {
      name: "Custo por Imagem",
      price: "A partir de R$ 450",
      icon: <Target className="text-archshop-orange" />,
      desc: "Ideal para Render de Aprovação ou necessidades pontuais de última hora.",
      features: [
        "Render Full HD / 4K",
        "Configuração SketchUp/V-Ray",
        "Ajustes Finos de Iluminação",
        "Entrega em 48h",
        "White Label Incluso"
      ],
      cta: "Solicitar Imagem",
      featured: false
    },
    {
      name: "Pacote de Renders",
      price: "Planos Flexíveis",
      icon: <Zap className="text-archshop-orange" />,
      desc: "Para escritórios que precisam de um braço operacional de modelagem em escala.",
      features: [
        "Prioridade de Entrega",
        "Modelagem 3D Pesada Inclusa",
        "Detalhamento de Marcenaria",
        "Integração Trello/Asana",
        "Melhor Custo-Benefício"
      ],
      cta: "Ver Pacotes",
      featured: true
    }
  ];

  return (
    <section id="precos" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 font-outfit">Investimento Estratégico</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">Planos pensados para a realidade dinâmica dos escritórios de arquitetura.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl border transition-all duration-300 ${
                plan.featured 
                ? 'border-archshop-orange bg-white shadow-2xl shadow-archshop-orange/10 relative scale-105 z-10' 
                : 'border-gray-200 bg-white hover:shadow-xl'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-archshop-orange text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Parceria VIP
                </span>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-50 rounded-lg">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-outfit">{plan.name}</h3>
              </div>

              <div className="text-2xl font-bold text-gray-900 mb-4 font-outfit">{plan.price}</div>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed h-12">{plan.desc}</p>
              
              <div className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex gap-3 text-sm text-gray-700 items-start">
                    <Check size={18} className="text-archshop-orange shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group ${
                plan.featured 
                ? 'bg-archshop-orange text-white hover:bg-orange-600 shadow-archshop-orange/25' 
                : 'bg-white border-2 border-gray-100 text-gray-900 hover:border-archshop-orange/30'
              }`}>
                {plan.cta} 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RPricingArchitects;
