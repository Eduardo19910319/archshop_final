import React from 'react';
import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

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
        <section className="w-full py-20 md:py-32 bg-gray-50" id="depoimentos">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="text-center mb-16 md:mb-24">
                    <Reveal direction="up" delay={0.1}>
                        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 tracking-tight leading-tight">
                            Quem confiou,<br /> <span className="text-gray-400 italic font-light font-serif">aprovou.</span>
                        </h2>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                    {reviews.map((review, idx) => (
                        <Reveal key={idx} direction="up" delay={0.2 + (idx * 0.1)}>
                            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-500">
                                <div className="flex gap-1 mb-6 text-archshop-orange">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow italic font-light">"{review.text}"</p>
                                <div>
                                    <p className="font-bold text-gray-900 text-lg">{review.name}</p>
                                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{review.role}</p>
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
