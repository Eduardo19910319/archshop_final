import React from 'react';
import { Mail, ArrowRight, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';

const CaptureCTA = () => {
    return (
        <section className="w-full pt-20 pb-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="bg-zinc-900 border border-white/5 rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden text-center shadow-2xl flex flex-col items-center">
                    {/* Background Detail - Enhanced Gradient */}
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-archshop-orange/20 via-transparent to-transparent blur-[120px] pointer-events-none opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-white/5 to-transparent blur-[100px] pointer-events-none"></div>
                    
                    <Reveal direction="up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-widest mb-6">
                            Pronto para o próximo passo?
                        </div>
                    </Reveal>
                    
                    <Reveal direction="up" delay={0.1}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight font-outfit uppercase-none max-w-4xl mx-auto">
                            Transforme seu <span className="text-archshop-orange italic">Terreno em uma Obra de Arte</span> com Previsibilidade Total
                        </h2>
                    </Reveal>
                    
                    <Reveal direction="up" delay={0.2}>
                        <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                            Receba nosso guia exclusivo sobre como planejar sua obra sem estresse e com <strong className="font-semibold text-white">previsibilidade financeira total.</strong>
                        </p>
                    </Reveal>
 
                    <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-xl mx-auto">
                        <div className="w-full mb-6">
                            <div className="relative group max-w-sm mx-auto">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600 w-4 h-4 group-focus-within:text-archshop-orange transition-colors" />
                                <input 
                                    type="email" 
                                    placeholder="Seu melhor e-mail" 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-archshop-orange transition-all placeholder:text-zinc-600 font-medium text-base text-center md:text-left shadow-inner shadow-black/20"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button className="w-full sm:w-auto min-w-[200px] bg-archshop-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-xl shadow-orange-950/20 text-sm md:text-base uppercase tracking-wider">
                                    Quero meu Guia <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="w-full sm:w-auto min-w-[200px] bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 border border-white/10 text-sm md:text-base uppercase tracking-wider">
                                    Falar com Especialista
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <Reveal direction="up" delay={0.5}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 border-t border-white/5">
                           <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Atendimento Comercial</p>
                           <a href="#" className="flex items-center gap-2 text-white hover:text-archshop-orange transition-colors font-semibold">
                               <MessageCircle size={18} className="text-green-500" /> WhatsApp Oficial
                           </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default CaptureCTA;
