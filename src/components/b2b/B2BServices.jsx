import React from 'react';
import { Zap, ShieldCheck, Cpu, Layout, Ruler, Binary } from 'lucide-react';
import { Reveal } from '../Reveal';

const B2BServices = () => {
    const services = [
        {
            icon: <Cpu size={24} />,
            title: "Projetos Complementares",
            items: ["Elétrico", "Hidrossanitário", "Climatização"]
        },
        {
            icon: <Binary size={24} />,
            title: "Cálculo Estrutural BIM",
            items: ["Concreto Armado", "Estrutura Metálica", "Steel Frame"]
        },
        {
            icon: <Zap size={24} />,
            title: "Compatibilização em 3D",
            items: ["Detecção de Interferências", "Relatórios de Conflitos", "Otimização Técnica"]
        },
        {
            icon: <Ruler size={24} />,
            title: "Projeto de Fundações",
            items: ["Análise de Solo", "Calculo de Sapatas/Estacas", "Segurança Garantida"]
        },
        {
            icon: <Layout size={24} />,
            title: "Detalhamento Executivo",
            items: ["Pranchas Técnicas", "Lista de Materiais", "Guia de Obra"]
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "Consultoria em BIM",
            items: ["Modelagem Revit", "Famílias Customizadas", "Treinamento Técnico"]
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="text-archshop-orange font-bold text-sm tracking-widest uppercase mb-4 block">Soluções Sob Medida</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-outfit mb-4">
                            Engenharia Que <span className="text-archshop-orange">Fala Sua Língua</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            Dê adeus à engenharia burocrática e lenta. Tenha um time focado em viabilizar sua visão arquitetônica.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-archshop-orange shadow-sm mb-6 group-hover:bg-archshop-orange group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 font-outfit">{service.title}</h3>
                                <ul className="space-y-3">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-archshop-orange/30 group-hover:bg-archshop-orange transition-colors" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default B2BServices;
