import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-20 min-h-screen px-6 max-w-4xl mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl"
      >
        Our <span className="italic text-gradient-gold">Story</span>
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-px w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"
      />
      <p className="text-gray-300 leading-relaxed text-lg mb-6">
        Jaaju Kitchen & Bar (జాజు కిచెన్ & బార్) was born from a desire to blend the rich, regal heritage of Hyderabad with the pulsating energy of modern nightlife.
      </p>
      <p className="text-gray-300 leading-relaxed text-lg">
        Situated in Madinaguda, Miyapur, we offer an immersive culinary adventure, premium mixology, and an atmosphere that transcends the ordinary.
      </p>
    </div>
  );
}
