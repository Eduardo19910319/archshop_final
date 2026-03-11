import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Scissors, Target } from 'lucide-react';

const RAgonyArchitects = () => {
  const points = [
    {
      title: "Gargalo de Renderização",
      desc: "Aquela dor de estômago ao perceber que a maquete não vai ficar pronta para a reunião de amanhã. Nós resolvemos com Render Express / 48h.",
      icon: <Clock size={24} className="text-red-500" />,
      target: "Alívio"
    },
    {
      title: "Chega de Freelancer que Some",
      desc: "Você precisa de um braço de modelagem 3D confiável para fazer o trabalho sujo enquanto você foca na criação.",
      icon: <Target size={24} className="text-amber-500" />,
      target: "Operação"
    },
    {
      title: "Custo Fixo vs Escalabilidade",
      desc: "Menos impostos e encargos, mais agilidade. Tenha uma equipe de render completa sem inflar seu custo fixo.",
      icon: <Scissors size={24} className="text-blue-500" />,
      target: "Escala"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 font-outfit uppercase-none">A imagem que não convence é dinheiro jogado fora</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Eliminamos os gargalos de produção 3D para que seu escritório foque no que realmente importa: projetar e vender.
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

export default RAgonyArchitects;
