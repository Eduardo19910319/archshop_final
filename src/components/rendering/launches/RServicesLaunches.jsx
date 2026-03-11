import React from 'react';
import { motion } from 'framer-motion';
import { Video, Image, MousePointer2, Building, Plane, Sparkles } from 'lucide-react';

const RServicesLaunches = () => {
  const services = [
    {
      title: "Arquitetura Narrativa",
      desc: "Contamos histórias através de imagens que vendem o estilo de vida de quem vai morar no empreendimento.",
      icon: <Image size={18} />,
    },
    {
      title: "Cinematografia 3D",
      desc: "Vídeos e teasers (Reels/Cinematografia) de alto impacto emocional que parecem cinema.",
      icon: <Video size={18} />,
    },
    {
      title: "Tour Virtual 360",
      desc: "Tecnologia imersiva para o estande de vendas, permitindo explorar plantas e decorados.",
      icon: <MousePointer2 size={18} />,
    },
    {
      title: "Insolação Realista",
      desc: "Estudos que mostram exatamente como o sol bate na varanda gourmet em horários específicos.",
      icon: <Sparkles size={18} />,
    },
    {
      title: "Fachadas de Poder",
      desc: "Renders de alto padrão que estabelecem o empreendimento como referência no horizonte urbano.",
      icon: <Building size={18} />,
    },
    {
      title: "Humanização Imobiliária",
      desc: "Foco no detalhamento que humaniza plantas e áreas comuns para facilitar a venda.",
      icon: <Plane size={18} />,
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50 uppercase-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 font-outfit uppercase-none">Visualização para Lançamentos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">O set de ferramentas definitivo para impulsionar suas vendas e elevar o valor percebido do projeto.</p>
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

export default RServicesLaunches;
