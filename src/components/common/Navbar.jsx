import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [lockedCategory, setLockedCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const startCloseTimer = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActiveCategory(null);
      setLockedCategory(null);
    }, 1000); 
  };

  const categories = [
    { name: "New Arrivals", sub: ["Latest", "Trending", "Limited Edition", "New Drops"] },
    { name: "Collection", sub: ["Summer", "Winter", "Casual", "Formal", "Festive", "Activewear"] },
    { name: "Men", sub: ["T-Shirts", "Shirts", "Jeans", "Shoes", "Accessories", "Jackets"] },
    { name: "Women", sub: ["Dresses", "Tops", "Jeans", "Heels", "Handbags", "Jewelry"] },
    { name: "Kids", sub: ["Clothing", "Footwear", "School Wear", "Toys", "Baby Care"] },
    { name: "Brands", sub: ["Nike", "Adidas", "Puma", "Zara", "H&M", "Gucci"] },
  ];

  return (
    <header className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"
    }`}>
      
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-8 lg:px-16 border-b">
        
        <div className="flex items-center gap-4 lg:gap-8 flex-1">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition"
          >
            <img src="/images/icons/menu.png" alt="menu" className="w-6 h-6" />
          </button>

          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-xs focus-within:bg-white focus-within:ring-1 focus-within:ring-black transition">
            <img src="/images/icons/search.png" alt="search" className="w-4 h-4 opacity-50" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent border-none outline-none text-sm ml-2 w-full"
            />
          </div>
        </div>

        <div className="flex-none">
          <h1 className="text-xl md:text-2xl tracking-tighter cursor-pointer font-semibold font-serif">
            AMAZE
          </h1>
        </div>

        <div className="flex items-center justify-end gap-2 md:gap-5 flex-1">
          <nav className="hidden xl:flex gap-6 text-sm font-semibold text-gray-500">
            <button className="hover:text-black transition">Blog</button>
            <button className="hover:text-black transition">Support</button>
          </nav>
          
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-full transition relative">
              <img src="/images/icons/like.png" className="w-5 h-5" alt="wishlist" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition relative">
              <img src="/images/icons/shopping-cart.png" className="w-5 h-5" alt="cart" />
              <span className="absolute top-1 right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-center gap-1 lg:gap-4 py-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onMouseEnter={() => !lockedCategory && setActiveCategory(cat)}
              onMouseLeave={() => !lockedCategory && setActiveCategory(null)}
              onClick={() => {
                setLockedCategory(lockedCategory?.name === cat.name ? null : cat);
                setActiveCategory(cat);
                startCloseTimer();
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory?.name === cat.name
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {activeCategory && (
        <div
          className="absolute left-0 w-full bg-white border-t shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300"
          onMouseEnter={() => clearTimeout(timerRef.current)}
          onMouseLeave={() => !lockedCategory && setActiveCategory(null)}
        >
          <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1">
              <h3 className="text-2xl font-bold mb-2">{activeCategory.name}</h3>
              <p className="text-gray-500 text-sm">Explore our latest arrivals and signature pieces.</p>
              <button className="mt-4 text-sm font-bold border-b-2 border-black">View All</button>
            </div>
            
            <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
              {activeCategory.sub.map((item) => (
                <div key={item} className="group cursor-pointer">
                  <span className="text-gray-800 group-hover:text-black group-hover:translate-x-2 transition-transform inline-block">
                    {item}
                  </span>
                  <div className="h-px w-0 group-hover:w-full bg-black transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible z-[100]" : "opacity-0 invisible -z-10"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          isMenuOpen ? "translate-x-0 z-[101]" : "-translate-x-full z-[101]"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <span className="text-xl font-semibold font-serif">AMAZE</span>
          <button onClick={() => setIsMenuOpen(false)} className="p-2">
             <img src="/images/icons/cross.png" alt="close" className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-6 space-y-2 overflow-y-auto h-[calc(100vh-80px)]">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Shop Categories</p>
          {categories.map((cat) => (
            <details key={cat.name} className="group">
              <summary className="list-none flex justify-between items-center py-3 text-lg font-medium cursor-pointer">
                {cat.name}
                <span className="group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="pl-4 space-y-3 pb-4 border-l-2 border-gray-100 ml-1">
                {cat.sub.map(s => (
                  <a key={s} href="#" className="block text-gray-500 hover:text-black">{s}</a>
                ))}
              </div>
            </details>
          ))}
          
          <div className="h-px bg-gray-100 my-6" />
          
          <div className="space-y-4 font-semibold text-gray-600">
            <a href="#" className="block">My Account</a>
            <a href="#" className="block">Order Tracking</a>
            <a href="#" className="block text-red-500">Logout</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;