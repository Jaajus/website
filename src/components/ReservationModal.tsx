import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-light"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-charcoal-900 border border-white/10 rounded-2xl p-6 md:p-8 max-w-md w-full relative shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-semibold text-white mb-6">Select Reservation Provider</h2>

            <div className="space-y-4">
              <a
                href="https://www.district.in/dining/hyderabad/jaaju-kitchen-bar-miyapur/book?utm_source=rwg"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-white/10 rounded-xl hover:border-gold-400/50 hover:bg-white/5 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors">district.in</h3>
                  <span className="text-sm text-gray-400 group-hover:text-gold-400 transition-colors">Book Now &rarr;</span>
                </div>
              </a>

              <a
                href="https://www.eazydiner.com/hyderabad/jaaju-bar-kitchen-chanda-nagar-hyderabad-700245"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-white/10 rounded-xl hover:border-gold-400/50 hover:bg-white/5 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-orange-500">eazydiner.com</h3>
                  <span className="text-sm text-gray-400 group-hover:text-gold-400 transition-colors">Book Now &rarr;</span>
                </div>
              </a>

              <a
                href="https://www.zomato.com/hyderabad/jaaju-kitchen-bar-miyapur/book?utm_source=rwg"
                className="block p-4 border border-white/10 rounded-xl hover:border-gold-400/50 hover:bg-white/5 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-red-500">zomato.com</h3>
                  <span className="text-sm text-gray-400 group-hover:text-gold-400 transition-colors">Book Now &rarr;</span>
                </div>
              </a>

              <a
                href="https://www.swiggy.com/restaurants/jaaju-kitchen-and-bar-miyapur-koramangala-hyderabad-962721/dineout?is_retargeting=true&media_source=GoogleReserve&utm_campaign=GoogleMap&utm_source=GoogleReserve"
                className="block p-4 border border-white/10 rounded-xl hover:border-gold-400/50 hover:bg-white/5 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-orange-500">swiggy.com</h3>
                  <span className="text-sm text-gray-400 group-hover:text-gold-400 transition-colors">Book Now &rarr;</span>
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
