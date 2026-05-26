import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const backgroundImages = [
  "https://lh3.googleusercontent.com/p/AF1QipPAnrY3Kta1xtqgcy79JsrxhjAQl2xiQ4VT9wRL=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPPjBbdMHQXL4bddevn8GkSzEMlbOjoJsgMMcQz=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipNyzn4Jk69RjZzY4N67a8wgZbBr30bMOmU07Fx9=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMINxK2QjHKdrp3o2RbthUmXGQYCbSpAfJkJ0ZO=s1360-w1360-h1020-rw"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-full md:h-screen lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={backgroundImages[currentImageIndex]}
              alt="Cinematic Restaurant Bar"
              className="w-full h-full object-cover origin-center animate-[slow-zoom_15s_ease-out_forwards]"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/60 to-charcoal-950/90 z-10" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-gold-400 text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-semibold">
            Welcome to Jaaju
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight drop-shadow-2xl"
        >
          Where Hyderabad <br className="hidden md:block" />
          <span className="italic font-light text-gradient-gold">Eats, Drinks & Celebrates</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-300 md:text-lg mb-4 max-w-2xl mx-auto font-light leading-relaxed"
        >
          A premium fusion of luxury fine dining and vibrant nightlife,
          elevated above the city skyline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.google.com/maps/reserve/v/dine/c/M12ULfueilI?source=pa&opi=79508299&hl=en-IN&gei=VvMUapD2LrnPqfkP2vb38Ak&ahbb=1&sourceurl=https://www.google.com/maps/preview/place?hl%3Den%26gl%3Din%26authuser%3D0%26pb%3D!1m17!1s0x3bcb930331200c33:0x29b09e7ca3fd5ea3!3m12!1m3!1d1861.3322327893684!2d78.33897623223298!3d17.495613271718998!2m3!1f0!2f0!3f0!3m2!1i1280!2i665!4f13.1!4m2!3d17.495803368674874!4d78.33847269415855!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m2!1s8dAUatvLH6jgseMPkpfdyAc!7e81!15m111!1m29!4e2!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m17!3b1!4b1!5b1!6b1!9b1!13b1!14b1!17b1!20b1!21b1!22b1!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!90m2!1m1!1e2!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!128m1!1b1!21m28!1m6!1m2!1i0!2i0!2m2!1i530!2i665!1m6!1m2!1i1230!2i0!2m2!1i1280!2i665!1m6!1m2!1i0!2i0!2m2!1i1280!2i20!1m6!1m2!1i0!2i645!2m2!1i1280!2i665!22m2!1e81!8e1!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i780!39sJaaju%2BKitchen%2B%2526%2BBar%26q%3DJaaju%2BKitchen%2B%2526%2BBar%2B%25E0%25B0%259C%25E0%25B0%25BE%25E0%25B0%259C%25E0%25B1%2581%2B%25E0%25B0%2595%25E0%25B0%25BF%25E0%25B0%259A%25E0%25B1%2586%25E0%25B0%25A8%25E0%25B1%258D%2B%2526%2B%25E0%25B0%25AC%25E0%25B0%25BE%25E0%25B0%25B0%25E0%25B1%258D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-gold-400 text-charcoal-950 font-bold text-xs tracking-[0.15em] uppercase hover:bg-gold-500 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          >
            Reserve a Table
          </a>
          <Link
            to="/menu"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold text-xs tracking-[0.15em] uppercase hover:border-gold-400 hover:text-gold-400 transition-all duration-300 bg-black/20 backdrop-blur-sm"
          >
            Explore Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
