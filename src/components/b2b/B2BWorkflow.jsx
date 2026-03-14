import React from 'react';
import { Dna, PenTool, FileDown } from "lucide-react";
import { Reveal } from "../Reveal";

const B2BWorkflow = () => {
    const steps = [
        {
            icon: <Dna className="w-10 h-10 text-gray-900" />,
            title: "Passo 1:",
            desc: "DNA do Cliente:\nReunião focada para extrair o que você gosta (sem termos técnicos chatos)."
        },
        {
            icon: <PenTool className="w-10 h-10 text-gray-900" />,
            title: "Passo 2:",
            desc: "Design Realista:\nCriamos algo incrível que cabe no seu gosto, mas sem acabar com seu bolso."
        },
        {
            icon: <FileDown className="w-10 h-10 text-gray-900" />,
            title: "Passo 3:",
            desc: "Entrega Executiva:\nDocumentação completa para a obra começar ontem."
        }
    ];

    return (
        <section className="w-full py-20 md:py-32 bg-gray-50/50 relative">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

                <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
                    <Reveal direction="up" delay={0.1}>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 font-outfit uppercase-none">
                            Dúvidas Frequentes <span className="text-gray-400 italic">sobre Engenharia e BIM para Arquitetos</span>
                        </h2>
                    </Reveal>
                    <Reveal direction="up" delay={0.2}>
                        <p className="text-gray-600 text-lg mt-6">
                            Como transformamos sua concepção arquitetônica em um projeto técnico de alta precisão.
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-stretch">
                    {steps.map((step, idx) => (
                        <Reveal key={idx} direction="up" delay={0.2 + (idx * 0.1)}>
                            <div
                                className="group h-full flex flex-col items-center text-center bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 hover:border-orange-200 cursor-default relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="mb-6 w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors duration-500 relative z-10 shadow-sm border border-gray-100">
                                    {step.icon}
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 relative z-10">{step.title}</h3>

                                <p className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line relative z-10">
                                    {step.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default B2BWorkflow;
