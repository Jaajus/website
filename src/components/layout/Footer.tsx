import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import JaajuLogo from '../../assets/jaaju.png';
import { cn } from '../../lib/utils';
import { useState } from 'react';
import ReservationModal from '../ReservationModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-charcoal-900 border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto px-6 lg:px-12">
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
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
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
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block w-full text-center px-6 py-3 bg-white/5 hover:bg-gold-400 hover:text-charcoal-950 border border-white/10 hover:border-gold-400 text-white text-xs tracking-widest uppercase transition-all duration-300"
                >
                  Book a Table
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Jaaju Kitchen & Bar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-xs tracking-wider">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-xs tracking-wider">Terms of Service</Link>
          </div>
        </div>
      </div>
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}
