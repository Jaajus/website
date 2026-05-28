import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpenText, Scooter, X } from 'lucide-react';

const backgroundImages = [
  "https://lh3.googleusercontent.com/p/AF1QipPAnrY3Kta1xtqgcy79JsrxhjAQl2xiQ4VT9wRL=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPPjBbdMHQXL4bddevn8GkSzEMlbOjoJsgMMcQz=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipNyzn4Jk69RjZzY4N67a8wgZbBr30bMOmU07Fx9=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMINxK2QjHKdrp3o2RbthUmXGQYCbSpAfJkJ0ZO=s1360-w1360-h1020-rw"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-full md:h-screen lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={backgroundImages[currentImageIndex]}
              alt="Cinematic Restaurant Bar"
              className="w-full h-full object-cover origin-center animate-[slow-zoom_8s_ease-out_forwards]"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/60 to-charcoal-950/90 z-10" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-gold-400 text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-semibold">
            Welcome to Jaaju
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-2xl"
        >
          Where Hyderabad <br className="hidden md:block" />
          <span className="italic font-light text-gradient-gold">Eats, Drinks & Celebrates</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-300 md:text-lg mb-4 max-w-2xl mx-auto font-light leading-relaxed"
        >
          A premium fusion of luxury fine dining and vibrant nightlife,
          elevated above the city skyline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/menu"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold text-xs tracking-[0.15em] uppercase hover:border-gold-400 hover:text-gold-400 transition-all duration-300 bg-black/20 backdrop-blur-sm flex flex-row items-center gap-x-2"
          >
            <BookOpenText size={16} /> Explore Menu
          </Link>
          <button
            onClick={() => setIsOrderModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-gold-400 text-charcoal-950 font-bold text-xs tracking-[0.15em] uppercase hover:bg-gold-500 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.4)] flex flex-row items-center gap-x-2"
          >
            <Scooter size={16} /> Order Online
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOrderModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setIsOrderModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-charcoal-900 border border-white/10 rounded-2xl p-6 md:p-8 max-w-md w-full relative shadow-2xl"
            >
              <button
                onClick={() => setIsOrderModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-semibold text-white mb-6">Place order with:</h2>

              <div className="space-y-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-white/10 rounded-xl hover:border-gold-400/50 hover:bg-white/5 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-red-500">Zomato</h3>
                    <span className="text-sm text-gray-400 group-hover:text-gold-400 transition-colors">Order Now &rarr;</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-1">Delivery fee ₹40–₹60 · Service fee may apply</p>
                  <p className="text-sm text-gold-400/80">Delivers in 30–40 min</p>
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-white/10 rounded-xl hover:border-gold-400/50 hover:bg-white/5 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-orange-500">Swiggy</h3>
                    <span className="text-sm text-gray-400 group-hover:text-gold-400 transition-colors">Order Now &rarr;</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-1">Delivery fees up to ₹45 · Service fee may apply</p>
                  <p className="text-sm text-gold-400/80">Delivers in 30–45 min</p>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
