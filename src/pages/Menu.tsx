import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

const MENU_PAGES = [
  "https://lh3.googleusercontent.com/p/AF1QipP8sGDFVxHflOAwc4P4kDchVyjWGfSk4TpB4hzL=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipNvOV05QarlkTGybBoSvHjKP0zTDD3KJlElLyxA=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPArdVgQ5yx0sFvhULSG6whkch8IPvRHtkyDwRJ=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPFCmz4fMuPpe3RfPNU_Y95CiQBS2J1JP5u3a3v=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipPguWoy64AkTMDKvGxsV4sDN24KEK8fWbVfIf9U=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMr1YQn_2e8NLB97GrrNCBCNQKVH21vO4PGCPhJ=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMxDyl6o2udPsf9R-7c9Rawr35Ecfixe1cthTxk=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipNhv0fWogWciS3PMYm7YtqziMOQLrKupBcKbWe4=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMYOF1R7s2I-Xwt1jmmTAaVbC-_QtVKCc5j__RZ=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipNHpuHLLR18AkNMph2uPMxCBsas33xLjnfekH2r=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOk6co3n45wSXyokY4TSsAHIXCmJGkRL1FAhB9V=s1360-w1360-h1020-rw",
];

export default function Menu() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 md:px-8 bg-charcoal-950 relative overflow-hidden">
      {/* Premium Cinematic Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl"
          >
            Our <span className="italic text-gradient-gold">Menu</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-xs md:text-sm tracking-widest uppercase"
          >
            Savor the culinary journey. Explore our complete selection of authentic flavors.
          </motion.p>
        </div>

        {/* Menu Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-full mx-auto">
          {MENU_PAGES.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
              className="flex flex-col bg-charcoal-900/30 rounded-lg overflow-hidden border border-white/5 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-gold-400/20"
            >
              {/* Header Label above Image */}
              <div className="px-5 py-3.5 bg-charcoal-900/60 border-b border-white/5 flex justify-between items-center">
                <span className="font-serif text-xs text-gray-400 tracking-wider">
                  Jaaju Kitchen & Bar
                </span>
                <span className="font-sans text-[0.65rem] tracking-widest text-gold-400 uppercase bg-gold-400/5 px-2.5 py-1 rounded border border-gold-400/10">
                  Page {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Image Frame */}
              <div className="w-full bg-[#141211] overflow-hidden">
                <img
                  src={url}
                  alt={`Jaaju Menu Page ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-contain select-none"
                  draggable="false"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
