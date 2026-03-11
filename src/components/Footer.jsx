import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-light tracking-tight text-white mb-6 block">
              Arch<span className="font-bold text-archshop-orange">Shop</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevando o padrão da representação arquitetônica através de tecnologia e arte.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-6">Serviços</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/render-arquitetos" className="hover:text-white">3D p/ Arquitetos</Link></li>
              <li><Link to="/render-lancamentos" className="hover:text-white">3D p/ Lançamentos</Link></li>
              <li><Link to="/para-arquitetos" className="hover:text-white">Engenharia</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-6">Empresa</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white">Portfólio</a></li>
              <li><a href="#" className="hover:text-white">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Privacidade</a></li>
              <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} ArchShop. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
