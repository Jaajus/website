import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 min-h-screen px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4"
        >
          Reach Out
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl"
        >
          Get In <span className="italic text-gradient-gold">Touch</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full border border-gold-400/30 flex items-center justify-center flex-shrink-0 text-gold-400">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif text-white mb-2">Location</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                First Floor, Block 1, SATYANARAYANA ENCLAVE,<br />
                Block-F, Madinaguda, Durga Estates,<br />
                Miyapur, Hyderabad, Telangana 500049<br />
                <span className="text-sm text-gray-500 mt-2 block tracking-wider uppercase">Plus Code: F8WQ+89 Miyapur</span>
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full border border-gold-400/30 flex items-center justify-center flex-shrink-0 text-gold-400">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif text-white mb-2">Hours</h3>
              <ul className="text-gray-400 text-sm space-y-2 font-light">
                <li className="flex justify-between w-48"><span>Sun - Thu:</span> <span className="text-white">12 PM - 11:30 PM</span></li>
                <li className="flex justify-between w-48"><span>Fri - Sat:</span> <span className="text-white">12 PM - 12:30 AM</span></li>
                <li className="mt-4 text-gold-400">Happy Hours (Mon-Fri, Sun)</li>
                <li className="flex justify-between w-48"><span>Time:</span> <span className="text-white">12 PM - 7:00 PM</span></li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full border border-gold-400/30 flex items-center justify-center flex-shrink-0 text-gold-400">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif text-white mb-2">Contact</h3>
              <p className="text-gray-400 font-light">09052210101</p>
              <p className="text-gray-400 font-light mt-1">reserve@jaaju.com</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="h-[500px] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5 relative"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.518600465!2d78.33642397615!3d17.492316401666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb930331200c33%3A0x29b09e7ca3fd5ea3!2sJaaju%20Kitchen%20%26%20Bar%20%E0%B0%9C%E0%B0%BE%E0%B0%9C%E0%B1%81%20%E0%B0%95%E0%B0%BF%E0%B0%9A%E0%B1%86%E0%B0%A8%E0%B1%8D%20%26%20%E0%B0%AC%E0%B0%BE%E0%B0%B0%E0%B1%8D!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location for Jaaju Kitchen & Bar"
            className="filter grayscale-[60%] contrast-125 hover:grayscale-0 transition-all duration-1000"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
