import Hero from '../components/home/Hero';
import Experience from '../components/home/Experience';
import FeaturedMenu from '../components/home/FeaturedMenu';
import Testimonials from '../components/home/Testimonials';
import InstagramReels from '../components/home/InstagramReels';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="min-h-screen mx-auto text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Experience />
        <FeaturedMenu />

        {/* Visual Intermission */}
        <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPeEP37ZypR8rJVuv1JKq-HzI71Xodxw9SoQQKW=s1360-w1360-h1020-rw"
              alt="Cinematic cocktail crafted at the bar"
              className="w-full h-full object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-charcoal-950/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-900" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-7xl mb-6 font-light drop-shadow-xl"
            >
              Liquid <span className="italic text-gradient-gold font-serif">Artistry</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-200 text-lg md:text-xl font-light"
            >
              Where every pour is a performance, and every sip tells a story of the city.
            </motion.p>
          </div>
        </section>

        <Testimonials />
        <InstagramReels />
      </motion.div>
    </div>
  );
}
