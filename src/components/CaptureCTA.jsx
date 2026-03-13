import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const CaptureCTA = () => {
    return (
        <section className="w-full py-24 bg-zinc-900 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-archshop-orange"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-archshop-orange/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center relative z-10">
                <Reveal direction="up">
                    <h2 className="text-3xl md:text-5xl font-outfit font-medium text-white mb-8 leading-tight uppercase">
                        Pronto para transformar seu terreno no seu <span className="text-archshop-orange italic">novo endereço?</span>
                    </h2>
                </Reveal>
                
                <Reveal direction="up" delay={0.1}>
                    <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto font-light">
                        Deixe seu e-mail abaixo e receba um guia exclusivo sobre como planejar sua obra sem estresse e com previsibilidade financeira.
                    </p>
                </Reveal>

                <Reveal direction="up" delay={0.2}>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative flex-grow">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
                            <input 
                                type="email" 
                                placeholder="Seu melhor e-mail" 
                                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white focus:outline-none focus:border-archshop-orange transition-colors placeholder:text-zinc-600"
                            />
                        </div>
                        <button className="bg-archshop-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 group whitespace-nowrap">
                            QUERO COMEÇAR <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </Reveal>
                
                <Reveal direction="up" delay={0.3}>
                    <p className="mt-8 text-zinc-500 text-xs uppercase tracking-widest font-medium">
                        Atendimento imediato via <a href="#" className="text-white hover:text-archshop-orange transition-colors underline underline-offset-4">WhatsApp</a>
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default CaptureCTA;
