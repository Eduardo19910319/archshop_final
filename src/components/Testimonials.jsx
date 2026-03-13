import React from 'react';
import { Star } from "lucide-react";
import Reveal from "./Reveal";

const Testimonials = () => {
    const reviews = [
        {
            name: "Mariana Silva",
            role: "Proprietária - Casa Horizonte",
            text: "O que mais me impressionou foi a velocidade. O projeto ficou pronto muito antes do que eu esperava e do jeito que eu sempre sonhei.",
            rating: 5
        },
        {
            name: "Ricardo Mendes",
            role: "Investidor Imobiliário",
            text: "Trabalho com construção há anos e o detalhamento técnico da ArchShop é o melhor que já vi. Evita muitos erros no canteiro de obras.",
            rating: 5
        },
        {
            name: "Ana Beatriz",
            role: "Curadora de Arte",
            text: "Tinha medo de contratar online, mas a reunião de DNA foi incrível. Eles entenderam meu estilo artístico perfeitamente.",
            rating: 5
        }
    ];

    return (
        <section className="w-full py-24 bg-gray-50 border-y border-gray-100" id="depoimentos">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="text-center mb-20">
                    <Reveal direction="up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-archshop-orange/10 border border-archshop-orange/20 text-archshop-orange text-xs font-semibold mb-6 uppercase">
                            Quem Confiou, Aprovou
                        </div>
                    </Reveal>
                    <Reveal direction="up" delay={0.1}>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 font-outfit">
                            Histórias que começaram <br className="hidden md:block" /> com um <span className="text-gray-400 italic">voto de confiança.</span>
                        </h2>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <Reveal key={idx} direction="up" delay={0.2 + (idx * 0.1)}>
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-all duration-500 group">
                                <div className="flex gap-1 mb-6 text-archshop-orange">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow font-light">"{review.text}"</p>
                                <div>
                                    <p className="font-semibold text-gray-900 text-lg font-outfit">{review.name}</p>
                                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{review.role}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
