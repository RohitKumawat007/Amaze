import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          <div className="lg:col-span-1 group">
            <h2 className="text-4xl font-serif italic tracking-tight mb-2 transition-transform duration-500 group-hover:scale-110 origin-left cursor-default">
              Amaze
            </h2>
            <p className="text-[12px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
              PREMIUM WEAR
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <ul className="space-y-4 text-[13px] uppercase tracking-[0.2em] font-bold text-zinc-400">
              <li className="hover:text-white hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out">New Arrivals</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out">Collection</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out">Brands</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <ul className="space-y-4 text-[13px] uppercase tracking-[0.2em] font-bold text-zinc-400">
              <li className="hover:text-white hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out">Our Story</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out">Sustainability</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <ul className="space-y-4 text-[13px] uppercase tracking-[0.2em] font-bold text-zinc-400">
              <li className="hover:text-white hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out">Shipping</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out">Returns</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out">Support</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <ul className="space-y-4 text-[13px] uppercase tracking-[0.2em] font-bold text-zinc-400">
              <li className="hover:text-white hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out">Privacy Policy</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out">Terms of Use</li>
              <li className="hover:text-white hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out">Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[1px] bg-zinc-800 mb-12"></div>

        <div className="flex flex-col items-center justify-center gap-10">
          
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:border-white transition-all duration-500 cursor-pointer group">
              <img src="/public/images/icons/instagram.png" alt="Instagram" className="w-5 h-5 object-contain group-hover:invert transition-all duration-500" />
            </div>
            
            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:border-white transition-all duration-500 cursor-pointer group">
              <img src="/public/images/icons/twitter.png" alt="Twitter" className="w-5 h-5 object-contain group-hover:invert transition-all duration-500" />
            </div>
            
            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:border-white transition-all duration-500 cursor-pointer group">
              <img src="/public/images/icons/facebook.png" alt="Facebook" className="w-5 h-5 object-contain group-hover:invert transition-all duration-500" />
            </div>
            
            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:border-white transition-all duration-500 cursor-pointer group">
              <img src="/public/images/icons/social.png" alt="Pinterest" className="w-5 h-5 object-contain group-hover:invert transition-all duration-500" />
            </div>
          </div>

          <p className="text-[12px] text-zinc-500 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Amaze. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;