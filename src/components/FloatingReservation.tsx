import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function FloatingReservation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling down 500px, but hide if near bottom
      const scrollY = window.scrollY;
      const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 800;
      
      setIsVisible(scrollY > 500 && !isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-8 right-8 z-40 hidden md:block" // Hidden on mobile to avoid overlap
        >
          <a
            href="https://www.google.com/maps/reserve/v/dine/c/M12ULfueilI?source=pa&opi=79508299&hl=en-IN&gei=VvMUapD2LrnPqfkP2vb38Ak&ahbb=1&sourceurl=https://www.google.com/maps/preview/place?hl%3Den%26gl%3Din%26authuser%3D0%26pb%3D!1m17!1s0x3bcb930331200c33:0x29b09e7ca3fd5ea3!3m12!1m3!1d1861.3322327893684!2d78.33897623223298!3d17.495613271718998!2m3!1f0!2f0!3f0!3m2!1i1280!2i665!4f13.1!4m2!3d17.495803368674874!4d78.33847269415855!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m2!1s8dAUatvLH6jgseMPkpfdyAc!7e81!15m111!1m29!4e2!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m17!3b1!4b1!5b1!6b1!9b1!13b1!14b1!17b1!20b1!21b1!22b1!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!90m2!1m1!1e2!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!128m1!1b1!21m28!1m6!1m2!1i0!2i0!2m2!1i530!2i665!1m6!1m2!1i1230!2i0!2m2!1i1280!2i665!1m6!1m2!1i0!2i0!2m2!1i1280!2i20!1m6!1m2!1i0!2i645!2m2!1i1280!2i665!22m2!1e81!8e1!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i780!39sJaaju%2BKitchen%2B%2526%2BBar%26q%3DJaaju%2BKitchen%2B%2526%2BBar%2B%25E0%25B0%259C%25E0%25B0%25BE%25E0%25B0%259C%25E0%25B1%2581%2B%25E0%25B0%2595%25E0%25B0%25BF%25E0%25B0%259A%25E0%25B1%2586%25E0%25B0%25A8%25E0%25B1%258D%2B%2526%2B%25E0%25B0%25AC%25E0%25B0%25BE%25E0%25B0%25B0%25E0%25B1%258D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gold-400 hover:bg-gold-500 text-charcoal-950 px-6 py-4 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-105"
          >
            <Calendar size={20} className="text-charcoal-900" />
            <span className="font-sans text-xs font-bold tracking-widest uppercase">
              Book Table
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
