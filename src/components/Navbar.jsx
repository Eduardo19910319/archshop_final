import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', href: '/', isRoute: true },
    { name: 'Engenharia', href: '/para-arquitetos', isRoute: true },
    { name: '3D p/ Arquitetos', href: '/render-arquitetos', isRoute: true },
    { name: '3D p/ Lançamentos', href: '/render-lancamentos', isRoute: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-light tracking-tight text-gray-900">
              Arch<span className="font-bold text-archshop-orange">Shop</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-gray-600 hover:text-archshop-orange transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-archshop-orange text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-200">
              Falar com Especialista
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-archshop-orange hover:bg-gray-50 rounded-xl transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <button className="w-full bg-archshop-orange text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-200">
                  Falar com Especialista
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
