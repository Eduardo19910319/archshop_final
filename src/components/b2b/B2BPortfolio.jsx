import React from 'react';
import { ImageIcon, Layers } from "lucide-react";
import { Reveal } from "../Reveal";

const B2BPortfolio = () => {
    return (
        <section className="w-full py-20 md:py-32 bg-gray-50" id="galeria">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
                    <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
                        <Reveal direction="up" delay={0.1}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-4 tracking-tight leading-[1.1]">
                                Nosso <span className="text-gray-400 italic font-light">estúdio.</span>
                            </h2>
                        </Reveal>
                        <Reveal direction="up" delay={0.2}>
                            <p className="text-gray-500 text-lg md:text-xl px-4 lg:px-0 font-light">Do conceito autoral à viabilidade técnica de execução.</p>
                        </Reveal>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-2xl sm:rounded-full shadow-sm border border-gray-100 mx-auto lg:mx-0 w-full sm:w-auto">
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-archshop-orange text-white rounded-xl sm:rounded-full font-medium transition-all shadow-md shadow-orange-500/20 w-full sm:w-auto text-sm sm:text-base">
                            <ImageIcon className="w-4 h-4" /> Render 3D
                        </button>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-900 rounded-xl sm:rounded-full font-medium transition-all hover:bg-gray-50 w-full sm:w-auto text-sm sm:text-base">
                            <Layers className="w-4 h-4" /> Planta Técnica
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <Reveal direction="up" delay={0.3}>
                        <div className="group relative overflow-hidden h-[350px] sm:h-[400px] md:h-[500px] rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] bg-white flex items-center justify-center cursor-pointer">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-[2s] ease-out" title="projeto-casa-contemporanea-personalizado-archshop"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute inset-0 bg-orange-900/30 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="absolute bottom-10 left-10 right-10 transform translate-y-4 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs tracking-widest uppercase font-medium rounded-full mb-4 border border-white/30">Lançamento</span>
                                <h4 className="text-white text-3xl font-medium mb-2 drop-shadow-md">Casa Horizonte</h4>
                                <p className="text-gray-300 text-lg font-light">Residência Térrea em Condomínio Fechado</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal direction="up" delay={0.4}>
                        <div className="group relative overflow-hidden h-[350px] sm:h-[400px] md:h-[500px] rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] bg-white flex items-center justify-center cursor-pointer">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-[2s] ease-out" title="projeto-fachada-moderna-archshop"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            <div className="absolute inset-0 bg-orange-900/30 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="absolute bottom-10 left-10 right-10 transform translate-y-4 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs tracking-widest uppercase font-medium rounded-full mb-4 border border-white/30">Conceito</span>
                                <h4 className="text-white text-3xl font-medium mb-2 drop-shadow-md">Sobrado Brisa</h4>
                                <p className="text-gray-300 text-lg font-light">Conceito Aberto e Iluminação Natural</p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal direction="up" delay={0.5}>
                    <p className="text-center text-gray-400 text-sm mt-12 mb-4 font-light">Imagens ilustrativas de projetos entregues. Consulte o portfolio completo com os arquitetos.</p>
                </Reveal>
            </div>
        </section>
    );
}

export default B2BPortfolio;
