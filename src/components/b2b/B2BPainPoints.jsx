import React from 'react';
import { AlertCircle, TrendingDown, Clock, ShieldAlert } from 'lucide-react';
import { Reveal } from '../Reveal';

const B2BPainPoints = () => {
    const pains = [
        {
            icon: <TrendingDown className="text-archshop-orange" size={32} />,
            title: "Desperdício de Material",
            description: "Projetos sem compatibilização técnica geram até 30% de desperdício em obra. O BIM resolve isso no digital."
        },
        {
            icon: <AlertCircle className="text-archshop-orange" size={32} />,
            title: "Interferências Estruturais",
            description: "Aquele pilar que aparece no meio da sala? Com nossa compatibilização em 3D, eliminamos erros de projeto antes da execução."
        },
        {
            icon: <Clock className="text-archshop-orange" size={32} />,
            title: "Atrasos no Cronograma",
            description: "Dúvidas técnicas param a obra. Nossos detalhamentos executivos são claros e direto ao ponto para evitar paradas."
        },
        {
            icon: <ShieldAlert className="text-archshop-orange" size={32} />,
            title: "Retrabalho de Projeto",
            description: "Cansado de ter que refazer sua arquitetura por limitações da engenharia tradicional? Nós nos adaptamos ao seu design."
        }
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-outfit mb-4">
                            Por que a Engenharia Comum <br className="hidden md:block" />
                            <span className="text-archshop-orange">Prejudica sua Arquitetura?</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
                            Não deixe que falhas técnicas ofusquem o brilho do seu projeto autoral.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pains.map((pain, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 h-full group">
                                <div className="mb-6 p-4 bg-orange-50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                                    {pain.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-outfit">
                                    {pain.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {pain.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default B2BPainPoints;
