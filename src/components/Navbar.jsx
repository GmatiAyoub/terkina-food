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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-yellow-400">Terkina Food</h1>
        <div className="hidden md:flex gap-8 text-white">
          <a href="#">Accueil</a>
          <a href="#">Menu</a>
          <a href="#">Contact</a>
        </div>
        <button className="md:hidden text-white">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;