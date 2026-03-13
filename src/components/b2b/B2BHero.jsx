import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Layers } from 'lucide-react';

const B2BHero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-archshop-orange text-xs font-semibold mb-6">
              Engenharia Complementar para Arquitetos
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] mb-6 font-outfit">
              Projetos de <span className="text-archshop-orange">Engenharia Complementar</span> e Compatibilização BIM
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
              Elimine o retrabalho de obra e interferências de pilares. Oferecemos projetos de cálculo estrutural, elétrico e hidráulico em BIM para que sua arquitetura brilhe sem imprevistos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-archshop-orange text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-xl shadow-orange-100">
                Falar com Engenheiro <ArrowRight size={20} />
              </button>
              <button className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:border-orange-200 transition-all">
                <Play size={20} className="text-archshop-orange" /> Ver Fluxo BIM
              </button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> +800 Projetos
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> Sem Interferências
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> Suporte em BIM
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[3rem] bg-gray-100 overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80" 
                alt="Projetos de engenharia complementar e compatibilização BIM para arquitetos - ArchShop"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating UI Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-archshop-orange">
                        <Layers size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Compatibilização</p>
                        <p className="text-lg font-bold text-gray-900">100% Digital em BIM</p>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default B2BHero;
