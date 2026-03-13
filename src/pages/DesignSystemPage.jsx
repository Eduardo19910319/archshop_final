import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Check, Info } from 'lucide-react';
import Reveal from '../components/Reveal';

const DesignSystemPage = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <Reveal direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] mb-6 font-outfit uppercase-none">
              ArchShop <span className="text-archshop-orange">Design System</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Este guia estabelece os padrões visuais recuperados das páginas oficiais da ArchShop para garantir consistência em toda a plataforma.
            </p>
          </Reveal>
        </header>

        {/* Typography Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-10 font-outfit border-b border-gray-100 pb-4">Tipografia</h2>
          
          <div className="space-y-12">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Heading 1 (Hero)</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] font-outfit">
                O Futuro da Arquitetura é <span className="text-archshop-orange">Digital</span>
              </h1>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Heading 2 (Seção)</p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 font-outfit">
                Projetos que Encantam e Vendem
              </h2>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Heading 3 (Componente)</p>
              <h3 className="text-xl font-semibold text-gray-900 font-outfit uppercase-none">
                Modelagem 3D Avançada
              </h3>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Body Text (Parágrafo)</p>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                A ArchShop utiliza tecnologia de ponta para transformar plantas baixas em experiências imersivas. Nosso objetivo é reduzir o tempo de venda do seu projeto através de imagens que contam histórias.
              </p>
            </div>
            
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Body Small / Caption</p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                * Todos os projetos são compatibilizados com as normas técnicas brasileiras vigentes.
              </p>
            </div>
          </div>
        </section>

        {/* UI Components Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-10 font-outfit border-b border-gray-100 pb-4">Componentes de Interface</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Pills & Labels */}
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Pills (Badges)</p>
                <div className="flex flex-wrap gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-archshop-orange/10 border border-archshop-orange/20 text-archshop-orange text-xs font-semibold">
                    Lançamento Exclusivo
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase">
                    BIM Nível 3
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-600 text-xs font-semibold uppercase">
                    Sucesso
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Status Labels</p>
                <div className="flex gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-2 py-1 rounded">
                    Operação
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-archshop-orange px-2 py-1 rounded">
                    Urgente
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Botões</p>
              <div className="space-y-4">
                <button className="w-full sm:w-auto bg-archshop-orange text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-xl shadow-orange-100">
                  Call to Action <ArrowRight size={20} />
                </button>
                <button className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:border-archshop-orange/30 transition-all">
                  Botão Secundário
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-10 font-outfit border-b border-gray-100 pb-4">Cards & Containers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 text-archshop-orange">
                <Star size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-outfit">Título do Card</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Este é o estilo de card padrão para serviços e diferenciais, com cantos arredondados suavizados e sombra sutil.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-archshop-orange">
                <Info size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 font-outfit">Card Night Mode</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Usado para destacar seções de "Agonia" ou "Problema", criando contraste com o restante da página clara.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-orange-50/30 border border-archshop-orange/10">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 text-archshop-orange shadow-sm">
                <Check size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-outfit">Card de Destaque</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fundo levemente alaranjado para destacar soluções ou benefícios exclusivos no meio de uma grade.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignSystemPage;
