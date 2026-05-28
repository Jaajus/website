import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-20 min-h-screen px-6 mx-auto text-center">
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
        Nestled in the heart of Madeenaguda, <strong>Jaaju Kitchen & Bar (జాజు కిచెన్ & బార్)</strong> is where the timeless soul of Hyderabad meets the vibrant spirit of contemporary dining and nightlife.
      </p>
      <p className="text-gray-300 leading-relaxed text-lg mb-6">
        Inspired by the rich culinary heritage of Telugu culture and the regal charm of the city, Jaaju was created to offer more than just food. 
        <br />
        It is an experience crafted with flavor, warmth, music, and unforgettable moments. 
      </p>
      <p className="text-gray-300 leading-relaxed text-lg mb-6">
        From authentic Telugu delicacies and bold regional flavors to premium mixology and handcrafted cocktails, every dish and every drink reflects passion, tradition, and modern elegance. Our thoughtfully designed spaces blend cultural warmth with a lively ambience, making Jaaju the perfect destination for family gatherings, casual outings, celebrations, and late-night conversations.
      </p>
      <p className="text-gray-300 leading-relaxed text-lg">
        At Jaaju, every corner tells a story, every plate carries tradition, and every visit feels like home, elevated with a touch of luxury.
        <br />
        <strong>Step in</strong>, <strong>Unwind</strong>, and <strong>Savor</strong> the true taste of Hyderabad.
      </p>
    </div>
  );
}
