import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function InstagramReels() {
  useEffect(() => {
    // Dynamically load the Elfsight platform script
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-24 px-6 bg-charcoal-950">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4"
          >
            Social
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl"
          >
            Follow our <span className="italic text-gradient-gold">Vibe</span>
          </motion.h2>
        </div>

        {/* <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="w-full"
        >
          <div className="elfsight-app-5efb3901-0c5d-47fb-b758-c11d0e2b11e6" data-elfsight-app-lazy></div>
        </motion.div> */}
      </div>
    </section>
  );
}


