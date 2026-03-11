import React from 'react';
import { motion } from 'framer-motion';
import { Video, Image, MousePointer2, Box, Sparkles, Target } from 'lucide-react';

const RServicesArchitects = () => {
  const services = [
    {
      title: "Maquete de Interiores",
      desc: "Foco total no detalhamento de marcenaria e iluminação para projetos residenciais e comerciais.",
      icon: <Image size={18} />,
    },
    {
      title: "V-Ray & Corona Render",
      desc: "Expertise técnica nos motores mais usados pelo mercado para garantir o realismo que seu cliente exige.",
      icon: <Sparkles size={18} />,
    },
    {
      title: "Render para Aprovação",
      desc: "Imagens funcionais e estéticas para apresentações rápidas que garantem o 'sim' do cliente.",
      icon: <MousePointer2 size={18} />,
    },
    {
      title: "Modelagem SketchUp / Revit",
      desc: "Nós fazemos o trabalho pesado de modelagem para que você entregue mais projetos em menos tempo.",
      icon: <Box size={18} />,
    },
    {
      title: "Braço 3D White Label",
      desc: "Operação invisível: fazemos a imagem, você coloca seu logo e brilha na frente do cliente.",
      icon: <Target size={18} />,
    },
    {
      title: "Volume e Velocidade",
      desc: "Pacotes sob demanda para escritórios que precisam de fluxo constante e prazos rígidos.",
      icon: <Video size={18} />,
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50 uppercase-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 font-outfit">Soluções 3D sob Demanda</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">Produção de alto nível para arquitetos que buscam escala e qualidade sem inflar o custo fixo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-archshop-orange mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-outfit">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RServicesArchitects;
