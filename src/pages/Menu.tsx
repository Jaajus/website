import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const MENU = [
  {
    category: 'Soups',
    items: [
      { name: 'Munakkai Karapaku Rasam', price: '₹185' },
      { name: 'Kodi Miryala Charu', price: '₹185' },
      { name: 'Mutton Munakkai Soup', price: '₹275' },
      { name: 'Paya', price: '₹275' },
      { name: 'Manchow (Veg/Chicken)', price: '₹165/₹185' },
      { name: 'Hot n Sour (Veg/Chicken)', price: '₹165/₹185' },
    ],
  },
  {
    category: 'Salads',
    items: [{ name: 'Garden Green Salad', price: '₹125' }],
  },
  {
    category: 'Veg Starters',
    items: [
      { name: 'Ulli Rings', price: '₹315' },
      { name: 'Mokkajonna Karapaku Garelu', price: '₹315' },
      { name: 'Thotakura Liver Fry', price: '₹345' },
      { name: 'Baby Corn Karakari', price: '₹355' },
      { name: 'Mushroom Cheese Balls', price: '₹355' },
      { name: 'Puttagodugu Jeedipappu Vepudu', price: '₹345' },
      { name: 'Salt & Pepper Mushroom', price: '₹345' },
      { name: 'Pachimirchi Paneer Vepudu', price: '₹415' },
      { name: 'Rajamahendravaram Paneer Vepudu', price: '₹415' },
      { name: 'Crispy Corn', price: '₹315' },
      { name: 'Peri Peri Mozzarella Cheese Shots', price: '₹315' },
      { name: 'Corn Cheese Roll', price: '₹355' },
      { name: 'Cashew Fry', price: '₹365' },
    ],
  },
  {
    category: 'Non Veg Starters',
    items: [
      { name: 'Kodiguddu Vellulikaram', price: '₹345' },
      { name: 'Orugallu Chicken Wings', price: '₹425' },
      { name: 'Jeedipappu Kodi Vepudu', price: '₹425' },
      { name: 'Bandi Style Kaju Kodi', price: '₹445' },
      { name: 'Pepper Chicken', price: '₹435' },
      { name: 'Nalla Karam Kodi Vepudu', price: '₹445' },
      { name: 'Jaaju Kodi Rekulu', price: '₹445' },
      { name: 'Konaseema Kodi Vepudu (Regular/Karivepaku)', price: '₹445' },
    ],
  },
  {
    category: 'Seafood & Other Starters',
    items: [
      { name: 'Coriander Chicken', price: '₹445' },
      { name: 'Chicken Drumstick', price: '₹425' },
      { name: 'Chicken 65', price: '₹435' },
      { name: 'Natukodi Vepudu', price: '₹495' },
      { name: 'Miryala Mutton Vepudu (B/L)', price: '₹565' },
      { name: 'Vetamamsam Vepudu (B/L)', price: '₹565' },
      { name: 'Uppada Chepa Vepudu', price: '₹435' },
      { name: 'Chepa Chips', price: '₹435' },
      { name: 'Apollo Fish', price: '₹435' },
      { name: 'Fish Fingers', price: '₹435' },
      { name: 'Chitti Royyalu Vellulikaram', price: '₹495' },
      { name: 'Loose Prawns', price: '₹495' },
      { name: 'Peethala Vepudu', price: '₹555' },
    ],
  },
  {
    category: 'From the Claypot',
    items: [
      { name: 'Malai Broccoli', price: '₹395' },
      { name: 'Paneer Tikka', price: '₹415' },
      { name: 'Tangdi Kebab (4 pcs)', price: '₹445' },
      { name: 'Karvepaku Kodi Kebab', price: '₹445' },
      { name: 'Kothimeera Kodi Kebab', price: '₹445' },
      { name: 'Pandumirchi Kodi Kebab', price: '₹445' },
      { name: 'Murg Malai Kebab', price: '₹445' },
      { name: 'Tandoori Chicken (Half)', price: '₹395' },
      { name: 'Tandoori Royyalu', price: '₹495' },
      { name: 'Ajwain Fish Tikka', price: '₹445' },
    ],
  },
  {
    category: 'Veg Gravies',
    items: [
      { name: 'Guthivankaya Kura', price: '₹355' },
      { name: 'Puttagodugu Jeedipappu Kura', price: '₹355' },
      { name: 'Pesarapunugula Kura', price: '₹295' },
      { name: 'Avakai Paneer Kura', price: '₹395' },
      { name: 'Paneer (Butter/Kadai/Methi)', price: '₹395' },
      { name: 'Tomato Cashew Curry', price: '₹365' },
      { name: 'Mixed Veg / Kadai Veg Curry', price: '₹345' },
      { name: 'Dal (Tadka/Fry/Tomato)', price: '₹275' },
    ],
  },
  {
    category: 'Non Veg Gravies',
    items: [
      { name: 'Kodiguddu Iguru', price: '₹345' },
      { name: 'Kakinada Kodi Kura', price: '₹425' },
      { name: 'Gongura Kodi Kura', price: '₹425' },
      { name: 'Chicken (Kadai/Methi/Butter)', price: '₹425' },
      { name: 'Godavari Chepala Pulusu Kura', price: '₹375' },
      { name: 'Telangana Yata Mamsam Kura', price: '₹549' },
      { name: 'Mutton Rogan Josh', price: '₹549' },
      { name: 'Royyala Iguru', price: '₹495' },
    ],
  },
  {
    category: 'Pulaos & Biryanis',
    items: [
      { name: 'Guthivankaya Pulao', price: '₹355' },
      { name: 'Gongura Vankaya Pulao', price: '₹355' },
      { name: 'Paneer Tikka Biryani', price: '₹415' },
      { name: 'Gongura Paneer Pulao', price: '₹415' },
      { name: 'Pachimirchi Paneer Pulao', price: '₹415' },
      { name: 'Jaaju Spl Veg Pulao', price: '₹415' },
      { name: 'Kaju Mushroom Pulao', price: '₹395' },
      { name: 'Thotakura Liver Pulao', price: '₹365' },
      { name: 'Egg Roast Pulao', price: '₹375' },
      { name: 'Naatu Kodi Pulao', price: '₹495' },
      { name: 'Kakinada Kodi Pulao', price: '₹445' },
      { name: 'Konaseema Kodi Pulao (B/L)', price: '₹465' },
      { name: 'Pachimirchi Kodi Pulao', price: '₹455' },
      { name: 'Gongura Kodi Pulao', price: '₹455' },
      { name: 'Ulavacharu Kodi Pulao', price: '₹455' },
      { name: 'Chicken Fry Piece Biryani', price: '₹455' },
      { name: 'Chicken Tikka Biryani', price: '₹455' },
      { name: 'Gundamma Mutton Pulao', price: '₹555' },
      { name: 'Mutton Fry Piece Biryani', price: '₹555' },
      { name: 'Mutton Kheema Pulao', price: '₹595' },
      { name: 'Nalli Ghosh Biryani', price: '₹645' },
      { name: 'Godavari Royyala Pulao', price: '₹525' },
    ],
  },
  {
    category: 'Flavored Rice',
    items: [
      { name: 'Pallipodi Neyyi Annam', price: '₹295' },
      { name: 'Muddapappu Avakai Annam', price: '₹295' },
      { name: 'Pappucharu Annam', price: '₹295' },
      { name: 'Ragi Mudda (2 pcs)', price: '₹245' },
      { name: 'Curd Rice', price: '₹255' },
      { name: 'Fried Rice (Veg/Egg/Chicken)', price: '₹295/325/345' },
      { name: 'Bandi Style Fried Rice (Veg/Egg/Chicken)', price: '₹295/325/345' },
    ],
  },
  {
    category: 'Breads',
    items: [
      { name: 'Roti (Plain/Butter)', price: '₹40/50' },
      { name: 'Naan (Plain/Butter/Garlic)', price: '₹65/75/85' },
      { name: 'Kulcha (Plain/Masala)', price: '₹69/79' },
      { name: 'Lachha Paratha / Malabar Paratha', price: '₹69' },
      { name: 'Phulka (2 pcs)', price: '₹79' },
      { name: 'Neyyi Chapathi', price: '₹59' },
    ],
  },
  {
    category: 'Kids Corner',
    items: [
      { name: 'French Fries (Plain/Peri Peri)', price: '₹295' },
      { name: 'Paneer Kurkure', price: '₹415' },
      { name: 'Chicken Nuggets', price: '₹365' },
      { name: 'Chicken Popcorn (Plain/Peri Peri)', price: '₹415' },
    ],
  },
  {
    category: 'Jaaju Combos',
    items: [
      { name: 'Ragi Mudda Kodi Kura', price: '₹415' },
      { name: 'Godavari Chepala Pulusu with Plain Rice', price: '₹365' },
      { name: 'Bagara Rice with Mutton Dalcha', price: '₹475' },
      { name: 'Pappucharu Annam with Chicken Fry', price: '₹415' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Jaaju Special Delight', price: '₹225' },
      { name: 'Birds Nest', price: '₹225' },
      { name: 'Bobbatlu with Coconut Ice Cream', price: '₹195' },
      { name: 'Bellam Junnu', price: '₹145' },
      { name: 'Fried Ice Cream', price: '₹195' },
      { name: 'Choice Ice Cream (Vanilla/Chocolate)', price: '₹155' },
    ],
  },
  {
    category: 'Accompaniments',
    items: [
      { name: 'Soft Drinks', price: '₹70' },
      { name: 'Packaged Water Bottle (H/F)', price: '₹25/50' },
      { name: 'Butter Milk', price: '₹100' },
    ],
  },
];

const BAR_MENU = [
  {
    category: 'Beers',
    items: [
      { name: 'Budweiser (Pint)', price: '₹289' },
      { name: 'Budweiser (Bucket of 6)', price: '₹1599' },
      { name: 'Budweiser Magnum (Pint)', price: '₹329' },
      { name: 'Budweiser Magnum (Bucket of 6)', price: '₹1849' },
      { name: 'Kingfisher Ultra (Pint)', price: '₹289' },
      { name: 'Kingfisher Ultra (Bucket of 6)', price: '₹1599' },
      { name: 'Kingfisher Premium (Pint)', price: '₹259' },
      { name: 'Kingfisher Premium (Bucket of 6)', price: '₹1449' },
      { name: 'Heineken (Pint)', price: '₹349' },
      { name: 'Heineken (Bucket of 6)', price: '₹1949' },
      { name: 'Hoegaarden (Pint)', price: '₹529' },
      { name: 'Hoegaarden (Bucket of 6)', price: '₹2899' },
      { name: 'Corona (Pint)', price: '₹499' },
      { name: 'Corona (Bucket of 6)', price: '₹2799' },
      { name: 'Bira White (Pint)', price: '₹329' },
      { name: 'Bira White (Bucket of 6)', price: '₹1699' },
      { name: 'Bacardi Breezer', price: '₹289' },
    ],
  },

  {
    category: 'Beer On Tap',
    items: [
      { name: 'Kingfisher Tap Beer (Mug)', price: '₹219' },
      { name: 'Kingfisher Tap Beer (Pitcher)', price: '₹999' },
      { name: 'Kingfisher Tap Beer (Tower)', price: '₹1899' },
      { name: 'Budweiser Tap Beer (Mug)', price: '₹219' },
      { name: 'Budweiser Tap Beer (Pitcher)', price: '₹999' },
      { name: 'Budweiser Tap Beer (Tower)', price: '₹1899' },
    ],
  },

  {
    category: 'Vodka',
    items: [
      { name: 'Smirnoff (30 ML)', price: '₹169' },
      { name: 'Smirnoff (Full Bottle)', price: '₹3499' },
      { name: 'Absolut (30 ML)', price: '₹249' },
      { name: 'Absolut (Full Bottle)', price: '₹4999' },
      { name: 'Grey Goose (30 ML)', price: '₹449' },
      { name: 'Grey Goose (Full Bottle)', price: '₹7999' },
    ],
  },

  {
    category: 'Gin',
    items: [
      { name: 'Bombay Sapphire (30 ML)', price: '₹249' },
      { name: 'Bombay Sapphire (Full Bottle)', price: '₹5199' },
      { name: 'Beefeater (30 ML)', price: '₹229' },
      { name: 'Beefeater (Full Bottle)', price: '₹5199' },
    ],
  },

  {
    category: 'Rum',
    items: [
      { name: 'Bacardi Rum (30 ML)', price: '₹169' },
      { name: 'Bacardi Rum (Full Bottle)', price: '₹3499' },
      { name: 'Old Monk (30 ML)', price: '₹149' },
      { name: 'Old Monk (Full Bottle)', price: '₹2999' },
    ],
  },

  {
    category: 'Brandy',
    items: [
      { name: 'Mansion House (30 ML)', price: '₹149' },
      { name: 'Mansion House (Full Bottle)', price: '₹2999' },
      { name: 'Morpheus (30 ML)', price: '₹169' },
      { name: 'Morpheus (Full Bottle)', price: '₹3499' },
      { name: 'Kyron (30 ML)', price: '₹169' },
      { name: 'Kyron (Full Bottle)', price: '₹3499' },
    ],
  },

  {
    category: 'Single Malt',
    items: [
      { name: 'Glenfiddich 12 Years (30 ML)', price: '₹649' },
      { name: 'Glenlivet 12 Years (30 ML)', price: '₹649' },
      { name: 'Monkey Shoulder (30 ML)', price: '₹599' },
      { name: 'Indri (30 ML)', price: '₹449' },
      { name: 'Amrut (30 ML)', price: '₹449' },
    ],
  },

  {
    category: 'Scotch',
    items: [
      { name: 'JW Black Label (30 ML)', price: '₹449' },
      { name: 'JW Red Label (30 ML)', price: '₹259' },
      { name: 'Chivas Regal 18 Years (30 ML)', price: '₹749' },
      { name: 'Chivas Regal 12 Years (30 ML)', price: '₹429' },
      { name: "Dewar's 15 Years (30 ML)", price: '₹449' },
      { name: "Teacher's 12 Years (30 ML)", price: '₹429' },
    ],
  },

  {
    category: 'Blended Whisky',
    items: [
      { name: 'Black Dog 8 Years (30 ML)', price: '₹249' },
      { name: '100 Pipers 12 Years (30 ML)', price: '₹299' },
      { name: 'Black & White (30 ML)', price: '₹249' },
      { name: "Ballantine's (30 ML)", price: '₹299' },
      { name: "Dewar's White Label (30 ML)", price: '₹249' },
      { name: "Teacher's 50 (30 ML)", price: '₹429' },
    ],
  },

  {
    category: 'Shots',
    items: [
      { name: 'Jagerbomb', price: '₹599' },
      { name: 'Jagermeister', price: '₹549' },
      { name: 'Baileys Irish Cream', price: '₹449' },
      { name: 'Tequila', price: '₹299' },
    ],
  },

  {
    category: 'Irish / Japanese / Bourbon',
    items: [
      { name: 'Jameson Irish Whisky (30 ML)', price: '₹299' },
      { name: 'Jim Beam (30 ML)', price: '₹249' },
      { name: "Jack Daniel's (30 ML)", price: '₹349' },
      { name: 'Suntory Toki (30 ML)', price: '₹499' },
    ],
  },

  {
    category: 'Wine & Champagne',
    items: [
      { name: 'Sula Dindori Shiraz Red', price: '₹599' },
      { name: 'Sula Riesling White', price: '₹549' },
      { name: 'Sula Rose', price: '₹599' },
      { name: "Jacob's Creek Pinot Noir Champagne (Bottle)", price: '₹5999' },
    ],
  },

  {
    category: 'Mocktails',
    items: [
      { name: 'Virgin Mojito', price: '₹249' },
      { name: 'Litchi Passion', price: '₹249' },
      { name: 'Kiwi Kraze', price: '₹249' },
      { name: 'Caribbean Mango', price: '₹249' },
      { name: 'Creamy Coco', price: '₹249' },
      { name: 'Virgin Pina Colada', price: '₹249' },
      { name: 'Guava Blast', price: '₹249' },
      { name: "Pine O'Orange", price: '₹249' },
    ],
  },
];

function MenuItem({ name, price }: { name: string; price: string }) {
  return (
    <div className="group py-3">
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-base md:text-[1.05rem] text-white leading-snug group-hover:text-gold-300 transition-colors">
          {name}
        </span>
        <span className="flex-1 border-b border-dashed border-white/10 min-w-[1.5rem] mb-1" />
        <span className="font-serif text-base md:text-[1.05rem] text-gold-400 tabular-nums shrink-0">
          {price}
        </span>
      </div>
    </div>
  );
}

function CategoryNav({
  activeCategory,
  onSelectCategory,
  variant,
}: {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  variant: 'mobile' | 'sidebar';
}) {
  const isMobile = variant === 'mobile';

  return (
    <nav
      className={
        isMobile
          ? 'flex gap-2 overflow-x-auto pb-1 scrollbar-none'
          : 'space-y-0.5'
      }
    >
      {MENU.map((section) => {
        const isActive = activeCategory === section.category;

        return (
          <button
            key={section.category}
            type="button"
            onClick={() => onSelectCategory(section.category)}
            className={
              isMobile
                ? `shrink-0 px-4 py-2 rounded-full text-[0.65rem] tracking-[0.2em] uppercase border transition-all duration-300 ${
                    isActive
                      ? 'bg-gold-400/15 border-gold-400/40 text-gold-300'
                      : 'border-white/10 text-gray-500 hover:border-gold-400/25 hover:text-gold-400'
                  }`
                : `block w-full text-left px-3 py-2.5 text-[0.68rem] tracking-[0.18em] uppercase transition-all duration-300 border-l-2 ${
                    isActive
                      ? 'border-gold-400 text-gold-300 bg-gold-400/5'
                      : 'border-transparent text-gray-500 hover:text-gold-400 hover:border-gold-400/40'
                  }`
            }
          >
            {section.category}
          </button>
        );
      })}
    </nav>
  );
}

function BarCategoryNav({
  activeCategory,
  onSelectCategory,
  variant,
}: {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  variant: 'mobile' | 'sidebar';
}) {
  const isMobile = variant === 'mobile';

  return (
    <nav
      className={
        isMobile
          ? 'flex gap-2 overflow-x-auto pb-1 scrollbar-none'
          : 'space-y-0.5'
      }
    >
      {BAR_MENU.map((section) => {
        const isActive = activeCategory === section.category;

        return (
          <button
            key={section.category}
            type="button"
            onClick={() => onSelectCategory(section.category)}
            className={
              isMobile
                ? `shrink-0 px-4 py-2 rounded-full text-[0.65rem] tracking-[0.2em] uppercase border transition-all duration-300 ${
                    isActive
                      ? 'bg-gold-400/15 border-gold-400/40 text-gold-300'
                      : 'border-white/10 text-gray-500 hover:border-gold-400/25 hover:text-gold-400'
                  }`
                : `block w-full text-left px-3 py-2.5 text-[0.68rem] tracking-[0.18em] uppercase transition-all duration-300 border-l-2 ${
                    isActive
                      ? 'border-gold-400 text-gold-300 bg-gold-400/5'
                      : 'border-transparent text-gray-500 hover:text-gold-400 hover:border-gold-400/40'
                  }`
            }
          >
            {section.category}
          </button>
        );
      })}
    </nav>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-center mb-8 md:mb-10">
      <p className="text-gold-400/80 text-[10px] tracking-[0.35em] uppercase mb-3">
        Jaaju Kitchen & Bar
      </p>
      <h2 className="text-3xl md:text-[2.25rem] font-serif leading-tight">{title}</h2>
      <div className="flex items-center justify-center gap-3 mt-5">
        <span className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-gold-400/40" />
        <span className="w-1 h-1 rotate-45 bg-gold-400/70" />
        <span className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-gold-400/40" />
      </div>
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(MENU[0].category);
  const activeSection = MENU.find((section) => section.category === activeCategory) ?? MENU[0];

  const [barActiveCategory, setBarActiveCategory] = useState(BAR_MENU[0].category);
  const barActiveSection = BAR_MENU.find((section) => section.category === barActiveCategory) ?? BAR_MENU[0];

  return (
    <div className="pt-32 pb-24 min-h-screen px-4 md:px-8 bg-charcoal-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
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

        <div className="sticky top-24 z-20 -mx-4 px-4 py-4 mb-10 bg-charcoal-950/85 backdrop-blur-xl border-y border-white/5 lg:hidden">
          <CategoryNav
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            variant="mobile"
          />
        </div>

        <div className="flex gap-10 xl:gap-16">
          <aside className="hidden lg:block w-56 xl:w-60 shrink-0">
            <div className="sticky top-32 bg-charcoal-900/30 border border-white/5 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4 px-3">
                Categories
              </p>
              <CategoryNav
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                variant="sidebar"
              />
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.section
                key={activeSection.category}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl px-5 py-10 md:px-10 md:py-12 bg-charcoal-900/30 border border-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <SectionHeader title={activeSection.category} />

                <div
                  className={
                    activeSection.items.length > 4
                      ? 'grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-14'
                      : 'max-w-2xl mx-auto'
                  }
                >
                  {activeSection.items.map((item) => (
                    <div key={item.name} className="contents">
                      <MenuItem name={item.name} price={item.price} />
                    </div>
                  ))}
                </div>
              </motion.section>
            </AnimatePresence>
          </div>
        </div>



        <div className="mt-8 md:mt-16 sticky top-24 z-20 -mx-4 px-4 py-4 mb-10 bg-charcoal-950/85 backdrop-blur-xl border-y border-white/5 lg:hidden">
          <BarCategoryNav
            activeCategory={barActiveCategory}
            onSelectCategory={setBarActiveCategory}
            variant="mobile"
          />
        </div>

        <div className="mt-8 md:mt-16 flex gap-10 xl:gap-16">
          <aside className="hidden lg:block w-56 xl:w-60 shrink-0">
            <div className="sticky top-32 bg-charcoal-900/30 border border-white/5 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-4 px-3">
                Categories
              </p>
              <BarCategoryNav
                activeCategory={barActiveCategory}
                onSelectCategory={setBarActiveCategory}
                variant="sidebar"
              />
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.section
                key={barActiveSection.category}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl px-5 py-10 md:px-10 md:py-12 bg-charcoal-900/30 border border-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <SectionHeader title={barActiveSection.category} />

                <div
                  className={
                    barActiveSection.items.length > 4
                      ? 'grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-14'
                      : 'max-w-2xl mx-auto'
                  }
                >
                  {barActiveSection.items.map((item) => (
                    <div key={item.name} className="contents">
                      <MenuItem name={item.name} price={item.price} />
                    </div>
                  ))}
                </div>
              </motion.section>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
