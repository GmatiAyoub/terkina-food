import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Définition précise des liens avec leurs ID de section
  const navLinks = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'À propos', id: 'a-propos' },
    { label: 'Menu', id: 'menu' },
    { label: 'Galerie', id: 'galerie' },
    { label: 'Avis', id: 'avis' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl md:text-3xl font-display font-bold text-yellow-400"
        >
          Terkina <span className="text-white">Food</span>
        </motion.h1>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+21624771995" className="btn-primary !py-2 !px-6 text-sm">
            <Phone className="inline w-4 h-4 mr-2" />
            Appeler
          </a>
        </div>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-yellow-400 transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/80 backdrop-blur-md mt-2 mx-4 rounded-2xl p-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-white hover:text-yellow-400 transition-colors font-medium border-b border-white/10 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+21624771995"
            className="block mt-4 btn-primary text-center"
          >
            <Phone className="inline w-4 h-4 mr-2" />
            Appeler
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;