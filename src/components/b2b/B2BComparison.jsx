import React from 'react';
import { Check, X, Shield, Clock, MousePointer2 } from 'lucide-react';
import { Reveal } from '../Reveal';

const B2BComparison = () => {
    const features = [
        { name: "Compatibilização Técnica", b2b: true, trad: false },
        { name: "Modelagem Completa em BIM", b2b: true, trad: false },
        { name: "Suporte Direto via Nuvem", b2b: true, trad: false },
        { name: "Foco em Vãos Livres Estéticos", b2b: true, trad: "Limitado" },
        { name: "Prazo de Entrega Garantido", b2b: true, trad: "Variável" },
        { name: "Entrega White Label", b2b: true, trad: false }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-outfit mb-4">
                            ArchShop <span className="text-archshop-orange">vs</span> Engenharia Tradicional
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Por que mais de 800 projetistas preferem o nosso fluxo de trabalho.
                        </p>
                    </div>
                </Reveal>

                <div className="overflow-x-auto rounded-[2rem] border border-gray-100 shadow-xl bg-white">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-900 text-white">
                                <th className="p-8 font-outfit text-xl">Recursos</th>
                                <th className="p-8 font-outfit text-xl text-center bg-archshop-orange">Time ArchShop</th>
                                <th className="p-8 font-outfit text-xl text-center">Tradicional</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <tr key={index} className="border-b border-gray-50 last:border-none">
                                    <td className="p-8 text-gray-700 font-bold">{feature.name}</td>
                                    <td className="p-8 text-center bg-orange-50/30">
                                        <div className="flex justify-center">
                                            <Check className="text-green-500 bg-green-100 rounded-full p-1" size={24} />
                                        </div>
                                    </td>
                                    <td className="p-8 text-center">
                                        <div className="flex justify-center">
                                            {typeof feature.trad === "boolean" ? (
                                                feature.trad ? <Check className="text-green-500" size={24} /> : <X className="text-gray-300" size={24} />
                                            ) : (
                                                <span className="text-sm font-semibold text-gray-400 uppercase tracking-tighter">{feature.trad}</span>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <Reveal delay={0.3}>
                    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8 rounded-3xl border border-dashed border-orange-200">
                        <div className="flex items-center gap-4">
                            <Shield className="text-archshop-orange" size={24} />
                            <span className="text-sm text-gray-600 font-medium">Cobertura Total ART</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Clock className="text-archshop-orange" size={24} />
                            <span className="text-sm text-gray-600 font-medium">Time 100% On-line</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <MousePointer2 className="text-archshop-orange" size={24} />
                            <span className="text-sm text-gray-600 font-medium">Revisões Ilimitadas (BIM)</span>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default B2BComparison;
