import { motion } from 'motion/react';

const experiences = [
  {
    title: "Fine Dining",
    description: "Curated culinary masterpieces inspired by global flavors and Hyderabadi heritage, plated to perfection.",
    image: "https://lh3.googleusercontent.com/p/AF1QipNyzn4Jk69RjZzY4N67a8wgZbBr30bMOmU07Fx9=s1360-w1360-h1020-rw",
    align: "left"
  },
  {
    title: "The Lounge",
    description: "Sip on artisanal cocktails while soaking in the panoramic rooftop views and amber-lit ambiance.",
    image: "https://lh3.googleusercontent.com/p/AF1QipMINxK2QjHKdrp3o2RbthUmXGQYCbSpAfJkJ0ZO=s1360-w1360-h1020-rw",
    align: "right"
  },
  {
    title: "Spice & Spirits",
    description: "Crispy, fiery bites paired with a chilled drink, the kind of table that turns an ordinary evening into a vibe.",
    image: "https://lh3.googleusercontent.com/p/AF1QipNJ_ZsjC5GVJjDU_pAShN5W50VzlY186do21dnK=s1360-w1360-h1020-rw",
    align: "left"
  }
];

export default function Experience() {
  return (
    <section className="py-32 px-6 bg-charcoal-950 relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4"
          >
            The Vibe
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl"
          >
            Signature <span className="italic text-gradient-gold">Experiences</span>
          </motion.h2>
        </div>

        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${exp.align === 'right' ? 'md:flex-row-reverse' : ''
                }`}
            >
              <motion.div
                initial={{ opacity: 0, x: exp.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-1/2 relative group"
              >
                <div className="absolute inset-0 bg-gold-400/20 translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="relative z-10 w-full h-[400px] lg:h-[500px] object-cover rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 flex flex-col justify-center"
              >
                <h3 className="text-3xl lg:text-4xl mb-6 text-white">{exp.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-8">
                  {exp.description}
                </p>
                <div className="w-12 h-px bg-gold-400" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
