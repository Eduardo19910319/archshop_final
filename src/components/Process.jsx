import React from 'react';
import { Target, ClipboardList, PackageCheck } from 'lucide-react';
import Reveal from './Reveal';

const Process = () => {
    const steps = [
        {
            icon: <ClipboardList size={24} />,
            title: "01. Briefing & DNA",
            description: "Extraímos sua essência para entender suas necessidades reais e o potencial do terreno. Foco total em solução prática.",
            delay: 0.1
        },
        {
            icon: <Target size={24} />,
            title: "02. Design Realista",
            description: "Visualização 3D de alta fidelidade antes de qualquer tijolo. Ajustamos cada detalhe para que o projeto caiba no seu bolso.",
            delay: 0.2
        },
        {
            icon: <PackageCheck size={24} />,
            title: "03. Entrega Técnica",
            description: "Documentação executiva completa em BIM para que a obra flua sem erros, sem atrasos e com custo controlado.",
            delay: 0.3
        }
    ];

    return (
        <section className="w-full py-24 bg-gray-50 border-y border-gray-100 relative">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="text-center mb-20">
                    <Reveal direction="up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-archshop-orange/10 border border-archshop-orange/20 text-archshop-orange text-xs font-semibold mb-6 uppercase">
                            Nossa Metodologia
                        </div>
                    </Reveal>
                    <Reveal direction="up" delay={0.1}>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 font-outfit">
                            Nosso Método de <span className="text-gray-400 italic">Arquitetura e Engenharia</span> em 3 Passos.
                        </h2>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    {steps.map((step, idx) => (
                        <Reveal key={idx} direction="up" delay={step.delay}>
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-8 group-hover:bg-archshop-orange transition-all duration-500 shadow-xl shadow-zinc-200">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-outfit uppercase-none">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
