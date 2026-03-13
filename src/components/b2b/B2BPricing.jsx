import React from 'react';
import { ArrowRight, Check, Zap, Building2, Rocket } from 'lucide-react';
import { Reveal } from '../Reveal';

const B2BPricing = () => {
    const plans = [
        {
            icon: <Building2 className="text-gray-400" size={24} />,
            name: "Parceria Avulsa",
            description: "Para arquitetos que precisam de engenharia sob demanda em projetos específicos.",
            features: [
                "Compatibilização em BIM",
                "ART de Execução",
                "Suporte via WhatsApp",
                "Detalhamento Completo",
                "Foco em Vãos Livres"
            ],
            cta: "Solicitar Orçamento",
            featured: false
        },
        {
            icon: <Rocket className="text-white" size={24} />,
            name: "Escritórios de Escala",
            description: "Para escritórios com mais de 3 projetos simultâneos. Braço técnico fixo.",
            features: [
                "Prioridade na Fila",
                "Gestor de Sucesso BIM",
                "Modelagem White Label",
                "Integração em Nuvem (CDE)",
                "Consultoria de Viabilidade",
                "Descontos Progressivos"
            ],
            cta: "Falar com Consultor",
            featured: true
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-outfit mb-4">
                            Transparência <span className="text-archshop-orange">Sem Surpresas</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
                            Modelos de parceria flexíveis para elevar o nível técnico do seu escritório.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className={`p-10 rounded-[3rem] h-full flex flex-col transition-all duration-300 ${
                                plan.featured 
                                ? 'bg-gray-900 text-white shadow-2xl shadow-orange-500/10 scale-105 border-4 border-archshop-orange' 
                                : 'bg-gray-50 text-gray-900 border border-gray-100 hover:shadow-xl'
                            }`}>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                                        plan.featured ? 'bg-archshop-orange' : 'bg-white shadow-sm'
                                    }`}>
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold font-outfit">{plan.name}</h3>
                                </div>

                                <p className={`mb-8 font-medium ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {plan.description}
                                </p>

                                <ul className="space-y-4 mb-12 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <Check className={plan.featured ? 'text-archshop-orange' : 'text-green-500'} size={18} />
                                            <span className="text-sm font-semibold">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                                    plan.featured 
                                    ? 'bg-archshop-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20' 
                                    : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-archshop-orange'
                                }`}>
                                    {plan.cta} <ArrowRight size={20} />
                                </button>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-400 font-medium text-sm flex items-center justify-center gap-2 uppercase tracking-widest">
                        <Zap size={16} className="text-archshop-orange" /> Orçamentos em menos de 24h úteis para projetos avulsos.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default B2BPricing;
