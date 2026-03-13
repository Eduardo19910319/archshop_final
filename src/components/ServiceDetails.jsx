import React from 'react';
import { PencilRuler, Video, Layout, Settings2, FileCheck, Layers } from 'lucide-react';
import Reveal from './Reveal';

const ServiceDetails = () => {
    const deliverables = [
        {
            icon: <PencilRuler size={24} />,
            title: "Arquitetônico Completo",
            desc: "Plantas, cortes e fachadas para aprovação e execução. O 'DNA' técnico da sua residência."
        },
        {
            icon: <Video size={24} />,
            title: "Tour Virtual & Renders",
            desc: "Imagens 3D ultra-realistas que permitem antecipar cada acabamento antes da obra começar."
        },
        {
            icon: <Layout size={24} />,
            title: "Interiores & Iluminação",
            desc: "Detalhamento de marcenaria, pontos de luz e escolha de revestimentos com curadoria ArchShop."
        },
        {
            icon: <Settings2 size={24} />,
            title: "Executivo de Obra",
            desc: "O guia definitivo para o mestre de obras. Cada medida, cada detalhe construtivo mapeado."
        },
        {
            icon: <Layers size={24} />,
            title: "Compatibilização Estrutural",
            desc: "Integração total entre arquitetura e engenharia para evitar conflitos de pilares e tubulações."
        },
        {
            icon: <FileCheck size={24} />,
            title: "Memorial Descritivo",
            desc: "Lista precisa de todos os materiais e especificações técnicas para cotação rápida com fornecedores."
        }
    ];

    return (
        <section className="w-full py-24 bg-zinc-50 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl text-left">
                        <Reveal direction="up">
                            <span className="text-archshop-orange font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Entregáveis de Alto Padrão</span>
                        </Reveal>
                        <Reveal direction="up" delay={0.1}>
                            <h2 className="text-3xl md:text-5xl font-outfit font-medium text-zinc-900 leading-tight uppercase">
                                Um pacote completo para você não se <span className="text-zinc-400 italic">preocupar com nada.</span>
                            </h2>
                        </Reveal>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {deliverables.map((item, idx) => (
                        <Reveal key={idx} direction="up" delay={0.2 + (idx * 0.05)}>
                            <div className="bg-white border border-zinc-100 p-8 rounded-[2rem] hover:border-archshop-orange/30 transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] group">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-archshop-orange group-hover:text-white transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-zinc-900 mb-3 font-outfit uppercase">{item.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">
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
