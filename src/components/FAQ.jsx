import React, { useState } from 'react';
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQ = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const defaultQuestions = [
        {
            q: "Quanto tempo demora para receber o projeto?",
            a: "Nosso prazo médio para a primeira entrega (Estudo Preliminar) é de 15 a 20 dias úteis após a reunião de DNA. A velocidade é um de nossos pilares."
        },
        {
            q: "Vocês atendem em qualquer lugar do Brasil?",
            a: "Sim! Somos especialistas em atendimento 100% online. Já entregamos mais de 800 projetos em todos os estados brasileiros e em outros países."
        },
        {
            q: "Vou receber a planta para a obra ou só imagens?",
            a: "Você recebe o Pacote Executivo Completo: plantas técnicas, detalhamento elétrico/hidráulico, especificações de materiais e as imagens 3D fotorrealistas."
        },
        {
            q: "Como sei que o projeto vai caber no meu orçamento?",
            a: "Nossa metodologia inclui uma análise de pré-viabilidade. Não desenhamos 'castelos de areia' que não podem ser construídos pelo valor que você pretende investir."
        }
    ];

    const questions = items || defaultQuestions;

    return (
        <section className="w-full py-20 md:py-32 bg-white" id="faq">
            <div className="container mx-auto px-4 sm:px-6 max-w-3xl">

                <div className="text-center mb-16">
                    <Reveal direction="up" delay={0.1}>
                        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tight">Perguntas comuns.</h2>
                    </Reveal>
                    <Reveal direction="up" delay={0.2}>
                        <p className="text-gray-500 text-lg font-light">Tudo o que você precisa saber para começar agora.</p>
                    </Reveal>
                </div>

                <div className="space-y-4">
                    {questions.map((item, idx) => (
                        <Reveal key={idx} direction="up" delay={0.1 + (idx * 0.05)}>
                            <div
                                className={`group rounded-[2rem] border transition-all duration-300 ${openIndex === idx ? 'border-orange-200 bg-orange-50/30' : 'border-gray-100 bg-gray-50/50 hover:bg-gray-50'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left"
                                >
                                    <span className={`text-lg sm:text-xl font-medium transition-colors ${openIndex === idx ? 'text-gray-900' : 'text-gray-700'}`}>
                                        {item.q}
                                    </span>
                                    <div className={`p-2 rounded-full transition-all ${openIndex === idx ? 'bg-archshop-orange text-white rotate-0' : 'bg-white text-gray-400 rotate-90'}`}>
                                        {openIndex === idx ? <Minus className="w-4 h-4 sm:w-5 sm:h-5" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5" />}
                                    </div>
                                </button>

                                {openIndex === idx && (
                                    <div className="px-6 sm:px-8 pb-8 transition-all duration-300">
                                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
                                            {item.a}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FAQ;
