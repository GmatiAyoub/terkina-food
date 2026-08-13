import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
    'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400',
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
    'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400',
    'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=400',
    'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400',
  ];

  return (
    <section id="galerie" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-yellow-600 font-semibold text-sm tracking-widest uppercase">
            Galerie
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Un aperçu de notre <span className="gradient-text">univers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer"
            >
              <img
                src={img}
                alt={`Plat ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">🍕 Spécialité maison</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold transition-colors"
          >
            <Camera className="w-5 h-5" />
            Voir toutes les photos
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;