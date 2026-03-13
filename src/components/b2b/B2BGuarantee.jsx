import React from 'react';
import { ShieldCheck, Lock, Award, CheckCircle } from 'lucide-react';
import { Reveal } from '../Reveal';

const B2BGuarantee = () => {
    return (
        <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-archshop-orange/5 blur-[120px] rounded-full -translate-y-1/2" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Reveal direction="left">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-archshop-orange/20 blur-2xl rounded-full" />
                            <img 
                                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
                                alt="Security and Trust"
                                className="relative rounded-[3rem] border-2 border-white/10 shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl hidden md:block">
                                <Award size={48} className="text-archshop-orange mb-2" />
                                <p className="text-gray-900 font-bold text-xl uppercase tracking-tighter">Selo BIM 100%</p>
                                <p className="text-gray-500 text-xs font-medium">Fidelidade Executiva</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal direction="right">
                        <div>
                            <span className="text-archshop-orange font-bold text-sm tracking-widest uppercase mb-4 block">Segurança Inabalável</span>
                            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-8 leading-tight">
                                Sua Tranquilidade <br />
                                <span className="text-gray-400 font-light">é Nossa Prioridade</span>
                            </h2>
                            
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="text-archshop-orange" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2 font-outfit">Responsabilidade Técnica (ART)</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Emitimos ART de todos os projetos complementares, assumindo total responsabilidade legal sobre o cálculo estrutural e instalações.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <Lock className="text-archshop-orange" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2 font-outfit">Seguro de Erros e Omissões</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Blindamos sua parceria com garantias contratuais que protegem você e seu cliente final contra qualquer imprevisto técnico.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <CheckCircle className="text-archshop-orange" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2 font-outfit">Suporte em Obra</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Dúvida do pedreiro? Erro de leitura em projeto? Nosso suporte é imediato via WhatsApp para resolver o problema na hora.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default B2BGuarantee;
