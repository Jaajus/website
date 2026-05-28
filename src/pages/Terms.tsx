import { motion } from 'motion/react';
import { Scale } from 'lucide-react';

export default function Terms() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 md:px-8 bg-charcoal-950 relative overflow-hidden">
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Terms of <span className="italic text-gradient-gold">Service</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-500 text-xs tracking-widest uppercase"
          >
            Last Updated: May 26, 2026
          </motion.p>
        </div>

        {/* Content Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-charcoal-900/40 border border-white/5 rounded-lg p-8 md:p-12 shadow-2xl backdrop-blur-sm text-gray-300 space-y-8 leading-relaxed font-sans text-sm md:text-base"
        >
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white tracking-wide border-b border-white/5 pb-2">1. Agreement to Terms</h2>
            <p>
              By accessing our website and reservation portal, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree to these terms, please do not use this site or our related online services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white tracking-wide border-b border-white/5 pb-2">2. Use of Online Reservation Portal</h2>
            <p>
              When booking a table through our platform, you agree to:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-400">
              <li>Provide accurate, current, and complete personal and contact details.</li>
              <li>Only make legitimate bookings. Double, overlapping, or speculative reservations are strictly prohibited.</li>
              <li>Notify us promptly in case of cancellation or delays in arrival.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white tracking-wide border-b border-white/5 pb-2">3. Table Seating & Holding Policy</h2>
            <p>
              While we endeavor to honor all reservations precisely:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-400">
              <li>Reserved tables are held for a maximum of <strong>15 minutes</strong> past the scheduled booking time, after which the table may be released to waiting guests.</li>
              <li>Specific table location requests (e.g., window view, rooftop) are subject to availability and cannot be fully guaranteed.</li>
              <li>Jaaju Kitchen & Bar reserves the right to decline entry or service in compliance with local venue capacity limits and security protocols.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white tracking-wide border-b border-white/5 pb-2">4. Intellectual Property</h2>
            <p>
              All text, graphic layouts, brand logos, custom photography, menu designs, and code structures displayed on this site are the exclusive intellectual property of <strong>Jaaju Kitchen & Bar</strong> and are protected under international copyright and trademark laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white tracking-wide border-b border-white/5 pb-2">5. Limit of Liability</h2>
            <p>
              Jaaju Kitchen & Bar, its management, and its affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this site, online reservation tools, or delays in online reservation synchronization.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white tracking-wide border-b border-white/5 pb-2">6. Changes to Terms</h2>
            <p>
              We reserve the right to revise or modify these Terms of Service at any time without prior announcement. Your continued use of our website or services post-update signifies your full approval of the revised terms.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
