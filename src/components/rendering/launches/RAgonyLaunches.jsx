import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, ShieldAlert } from 'lucide-react';

const RAgonyLaunches = () => {
  const points = [
    {
      title: "Lançamentos de Alto Padrão",
      desc: "Um projeto bilionário não pode ser vendido com imagens amadoras. O fotorrealismo extremo é o que valida o valor do metro quadrado.",
      icon: <ShieldAlert size={24} className="text-red-500" />,
      target: "Status"
    },
    {
      title: "Aceleração de VGV",
      desc: "Quanto vale antecipar as vendas em 3 meses? Nossas imagens criam uma arquitetura narrativa que move o ponteiro comercial.",
      icon: <Target size={24} className="text-amber-500" />,
      target: "Venda"
    },
    {
      title: "Poder de Convencimento",
      desc: "No estande de vendas, a imagem é tudo. Humanizamos seus projetos para mostrar estilo de vida, não apenas concreto.",
      icon: <TrendingUp size={24} className="text-blue-500" />,
      target: "Resultado"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 font-outfit uppercase-none">Não deixe o seu VGV na mão de amadores</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            As imagens são a cara do seu empreendimento. Garantimos visualização cinematográfica que acelera o fechamento de unidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                  {point.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  {point.target}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-outfit">{point.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RAgonyLaunches;
