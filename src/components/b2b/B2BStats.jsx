import React from 'react';
import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";

const B2BStats = () => {
    return (
        <section className="w-full py-20 md:py-28 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">

                <Reveal direction="up" delay={0.1}>
                    <p className="text-archshop-orange font-medium text-sm md:text-base mb-4 tracking-widest uppercase">Arquitetura do Brasil para o Mundo</p>
                </Reveal>

                <Reveal direction="up" delay={0.2}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-8 tracking-tight leading-[1.1]">
                        Nossa autoridade nos leva<br /> <span className="text-gray-400 italic font-light">mais longe.</span>
                    </h2>
                </Reveal>

                <Reveal direction="up" delay={0.3}>
                    <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto mb-16 font-light">
                        São mais de 800 projetos de arquitetura desenvolvidos com rigor técnico, qualidade estética e velocidade imprevisível.
                    </p>
                </Reveal>

                <Reveal direction="up" delay={0.4}>
                    <div className="w-full max-w-2xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center mb-12 relative overflow-hidden group">

                        <div className="absolute inset-0 bg-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="w-full relative h-[300px] md:h-[400px] bg-center bg-contain bg-no-repeat mb-8 transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Brazil_map_empty.svg/1024px-Brazil_map_empty.svg.png')", opacity: 0.15 }}>
                            <div className="absolute top-[60%] left-[70%] w-3 h-3 bg-archshop-orange rounded-full animate-ping"></div>
                            <div className="absolute top-[40%] left-[60%] w-2 h-2 bg-archshop-orange rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute top-[75%] left-[50%] w-4 h-4 bg-archshop-orange rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute top-[50%] left-[80%] w-2 h-2 bg-archshop-orange rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                        </div>

                        <p className="text-gray-800 text-xl font-medium text-center relative z-10">
                            <span className="text-archshop-orange font-bold text-3xl block mb-1">Mais de 100</span> MUNICÍPIOS ATENDIDOS
                        </p>
                    </div>
                </Reveal>

                <Reveal direction="up" delay={0.5}>
                    <button className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-gray-900 hover:bg-black text-white rounded-full font-medium transition-all shadow-xl shadow-gray-900/20 text-lg group">
                        Explorar Projetos
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </Reveal>

            </div>
        </section>
    );
}

export default B2BStats;
