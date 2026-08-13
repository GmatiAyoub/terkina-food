import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-white/80 text-sm font-medium">
                ★ 4.9 • 150+ avis
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              La meilleure
              <span className="gradient-text block"> pizza de Mornag</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mt-6 max-w-lg leading-relaxed">
              Découvrez l'art de la pizza artisanale avec des ingrédients frais 
              et une passion transmise de génération en génération.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#menu"
                className="btn-primary"
              >
                Voir la carte
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://maps.app.goo.gl/jyPHeBtAgFChVupi8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MapPin className="w-5 h-5" />
                Nous trouver
              </motion.a>
            </div>

            <div className="flex items-center gap-8 mt-12 text-white/70 text-sm">
              <div>
                <p className="font-bold text-white text-lg">8h - 00h</p>
                <p>Lun - Sam</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="font-bold text-white text-lg">Sur place</p>
                <p>À emporter</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Badge flottant (optionnel) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md p-4 rounded-xl hidden lg:block border border-white/20"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">🍕</span>
          </div>
          <div>
            <p className="text-white font-bold">Spécialité tunisienne</p>
            <p className="text-white/60 text-sm">Depuis 2010</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;