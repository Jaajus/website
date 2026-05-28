import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, RockingChair } from 'lucide-react';
import JaajuLogo from '../../assets/jaaju.png';
import { cn } from '../../lib/utils';

const links = [
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Visit Us', path: '/contact' },
];

const RESERVATION_LINK = "https://www.google.com/maps/reserve/v/dine/c/M12ULfueilI?source=pa&opi=79508299&hl=en-IN&gei=VvMUapD2LrnPqfkP2vb38Ak&ahbb=1&sourceurl=https://www.google.com/maps/preview/place?hl%3Den%26gl%3Din%26authuser%3D0%26pb%3D!1m17!1s0x3bcb930331200c33:0x29b09e7ca3fd5ea3!3m12!1m3!1d1861.3322327893684!2d78.33897623223298!3d17.495613271718998!2m3!1f0!2f0!3f0!3m2!1i1280!2i665!4f13.1!4m2!3d17.495803368674874!4d78.33847269415855!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m2!1s8dAUatvLH6jgseMPkpfdyAc!7e81!15m111!1m29!4e2!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m17!3b1!4b1!5b1!6b1!9b1!13b1!14b1!17b1!20b1!21b1!22b1!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!90m2!1m1!1e2!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!128m1!1b1!21m28!1m6!1m2!1i0!2i0!2m2!1i530!2i665!1m6!1m2!1i1230!2i0!2m2!1i1280!2i665!1m6!1m2!1i0!2i0!2m2!1i1280!2i20!1m6!1m2!1i0!2i645!2m2!1i1280!2i665!22m2!1e81!8e1!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i780!39sJaaju%2BKitchen%2B%2526%2BBar%26q%3DJaaju%2BKitchen%2B%2526%2BBar%2B%25E0%25B0%259C%25E0%25B0%25BE%25E0%25B0%259C%25E0%25B1%2581%2B%25E0%25B0%2595%25E0%25B0%25BF%25E0%25B0%259A%25E0%25B1%2586%25E0%25B0%25A8%25E0%25B1%258D%2B%2526%2B%25E0%25B0%25AC%25E0%25B0%25BE%25E0%25B0%25B0%25E0%25B1%258D";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMobileMenuOpen]);

  const isHome = location.pathname === '/';
  const navBackground = isScrolled || !isHome
    ? 'bg-charcoal-950/30 backdrop-blur-2xl'
    : 'bg-transparent';

  return (
    <>
      <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', navBackground)}>
      {/* <header className='fixed top-0 left-0 right-0 z-50 transition-all duration-300'> */}
        <div className="px-3 sm:px-6 lg:px-12 flex items-center justify-between gap-2 h-16 sm:h-20">
          <Link to="/" className="relative z-50 group flex flex-col items-center select-none flex-shrink-0">
            <img
              src={JaajuLogo}
              alt="Jaaju Kitchen & Bar Logo"
              className={cn(
                'h-auto transition-all duration-300 object-contain',
                isScrolled
                  ? 'w-12 sm:w-14 lg:w-20'
                  : 'w-14 sm:w-20 lg:w-24'
              )}
            />
            <span className={cn(
              "hidden sm:block font-sans tracking-[0.15em] sm:tracking-[0.2em] text-[#ae6750] whitespace-nowrap uppercase transition-all duration-300",
              isScrolled
                ? 'text-[0.5rem] sm:text-[0.55rem] mt-0.5'
                : 'text-[0.55rem] sm:text-[0.65rem] mt-0.5 sm:mt-1'
            )}>
              Kitchen & Bar
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 hover:text-gold-400 relative py-2',
                    isActive ? 'text-gold-400' : 'text-gray-300'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-px bg-gold-400"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={RESERVATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gold-400/30 text-gold-400 text-xs tracking-widest uppercase hover:bg-gold-400 hover:text-charcoal-950 transition-all duration-300"
            >
              Reserve Table
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 flex-shrink-0 p-1.5 sm:p-2 text-white hover:text-gold-400 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal-950/98 backdrop-blur-2xl flex flex-col overflow-hidden lg:hidden"          >
            <nav className="flex flex-1 flex-col items-center justify-center gap-6 w-full px-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full text-center"
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'text-3xl font-serif tracking-wider text-white block py-2.5 hover:text-gold-400 transition-all duration-300 transform hover:scale-105',
                        isActive ? 'text-gold-400 font-semibold' : 'text-gray-300'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.05 }}
                className="mt-6 w-full"
              >
                <a
                  href={RESERVATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center py-4 bg-gold-400 hover:bg-gold-500 text-charcoal-950 text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(174,104,82,0.15)] rounded-sm"
                >
                  Reserve Table
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
