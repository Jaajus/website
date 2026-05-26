import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Reservations() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen px-6 relative">
      {/* Background visual */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <img 
          src="https://images.unsplash.com/photo-1542289908-1cc03328e348?auto=format&fit=crop&q=80&w=2000" 
          alt="Ambient bar" 
          className="w-full h-full object-cover opacity-[0.03]"
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4"
          >
            Join Us
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl"
          >
            Reserve Your <span className="italic text-gradient-gold">Table</span>
          </motion.h1>
        </div>

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-glass-gold p-12 rounded-xl text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gold-400/5 backdrop-blur-3xl" />
            <div className="relative z-10 flex flex-col items-center">
              <CheckCircle2 size={64} className="text-gold-400 mb-6" />
              <h3 className="text-3xl font-serif text-white mb-4">Request Received</h3>
              <p className="text-gray-300 leading-relaxed max-w-sm mx-auto mb-8">
                Your reservation request has been submitted. Our concierge team will contact you shortly via WhatsApp to confirm the booking.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-xs uppercase tracking-widest text-gold-400 hover:text-white transition-colors"
              >
                Make another reservation
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-glass p-8 md:p-12 rounded-xl shadow-2xl space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-charcoal-900/50 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  className="w-full bg-charcoal-900/50 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors placeholder:text-gray-600"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 ml-2">Guests</label>
                <select className="w-full bg-charcoal-900/50 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors appearance-none">
                  {[1,2,3,4,5,6,7,8,"9+"].map(n => (
                    <option key={n} value={n} className="bg-charcoal-900">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 ml-2">Date</label>
                <input 
                  required
                  type="date" 
                  className="w-full bg-charcoal-900/50 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors [color-scheme:dark]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 ml-2">Time</label>
                <select className="w-full bg-charcoal-900/50 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors appearance-none">
                  <option value="19:00" className="bg-charcoal-900">7:00 PM</option>
                  <option value="19:30" className="bg-charcoal-900">7:30 PM</option>
                  <option value="20:00" className="bg-charcoal-900">8:00 PM</option>
                  <option value="20:30" className="bg-charcoal-900">8:30 PM</option>
                  <option value="21:00" className="bg-charcoal-900">9:00 PM</option>
                  <option value="21:30" className="bg-charcoal-900">9:30 PM</option>
                  <option value="22:00" className="bg-charcoal-900">10:00 PM</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-400 ml-2">Seating Preference & Special Requests</label>
              <textarea 
                rows={3}
                className="w-full bg-charcoal-900/50 border border-white/10 rounded-none px-4 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors placeholder:text-gray-600 resize-none"
                placeholder="Rooftop, lounge area, anniversary celebration..."
              />
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-gold-400 text-charcoal-950 font-bold tracking-[0.2em] uppercase text-sm hover:bg-gold-500 transition-colors mt-4"
            >
              Request Reservation
            </button>
            <p className="text-center text-[10px] text-gray-500 tracking-wider mt-4">
              Requests are subject to availability. Dress code is smart elegant.
            </p>
          </motion.form>
        )}
      </div>
    </div>
  );
}
