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
        <>
          {/* WhatsApp Button (Left Side) */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 left-8 z-40 hidden md:block" // Hidden on mobile to avoid overlap
          >
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-105"
              aria-label="Contact us on WhatsApp"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-7 h-7"
              >
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.211.049-.391-.025-.541-.075-.15-.676-1.62-.924-2.206-.241-.579-.481-.496-.676-.511-.175-.015-.371-.015-.571-.015-.197 0-.523.074-.796.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.095 3.2 5.074 4.485.709.301 1.263.481 1.694.616.711.225 1.355.195 1.866.12.571-.091 1.767-.721 2.016-1.426.248-.705.248-1.305.174-1.425-.074-.136-.273-.211-.571-.361zM11.996 21A9.006 9.006 0 017.382 19.8l-.337-.202-3.415.894.912-3.328-.219-.345A9.007 9.007 0 013 11.999c0-4.965 4.041-9 9.001-9 4.953 0 8.995 4.035 8.995 9 0 4.964-4.042 8.999-9.001 8.999l.001.002z"/>
              </svg>
            </a>
          </motion.div>

          {/* Book Table Button (Right Side) */}
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
        </>
      )}
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </AnimatePresence>
  );
}
