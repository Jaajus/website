import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    category: "Jaaju Specials",
    name: "Gongura Kodi Pulao",
    description: "Aromatic and flavorful, serves 1 to 2.",
    price: "₹275"
  },
  {
    category: "Jaaju Combos",
    name: "Malabar Paratha With Kodikura",
    description: "Served with 3pcs paratha",
    price: "₹345"
  },
  {
    category: "Soups",
    name: "Mutton Munakkai Soup",
    description: "Hearty, aromatic broth made by slow-cooking tender mutton with drumsticks.",
    price: "₹225"
  },
  {
    category: "Veg Starters",
    name: "Gongura Paneer",
    description: "Paneer cooked with tangy gongura leaves.",
    price: "₹365"
  }
];

export default function FeaturedMenu() {
  return (
    <section className="py-32 px-6 bg-charcoal-900 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4"
            >
              Taste of Luxury
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl"
            >
              Curated <span className="italic text-gradient-gold">Classics</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/menu"
              className="group flex items-center gap-3 text-sm tracking-widest uppercase text-white hover:text-gold-400 transition-colors"
            >
              View Full Menu
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-gold-400 text-[10px] tracking-widest uppercase">{item.category}</span>
                <div className="flex-1 border-b border-dashed border-white/10 mx-4" />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className="text-2xl font-serif text-white mb-2 group-hover:text-gold-300 transition-colors">{item.name}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{item.description}</p>
                </div>
                <span className="text-xl font-serif text-white">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
