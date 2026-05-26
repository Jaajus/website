import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import JaajuLogo from '../../assets/jaaju.png';
import { cn } from '../../lib/utils';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex flex-col items-start mb-6">
              <img
                src={JaajuLogo}
                alt="Jaaju Kitchen & Bar Logo"
                className={cn(
                  'h-auto transition-all duration-300 object-contain w-16 lg:w-20')}
              />              <span className="font-sans text-xs tracking-[0.2em] text-gold-400 uppercase mt-1">
                Kitchen & Bar
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Where Hyderabad eats, drinks, and celebrates. A premium fusion of luxury dining and vibrant nightlife.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/jaaju.hyd/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400/50 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61560445390208" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold-400 hover:border-gold-400/50 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-white mb-4 md:mb-6 tracking-wide">Explore</h4>
            <ul className="flex flex-row md:flex-col flex-wrap gap-x-6 gap-y-3 md:gap-y-0 md:space-y-4">
              {['Menu', 'Gallery', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm uppercase tracking-wider"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">Visit Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-gold-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  First Floor, Block 1, SATYANARAYANA ENCLAVE,<br />
                  Block-F, Madinaguda, Durga Estates, Miyapur,<br />
                  Hyderabad, Telangana 500049.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={20} className="text-gold-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  9052210101
                </span>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={20} className="text-gold-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  reserve@jaaju.com
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between text-sm border-b border-white/5 pb-2">
                <span className="text-gray-400">Sun - Thu</span>
                <span className="text-white text-right">12:00 PM - 11:30 PM</span>
              </li>
              <li className="flex justify-between text-sm border-b border-white/5 pb-2">
                <span className="text-gray-400">Fri - Sat</span>
                <span className="text-white text-right">12:00 PM - 12:30 AM</span>
              </li>
              <li className="flex justify-between text-sm border-b border-white/5 pb-2">
                <span className="text-gold-400">Happy Hours (Mon-Fri, Sun)</span>
                <span className="text-white text-right">12:00 PM - 7:00 PM</span>
              </li>
              <li className="mt-8">
                <a
                  href="https://www.google.com/maps/reserve/v/dine/c/M12ULfueilI?source=pa&opi=79508299&hl=en-IN&gei=VvMUapD2LrnPqfkP2vb38Ak&ahbb=1&sourceurl=https://www.google.com/maps/preview/place?hl%3Den%26gl%3Din%26authuser%3D0%26pb%3D!1m17!1s0x3bcb930331200c33:0x29b09e7ca3fd5ea3!3m12!1m3!1d1861.3322327893684!2d78.33897623223298!3d17.495613271718998!2m3!1f0!2f0!3f0!3m2!1i1280!2i665!4f13.1!4m2!3d17.495803368674874!4d78.33847269415855!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m2!1s8dAUatvLH6jgseMPkpfdyAc!7e81!15m111!1m29!4e2!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m17!3b1!4b1!5b1!6b1!9b1!13b1!14b1!17b1!20b1!21b1!22b1!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!90m2!1m1!1e2!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!128m1!1b1!21m28!1m6!1m2!1i0!2i0!2m2!1i530!2i665!1m6!1m2!1i1230!2i0!2m2!1i1280!2i665!1m6!1m2!1i0!2i0!2m2!1i1280!2i20!1m6!1m2!1i0!2i645!2m2!1i1280!2i665!22m2!1e81!8e1!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i780!39sJaaju%2BKitchen%2B%2526%2BBar%26q%3DJaaju%2BKitchen%2B%2526%2BBar%2B%25E0%25B0%259C%25E0%25B0%25BE%25E0%25B0%259C%25E0%25B1%2581%2B%25E0%25B0%2595%25E0%25B0%25BF%25E0%25B0%259A%25E0%25B1%2586%25E0%25B0%25A8%25E0%25B1%258D%2B%2526%2B%25E0%25B0%25AC%25E0%25B0%25BE%25E0%25B0%25B0%25E0%25B1%258D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-6 py-3 bg-white/5 hover:bg-gold-400 hover:text-charcoal-950 border border-white/10 hover:border-gold-400 text-white text-xs tracking-widest uppercase transition-all duration-300"
                >
                  Book a Table
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Jaaju Kitchen & Bar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-gray-500 hover:text-white text-xs tracking-wider">Privacy Policy</Link>
            <Link to="#" className="text-gray-500 hover:text-white text-xs tracking-wider">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
