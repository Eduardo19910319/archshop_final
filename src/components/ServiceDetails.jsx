import React from 'react';
import { PencilRuler, Video, Layout, Settings2, FileCheck, Layers } from 'lucide-react';
import Reveal from './Reveal';

const ServiceDetails = () => {
    const deliverables = [
        {
            icon: <PencilRuler size={24} />,
            title: "Projetos em BIM",
            desc: "Plantas, cortes e fachadas compatibilizadas em tempo real. O DNA técnico da sua residência."
        },
        {
            icon: <Video size={24} />,
            title: "Tour Virtual & Renders",
            desc: "Imagens 3D ultra-realistas que permitem antecipar cada detalhe antes da obra começar."
        },
        {
            icon: <Layout size={24} />,
            title: "Interiores & Iluminação",
            desc: "Detalhamento de marcenaria, pontos de luz e escolha de revestimentos com curadoria técnica."
        },
        {
            icon: <Settings2 size={24} />,
            title: "Executivo de Obra",
            desc: "O guia definitivo para execução. Cada medida e cada detalhe construtivo mapeado."
        },
        {
            icon: <Layers size={24} />,
            title: "Compatibilização Total",
            desc: "Integração total entre arquitetura e engenharias para evitar conflitos de tubulações e pilares."
        },
        {
            icon: <FileCheck size={24} />,
            title: "Memorial de Materiais",
            desc: "Lista precisa de especificações técnicas para cotação rápida e sem erros com fornecedores."
        }
    ];

    return (
        <section className="w-full py-24 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl text-left">
                        <Reveal direction="up">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-archshop-orange/10 border border-archshop-orange/20 text-archshop-orange text-xs font-semibold mb-6 uppercase">
                              Entregáveis Premium
                          </div>
                        </Reveal>
                        <Reveal direction="up" delay={0.1}>
                            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 font-outfit uppercase-none">
                                Tudo o que está incluso no seu <span className="text-gray-400 italic">Projeto de Casa Completo.</span>
                            </h2>
                        </Reveal>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {deliverables.map((item, idx) => (
                        <Reveal key={idx} direction="up" delay={0.2 + (idx * 0.05)}>
                            <div className="bg-white border border-gray-100 p-8 rounded-2xl hover:border-archshop-orange/30 transition-all duration-300 hover:shadow-md group">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 mb-6 group-hover:bg-archshop-orange/10 group-hover:text-archshop-orange transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-outfit">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
