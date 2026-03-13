import React from 'react';
import { Target, ClipboardList, PackageCheck } from 'lucide-react';
import Reveal from './Reveal';

const Process = () => {
    const steps = [
        {
            icon: <ClipboardList size={32} />,
            title: "01. Briefing & Estudo",
            description: "Mergulhamos no seu estilo de vida para entender suas necessidades reais e o potencial do seu terreno. Sem termos técnicos, focado em solução.",
            delay: 0.1
        },
        {
            icon: <Target size={32} />,
            title: "02. Design & Realismo",
            description: "Você visualiza sua casa em 3D de alta fidelidade antes de comprar um único tijolo. Ajustamos cada detalhe para que o projeto seja perfeito.",
            delay: 0.2
        },
        {
            icon: <PackageCheck size={32} />,
            title: "03. Entrega do Executivo",
            description: "Documentação técnica completa e compatibilizada para que sua obra flua sem erros, sem atrasos e dentro do orçamento planejado.",
            delay: 0.3
        }
    ];

    return (
        <section className="w-full py-24 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="text-center mb-16 md:mb-24">
                    <Reveal direction="up">
                        <span className="text-archshop-orange font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Metodologia ArchShop</span>
                    </Reveal>
                    <Reveal direction="up" delay={0.1}>
                        <h2 className="text-3xl md:text-5xl font-outfit font-medium text-zinc-900 leading-tight uppercase">
                            O caminho mais curto entre seu sonho<br className="hidden md:block" /> e as <span className="text-zinc-400 italic">chaves na mão.</span>
                        </h2>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                    {/* Connection Line Desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-zinc-200 -z-10 -translate-y-[100px]"></div>
                    
                    {steps.map((step, idx) => (
                        <Reveal key={idx} direction="up" delay={step.delay}>
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 rounded-full bg-zinc-900 text-white flex items-center justify-center mb-8 group-hover:bg-archshop-orange transition-colors duration-500 shadow-xl shadow-zinc-900/10">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-4 font-outfit uppercase tracking-tight">{step.title}</h3>
                                <p className="text-zinc-500 leading-relaxed max-w-xs mx-auto">
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
