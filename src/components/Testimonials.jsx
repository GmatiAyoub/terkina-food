import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Ahmed B.',
      text: 'La meilleure pizza de Mornag ! Le goût est exceptionnel et le service est impeccable. Je recommande vivement la Terkina Spéciale.',
      rating: 5,
      date: 'Il y a 2 semaines'
    },
    {
      name: 'Sonia M.',
      text: 'Un vrai délice ! Les ingrédients sont frais et la pâte est parfaite. Le personnel est accueillant et souriant. À essayer absolument !',
      rating: 5,
      date: 'Il y a 1 mois'
    },
    {
      name: 'Karim R.',
      text: 'Je suis un habitué et je ne suis jamais déçu. La qualité est constante et les prix sont très raisonnables. Bravo !',
      rating: 5,
      date: 'Il y a 3 semaines'
    },
  ];

  return (
    <section id="avis" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-yellow-600 font-semibold text-sm tracking-widest uppercase">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Ce que disent nos <span className="gradient-text">clients</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://maps.app.goo.gl/jyPHeBtAgFChVupi8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 hover:text-yellow-700 font-semibold transition-colors inline-flex items-center gap-2"
          >
            Voir plus d'avis sur Google Maps →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;