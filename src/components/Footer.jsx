import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white/80 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-display font-bold text-yellow-500 mb-4">
              Terkina <span className="text-white">Food</span>
            </h3>
            <p className="text-sm leading-relaxed">
              La meilleure pizza de Mornag. Une tradition familiale depuis 2010.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#accueil" className="hover:text-yellow-500 transition-colors">Accueil</a></li>
              <li><a href="#menu" className="hover:text-yellow-500 transition-colors">Menu</a></li>
              <li><a href="#avis" className="hover:text-yellow-500 transition-colors">Avis</a></li>
              <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-500" />
                <a href="tel:+21624771995" className="hover:text-yellow-500 transition-colors">
                  +216 24 771 995
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span>Mornag, Tunisie</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500/20 transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500/20 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>© 2026 Terkina Food. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;