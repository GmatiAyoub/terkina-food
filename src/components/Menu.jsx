import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pizza, Coffee, Wine, Star } from 'lucide-react';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('pizzas');

  const categories = {
    pizzas: {
      icon: Pizza,
      label: 'Pizzas',
      items: [
        { name: 'Margherita', description: 'Sauce tomate, mozzarella, basilic frais', price: '12.50' },
        { name: 'Terkina Spéciale', description: 'Sauce tomate, mozzarella, merguez, œuf, olives', price: '16.00' },
        { name: '4 Fromages', description: 'Mozzarella, gorgonzola, parmesan, chèvre', price: '14.50' },
        { name: 'Tunisienne', description: 'Sauce tomate, mozzarella, thon, oignons, câpres', price: '15.00' },
        { name: 'Calzone', description: 'Pizza pliée garnie de jambon, champignons, ricotta', price: '14.00' },
      ]
    },
    plats: {
      icon: Coffee,
      label: 'Plats',
      items: [
        { name: 'Couscous Royal', description: 'Agneau, poulet, merguez, légumes', price: '18.00' },
        { name: 'Tajine Poulet', description: 'Poulet confit, olives, citron confit', price: '16.00' },
        { name: 'Salade César', description: 'Poulet grillé, parmesan, croûtons', price: '11.00' },
        { name: 'Pâtes Carbonara', description: 'Crémeuses, lardons, parmesan', price: '13.50' },
      ]
    },
    boissons: {
      icon: Wine,
      label: 'Boissons',
      items: [
        { name: 'Jus Frais', description: 'Orange, citron, ou grenadine', price: '4.00' },
        { name: 'Soda', description: 'Coca, Fanta, Sprite', price: '3.00' },
        { name: 'Eau Minérale', description: 'Plate ou gazeuse', price: '2.00' },
        { name: 'Café Tunisien', description: 'Avec épices, servi à la carte', price: '3.50' },
        { name: 'Thé à la Menthe', description: 'Thé vert, menthe fraîche', price: '3.00' },
      ]
    }
  };

  const currentItems = categories[activeTab].items;
  const Icon = categories[activeTab].icon;

  return (
    <section id="menu" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-yellow-600 font-semibold text-sm tracking-widest uppercase">
            Notre carte
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Découvrez nos <span className="gradient-text">spécialités</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Des pizzas artisanales aux plats traditionnels, chaque recette est 
            préparée avec des ingrédients frais et beaucoup d'amour.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.entries(categories).map(([key, { icon: CatIcon, label }]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === key
                  ? 'bg-yellow-500 text-gray-900 shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <CatIcon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex justify-between items-start group hover:scale-105"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                    {index < 2 && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                </div>
                <span className="text-yellow-600 font-bold text-lg bg-gray-50 px-3 py-1 rounded-full">
                  {item.price} TND
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            * Tous nos plats sont préparés avec des ingrédients frais et locaux
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;