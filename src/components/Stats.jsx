import React from 'react';
import Reveal from './Reveal';

const Stats = () => {
    const stats = [
        { label: "Projetos de Sucesso", value: "+800" },
        { label: "Economia no Projeto", value: "80%" },
        { label: "Anos no Mercado", value: "10" },
        { label: "Suporte do início ao fim", value: "100%" }
    ];

    return (
        <section className="w-full py-24 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <Reveal direction="up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-archshop-orange/10 border border-archshop-orange/20 text-archshop-orange text-xs font-semibold mb-6 uppercase">
                            Nossos Resultados
                        </div>
                    </Reveal>
                    <Reveal direction="up" delay={0.1}>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 font-outfit uppercase-none">
                            Números que Comprovam <span className="text-gray-400 italic">nossa Excelência.</span>
                        </h2>
                    </Reveal>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {stats.map((stat, idx) => (
                        <Reveal key={idx} direction="up" delay={0.1 * idx}>
                            <div className="flex flex-col items-center text-center">
                                <span className="text-4xl md:text-5xl lg:text-7xl font-semibold text-archshop-orange mb-2 font-outfit">
                                    {stat.value}
                                </span>
                                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest font-outfit">
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
