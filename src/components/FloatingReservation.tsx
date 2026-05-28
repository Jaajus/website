import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from 'lucide-react';
import ReservationModal from './ReservationModal';

export default function FloatingReservation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling down 500px, but hide if near bottom
      const scrollY = window.scrollY;
      const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 800;
      
      setIsVisible(scrollY > 500 && !isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-8 right-8 z-40 hidden md:block" // Hidden on mobile to avoid overlap
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 bg-gold-400 hover:bg-gold-500 text-charcoal-950 px-6 py-4 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-105"
          >
            <Calendar size={20} className="text-charcoal-900" />
            <span className="font-sans text-xs font-bold tracking-widest uppercase">
              Book Table
            </span>
          </button>
        </motion.div>
      )}
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </AnimatePresence>
  );
}
