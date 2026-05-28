import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const promises = [
  {
    highlight: "Freshly cooked",
    text: " to your order — never reheated, never pre-batched"
  },
  {
    highlight: "Strict ingredient checks",
    text: " every morning — quality you can taste"
  },
  {
    highlight: "100% satisfaction guaranteed",
    text: " — or your next meal is on us"
  },
  {
    highlight: "Standardised hygiene protocols",
    text: " in our kitchen, every single day"
  }
];

export default function PromiseSection() {
  return (
    <section className="py-24 bg-charcoal-950 text-left overflow-hidden">
      <div className="mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-gold-500/50" />
              <span className="text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">
                Our Promise
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-[4rem] font-light text-white mb-6 leading-tight">
              Fresh & <span className="italic text-gold-400 font-serif">fast,</span><br />
              every time.
            </h2>

            <p className="text-gray-400 mb-10 text-lg leading-relaxed font-light">
              We prepare every dish to order. No pre-cooked batches. No heat lamps. Just honest food made with care — as if you're our only guest.
            </p>

            <div className="space-y-4">
              {promises.map((promise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="flex items-center gap-4 p-4 rounded-sm bg-[#111111] border border-white/5 hover:border-gold-400/20 transition-colors"
                >
                  <div className="mt-1 flex-shrink-0 w-[18px] h-[18px] bg-gold-400 flex items-center justify-center rounded-[2px]">
                    <Check size={12} className="text-charcoal-950 stroke-[4]" />
                  </div>
                  <p className="text-gray-300 text-sm font-light">
                    <span className="font-semibold text-gold-400/90">{promise.highlight}</span>
                    {promise.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-12 lg:mt-0 lg:ml-auto w-full lg:max-w-[500px]"
          >
            <div className="relative aspect-[4/5] md:aspect-square w-full">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipO-Zba_zAsPvfldFmhJ-CkPkUynhg_kIBIESh6J=s1360-w1360-h1020-rw"
                alt="Fresh Drink"
                className="w-full h-full object-cover"
              />

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-4 w-[200px] md:w-[240px] aspect-square border-1 border-charcoal-950 overflow-hidden shadow-2xl z-10"
              >
                <img
                  src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGvhE9C13lCNY4-u0w-sXcewazgSx_mvXsYTMsuq88RqJLwzPtQ5cRRSGTfV6BYzJLQ6tnUhC-wwqDfU9T1OClN0xc5m7_ORlgeAoS5Jgg6qs2sfPdi9p2UeM_Hha8RApX8DLmN=s1360-w1360-h1020-rw"
                  alt="Fresh Dessert"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
