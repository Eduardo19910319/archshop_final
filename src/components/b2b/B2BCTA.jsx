import React from 'react';
import { ArrowRight } from "lucide-react";

const B2BCTA = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-orange-50 relative overflow-hidden flex justify-center px-4 sm:px-6" id="orcamento">
            {/* Decorative background blobs */}
            <div className="absolute top-1/2 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-orange-200/50 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 -mt-10 md:-mt-20"></div>
            <div className="absolute top-1/2 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-white rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 mt-16 md:mt-32"></div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="bg-white/80 backdrop-blur-xl p-8 sm:p-12 md:p-20 text-center flex flex-col items-center border-[2px] md:border-[3px] border-white rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-orange-100">

                    <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-orange-50 rounded-bl-full opacity-60"></div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-4 md:mb-6 tracking-tight relative z-10">
                        Sua autoria protegida por <span className="font-bold text-archshop-orange">precisão técnica e segurança</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 md:mb-12 max-w-2xl mx-auto relative z-10">
                        Terceirize a engenharia com quem fala a língua do arquiteto. Projetos compatibilizados em BIM para obras sem imprevistos.
                    </p>

                    <a
                        href="https://wa.me/5511000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-archshop-orange hover:bg-orange-600 text-white rounded-xl sm:rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-[1.03] shadow-xl shadow-orange-500/30 relative z-10"
                    >
                        Falar com um Arquiteto
                        <span className="bg-white/20 p-1 md:p-1.5 rounded-full ml-1 md:ml-2">
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </span>
                    </a>
                    <p className="text-orange-700/60 text-xs md:text-sm mt-6 md:mt-8 relative z-10 font-medium px-4">Atendimento humanizado via WhatsApp. Sem robôs chatos.</p>
                </div>
            </div>
        </section>
    );
}

export default B2BCTA;
