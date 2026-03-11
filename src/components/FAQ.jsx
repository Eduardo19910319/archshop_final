import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const defaultItems = [
    {
      q: "Qual o prazo médio de entrega?",
      a: "Para projetos pontuais, entregamos em até 48 horas. Projetos maiores dependem da complexidade."
    },
    {
      q: "Vocês trabalham com White Label?",
      a: "Sim, para arquitetos oferecemos selo invisível para que você entregue ao cliente com sua marca."
    }
  ];

  const faqItems = items.length > 0 ? items : defaultItems;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 font-outfit uppercase-none">Dúvidas Frequentes</h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden hover:border-archshop-orange/30 transition-all">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left bg-white transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 font-outfit uppercase-none">{item.q}</span>
                <div className={`p-2 rounded-full transition-all ${activeIndex === index ? 'bg-orange-50 text-archshop-orange' : 'bg-gray-50 text-gray-400'}`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-gray-500 leading-relaxed text-base">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
