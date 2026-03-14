import React from 'react';
import { Mail, ArrowRight, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';

const CaptureCTA = () => {
    return (
        <section className="w-full pt-24 pb-48 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                <div className="bg-zinc-900 border border-white/5 rounded-[2.5rem] p-8 md:p-16 lg:p-24 relative overflow-hidden text-center shadow-2xl">
                    {/* Background Detail - Enhanced Gradient */}
                    <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-archshop-orange/20 via-transparent to-transparent blur-[120px] pointer-events-none opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-white/5 to-transparent blur-[100px] pointer-events-none"></div>
                    
                    <Reveal direction="up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-widest mb-8">
                            Pronto para o próximo passo?
                        </div>
                    </Reveal>
                    
                    <Reveal direction="up" delay={0.1}>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white mb-10 leading-[1.1] font-outfit uppercase-none max-w-5xl mx-auto">
                            Inicie o seu <span className="text-archshop-orange italic">Projeto dos Sonhos</span> agora mesmo.
                        </h2>
                    </Reveal>
                    
                    <Reveal direction="up" delay={0.2}>
                        <p className="text-zinc-400 text-xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">
                            Receba nosso guia exclusivo sobre como planejar sua obra sem estresse e com <strong className="font-semibold text-white">previsibilidade financeira total.</strong>
                        </p>
                    </Reveal>
 
                    <div className="flex flex-col items-center gap-8 mb-16 relative z-10">
                        <Reveal direction="up" delay={0.3} className="w-full max-w-md">
                            <div className="relative group">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 w-5 h-5 group-focus-within:text-archshop-orange transition-colors" />
                                <input 
                                    type="email" 
                                    placeholder="Seu melhor e-mail" 
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-14 pr-6 text-white focus:outline-none focus:border-archshop-orange transition-all placeholder:text-zinc-600 font-medium text-lg shadow-inner shadow-black/20"
                                />
                            </div>
                        </Reveal>
                        <Reveal direction="up" delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="w-full sm:w-auto bg-archshop-orange hover:bg-orange-600 text-white font-bold py-6 px-12 rounded-2xl transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-orange-950/40 text-lg uppercase tracking-wider">
                                    Quero meu Guia <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-bold py-6 px-12 rounded-2xl transition-all flex items-center justify-center gap-3 border border-white/10 text-lg uppercase tracking-wider">
                                    Falar com Especialista
                                </button>
                            </div>
                        </Reveal>
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
