import { useEffect, useState, useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';
import { Star, ExternalLink, Quote, BadgeCheck } from 'lucide-react';

// Default Place ID
const PLACE_ID = (import.meta as any).env?.VITE_GOOGLE_PLACE_ID || 'ChIJD_x4Y3OQyjsR8YI-89sL6-Q'; // Placeholder Place ID

function ReviewsMarquee({ reviews, isHovered }: { reviews: any[], isHovered: boolean }) {
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollValue = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2);
    }
  }, [reviews]);

  useAnimationFrame((time, delta) => {
    if (isHovered) return;

    // Adjust speed here (higher delta multiplier = faster)
    let moveBy = (delta * 0.05);

    let newScrollValue = scrollValue.get() - moveBy;

    // Reset loop
    if (newScrollValue <= -contentWidth) {
      newScrollValue += contentWidth;
    }

    scrollValue.set(newScrollValue);
  });

  const x = useTransform(scrollValue, v => `${v}px`);

  // We duplicate reviews to create seamless infinite scrolling effect
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="overflow-hidden w-full relative -mx-6 px-6" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex gap-6 w-max py-4"
        // For mobile swipe
        drag="x"
        dragConstraints={{ right: 0, left: -contentWidth }}
      >
        {duplicatedReviews.map((review, i) => (
          <div
            key={`${review.name}-${i}`}
            className="w-[320px] md:w-[400px] shrink-0 bg-[#161616] p-8 rounded-2xl border border-white/5 relative hover:border-gold-400/30 transition-all duration-300"
            style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)' }}
          >
            <Quote className="absolute top-6 right-6 text-gold-400/10 w-12 h-12" />
            <div className="flex gap-1 mb-4 text-gold-400">
              {[...Array(review.rating || 5)].map((_, j) => (
                <Star key={j} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed italic text-sm line-clamp-4 relative z-10">
              "{review.text || review.content}"
            </p>
            <div className="flex items-center gap-4 mt-auto">
              {review.profilePhotoUrl ? (
                <img src={review.profilePhotoUrl} alt={review.authorName} className="w-10 h-10 rounded-full border border-gold-400/20" referrerPolicy="no-referrer" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center text-gold-400 border border-gold-400/20">
                  {review.authorName?.charAt(0) || 'G'}
                </div>
              )}
              <div>
                <h4 className="text-white font-serif tracking-wide text-sm">{review.authorName || review.name}</h4>
                <p className="text-gray-500 text-[10px] tracking-wider uppercase mt-0.5">{review.relativePublishTimeDescription || review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function RealReviewsContent() {
  const [isHovered, setIsHovered] = useState(false);

  // Fallback to static data as requested
  const fallbackTestimonials = [
    { name: "Arun Bhushan", role: "3 months ago", content: "Being a vegetarian was initially skeptical because of the limited vegetarian options available at this place, but I must say the quality and taste of the dishes made up for it. This is my second visit and both the times the dishes were really flavourful and well made. The service also was fast, prompt and well done. This will be one place I can keep coming back for sure. Would definitely recommend other to try this place.", rating: 5 },
    { name: "Kiran Sairam", role: "11 months ago", content: "Jaju Restaurant offers an amazing culinary experience! The food is absolutely delicious and bursting with authentic flavors. The hospitality is top-notch, and the service is prompt and courteous. The bar is well-stocked and perfectly complements the dining experience. A must-visit for anyone looking to enjoy great food and a welcoming atmosphere along with some wine..", rating: 5 },
    { name: "roshitha kota", role: "17 hours ago", content: "We had a very good experience. Staff was very polite. Our waitress was Shreya. She was very friendly  and polite. Worth the visit", rating: 5 },
    { name: "Kadiveti Kishan", role: "2 months ago", content: "I recently visited, and it was a wonderful experience. The ambiance was clean, comfortable, and perfect for both family dining and casual outings. The food was fresh and flavorful. I especially loved the Biryani, which was perfectly cooked and well-presented. The portion sizes were satisfying for the price. The staff were polite, attentive, and quick to respond to our requests. Service was smooth, and the waiting time was minimal. Overall, I highly recommend this restaurant to anyone looking for tasty food and good service. I will definitely visit again! lalchan and manish", rating: 5 },
    { name: "swetha peteti", role: "5 months ago", content: "We had two starters Rajamahendravaram panner vepudu, peri peri cheese balls both were good. Coming to the main course we have ordered jaaju special veg pulav and garlic naan with aavakay panner curry which was very tasty and new dish which we haven’t tried previously. Overall it was a great experience with family", rating: 5 },
    { name: "alok bhattacharjee", role: "5 months ago", content: "🌟 Ambience & Atmosphere - The restaurant offers a modern yet cozy vibe, with both indoor and outdoor seating options. Many reviewers highlight the pleasant atmosphere, making it suitable for group dinners or relaxed evenings. The interiors are stylish, and the outdoor seating adds a refreshing touch.", rating: 5 },
    { name: "Suresh Anala", role: "4 months ago", content: "Jaaju Kitchen & Bar is an absolute vibe 🔥🍻 — the perfect destination to chill, unwind, and feast in style. The food here is truly next level 🤌✨ — bold flavors, authentic touches, and a comforting yet elevated feel in every bite. 🌟 Must-try dishes (don’t miss these!) 🍖 Mutton Keema Ragimudha with Nalli Bokkala Kura – pure soul food! The ragimudha is soft and rustic, the keema is packed with flavor, and the nalli bokkala kura takes it to a whole new level 🤤🔥 🍗 Avakai Chicken Keema Kajjikayalu – a brilliant twist! Crispy on the outside, spicy and tangy on the inside, with that punch of avakai magic 💥😍 Great ambiance 🎶✨, amazing food 🍽️, and a perfect place to relax with friends 🍺🙌. If you’re a food lover who enjoys bold Andhra flavors with a modern touch — Jaaju Kitchen & Bar is a must-visit! ⭐⭐⭐⭐⭐", rating: 5 }
  ];

  return (
    <div
      className="mt-12 md:mt-20 relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 px-4 md:px-0">
        <div className="flex items-center gap-4 bg-glass border border-white/5 p-4 rounded-2xl shadow-xl">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-2 shadow-inner">
            <svg viewBox="0 0 24 24" className="w-full h-full"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-serif text-white">4.5</span>
              <div className="flex gap-1 text-gold-400">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
            </div>
            <p className="text-gray-400 text-sm">Thousands of Google Reviews</p>
          </div>
        </div>

        <a
          href={`https://search.google.com/local/reviews?placeid=${PLACE_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-charcoal-900 border border-gold-400/30 text-gold-400 px-6 py-3 rounded-full hover:bg-gold-400 hover:text-black transition-all duration-300 group shadow-[0_0_20px_rgba(212,175,55,0.1)]"
        >
          <span className="text-sm font-semibold tracking-wider font-serif">Write a Review</span>
          <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      <ReviewsMarquee reviews={fallbackTestimonials} isHovered={isHovered} />
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-charcoal-950 overflow-hidden relative">
      <div className="mx-auto px-4 md:px-8">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-2"
          >
            <BadgeCheck size={14} className="text-gold-400" />
            Verified Guest Diaries
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-white tracking-tight"
          >
            Words from our <span className="italic text-gold-400 font-medium">Patrons</span>
          </motion.h2>
        </div>

        <RealReviewsContent />
      </div>

      {/* Cinematic Edge Lighting */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-charcoal-900/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-charcoal-900/50 to-transparent pointer-events-none" />
    </section>
  );
}
