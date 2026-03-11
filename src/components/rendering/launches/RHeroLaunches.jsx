import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const RHeroLaunches = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-archshop-orange/10 border border-archshop-orange/20 text-archshop-orange text-xs font-semibold mb-6">
              Render de Alto Padrão para Lançamentos
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] mb-6 font-outfit">
              Acelere seu <span className="text-archshop-orange">VGV</span> com Visualização Estratégica
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
              Vendemos o empreendimento antes do primeiro tijolo. Imagens fotorrealistas e cinematografia de arquitetura que confundem o olho do comprador e geram desejo imediato.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-archshop-orange text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-xl shadow-orange-100">
                Solicitar Proposta <ArrowRight size={20} />
              </button>
              <button className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:border-archshop-orange/30 transition-all">
                <Play size={20} className="text-archshop-orange" /> Showreel 2024
              </button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" /> VGV Acelerado
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-archshop-orange" /> Qualidade Cinematográfica
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gray-100 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                alt="Luxury Real Estate Render"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RHeroLaunches;
