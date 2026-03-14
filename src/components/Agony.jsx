import React from 'react';
import { AlertTriangle, Clock, Banknote, MapPin } from 'lucide-react';
import Reveal from './Reveal';

const Agony = () => {
    const nightmares = [
        {
            icon: <Clock size={24} className="text-red-500" />,
            title: "Obras que nunca terminam",
            description: "A frustração de ver meses passando com o terreno vazio enquanto você paga aluguel ou condomínio sem fim.",
            label: "Tempo"
        },
        {
            icon: <Banknote size={24} className="text-amber-500" />,
            title: "Orçamentos fictícios",
            description: "Projetos lindos que dobram de preço na hora de construir porque não foram pensados para o seu bolso.",
            label: "Custo"
        },
        {
            icon: <AlertTriangle size={24} className="text-orange-500" />,
            title: "Erros de execução",
            description: "Paredes quebradas, canos no lugar errado e desperdício de material por falta de um projeto técnico detalhado.",
            label: "Estresse"
        },
        {
            icon: <MapPin size={24} className="text-blue-500" />,
            title: "Distância e descaso",
            description: "Arquitetos que somem após a entrega do desenho, deixando você sozinho com os problemas da obra.",
            label: "Suporte"
        }
    ];

    return (
        <section className="w-full pt-16 pb-32 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <Reveal direction="up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                            A Realidade do Mercado
                        </div>
                    </Reveal>
                    <Reveal direction="up" delay={0.1}>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6 font-outfit uppercase-none max-w-4xl mx-auto">
                            Por que <span className="text-gray-400 italic">80% das Obras de Alto Padrão</span> Estouram o Orçamento?
                        </h2>
                    </Reveal>
                    <Reveal direction="up" delay={0.2}>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Não deixe seu sonho virar uma fonte inesgotável de prejuízo. Entenda os riscos de seguir pelo caminho tradicional.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {nightmares.map((item, idx) => (
                        <Reveal key={idx} direction="up" delay={0.3 + (idx * 0.1)}>
                            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-archshop-orange/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                        {item.label}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-outfit">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Agony;
