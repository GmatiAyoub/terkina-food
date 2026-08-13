import { motion } from 'framer-motion';
import { Award, Clock, Heart, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Meilleur Pizzaiolo', value: '⭐ 5 étoiles' },
    { icon: Clock, label: 'Ouvert 6/7 jours', value: '8h - Minuit' },
    { icon: Heart, label: 'Ingrédients frais', value: '100% artisanale' },
    { icon: Users, label: 'Clients heureux', value: '150+ avis' },
  ];

  return (
    <section id="a-propos" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Colonne texte */}
          <div>
            <span className="text-yellow-600 font-semibold text-sm tracking-widest uppercase">
              Notre histoire
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              L'âme de la pizza <br />
              <span className="gradient-text">tunisienne</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Chez <strong>Terkina Food</strong>, nous croyons que la pizza est 
              bien plus qu'un plat : c'est une expérience. Avec des recettes 
              transmises par notre famille et une passion pour les ingrédients 
              de qualité, nous offrons à Mornag une pizza d'exception.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Chaque pizza est préparée avec amour, de la pâte fermentée 
              24h à la sauce tomate fraîche, pour un goût authentique 
              qui a conquis le cœur de nos clients.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-4 rounded-xl"
                >
                  <stat.icon className="w-6 h-6 text-yellow-500 mb-1" />
                  <p className="font-bold text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Colonne image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600"
                alt="Pizza artisanale"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 px-6 py-4 rounded-xl shadow-xl"
            >
              <p className="font-bold text-2xl">2010</p>
              <p className="text-sm font-medium">Année de création</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;