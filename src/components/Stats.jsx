import React from 'react';
import Reveal from './Reveal';

const Stats = () => {
    const stats = [
        { label: "Projetos Entregues", value: "800+" },
        { label: "Municípios Atendidos", value: "120+" },
        { label: "Economia em Obra", value: "20%" },
        { label: "Anos de Mercado", value: "10+" }
    ];

    return (
        <section className="w-full py-24 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
                    {stats.map((stat, idx) => (
                        <Reveal key={idx} direction="up" delay={0.1 * idx}>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold text-archshop-orange mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-zinc-500 text-sm md:text-base font-medium uppercase tracking-widest font-outfit">
                                    {stat.label}
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
