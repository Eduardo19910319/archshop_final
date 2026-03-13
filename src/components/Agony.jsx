import React from 'react';
import { AlertTriangle, Clock, Banknote, MapPin } from 'lucide-react';
import Reveal from './Reveal';

const Agony = () => {
    const nightmares = [
        {
            icon: <Clock size={32} className="text-archshop-orange" />,
            title: "Obras que nunca terminam",
            description: "A frustração de ver meses passando com o terreno vazio enquanto você paga aluguel ou condomínio sem fim."
        },
        {
            icon: <Banknote size={32} className="text-archshop-orange" />,
            title: "Orçamentos fictícios",
            description: "Projetos lindos que dobram de preço na hora de construir porque não foram pensados para o seu bolso."
        },
        {
            icon: <AlertTriangle size={32} className="text-archshop-orange" />,
            title: "Erros de execução",
            description: "Paredes quebradas, canos no lugar errado e desperdício de material por falta de um projeto técnico detalhado."
        },
        {
            icon: <MapPin size={32} className="text-archshop-orange" />,
            title: "Distância e descaso",
            description: "Arquitetos que somem após a entrega do desenho, deixando você sozinho com os problemas da obra."
        }
    ];

    return (
        <section className="w-full py-24 bg-zinc-900 border-y border-white/5 relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F58249]/5 blur-[120px] pointer-events-none"></div>
            
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="max-w-3xl mb-16">
                    <Reveal direction="up">
                        <span className="text-archshop-orange font-bold tracking-[0.2em] uppercase text-xs mb-4 block">A Realidade do Mercado</span>
                    </Reveal>
                    <Reveal direction="up" delay={0.1}>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-outfit font-medium text-white leading-tight mb-8 uppercase">
                            Construir uma casa não deveria ser um <span className="text-zinc-500 italic">pesadelo financeiro.</span>
                        </h2>
                    </Reveal>
                    <Reveal direction="up" delay={0.2}>
                        <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl">
                            A maioria dos projetos falha antes mesmo do primeiro tijolo ser assentado. Sem previsibilidade, seu sonho vira uma fonte inesgotável de estresse e prejuízo.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {nightmares.map((item, idx) => (
                        <Reveal key={idx} direction="up" delay={0.3 + (idx * 0.1)}>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-500 group h-full">
                                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-archshop-orange/20 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 font-outfit uppercase tracking-tight">{item.title}</h3>
                                <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed">
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
