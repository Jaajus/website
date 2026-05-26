import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 md:px-8 bg-charcoal-950 relative overflow-hidden">
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="w-12 h-12 border border-gold-400/30 rounded-full flex items-center justify-center bg-gold-900/10">
              <ShieldCheck size={22} className="text-gold-400" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white tracking-widest uppercase mb-4"
          >
            Privacy <span className="italic text-gradient-gold">Policy</span>
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
            Effective Date: May 26, 2026
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
            <h2 className="text-2xl font-serif text-white tracking-wide border-b border-white/5 pb-2">1. Overview</h2>
            <p>
              Welcome to <strong>Jaaju Kitchen & Bar</strong>. We value your privacy and are committed to protecting your personal information. This Privacy Policy details how we collect, use, and secure your information when you visit our website or use our online reservation services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white tracking-wide border-b border-white/5 pb-2">2. Information We Collect</h2>
            <p>
              We may collect personal details that you provide directly to us when making reservations or inquiries. This information may include:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-400">
              <li>Contact details such as name, email address, and phone number.</li>
              <li>Reservation details including party size, preferred dining time, and special dietary or seating requests.</li>
              <li>Technical details like IP address, browser type, and navigation patterns gathered through automated cookies.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white tracking-wide border-b border-white/5 pb-2">3. How We Use Your Information</h2>
            <p>
              Your data is utilized solely to enhance your hospitality and dining experience:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-400">
              <li>To confirm, coordinate, and manage your table reservations.</li>
              <li>To answer customer service requests and offer support.</li>
              <li>To improve our website functionality, menus, and service quality.</li>
              <li>To send occasional promotional updates or events, provided you have opted in to receive them.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white tracking-wide border-b border-white/5 pb-2">4. Third-Party Services</h2>
            <p>
              We integrate third-party reservation software (such as Google Maps Reserve) to handle online bookings. These third-party services maintain their own strict privacy policies. We do not sell or lease your personal information to marketing syndicates.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white tracking-wide border-b border-white/5 pb-2">5. Data Protection</h2>
            <p>
              We deploy industry-standard secure network firewalls, data encryption, and access controls to guard against unauthorized access, loss, or manipulation of your private reservation details.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-white tracking-wide border-b border-white/5 pb-2">6. Contact Us</h2>
            <p>
              For questions regarding this policy or to request the correction or removal of your details, please reach out to us at:
            </p>
            <div className="bg-white/5 rounded border border-white/5 p-4 mt-2 text-xs md:text-sm font-sans text-gray-400">
              <strong>Jaaju Kitchen & Bar</strong><br />
              First Floor, Block 1, Satyanarayana Enclave,<br />
              Madinaguda, Miyapur, Hyderabad, Telangana 500049.<br />
              Email: <span className="text-gold-400">reserve@jaaju.com</span> | Phone: <span className="text-gold-400">9052210101</span>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
