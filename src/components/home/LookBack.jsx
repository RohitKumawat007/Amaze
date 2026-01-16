import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, currentIndex, aspectClass = "aspect-[4/3]" }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden ${aspectClass}`}>
      <div 
        className="flex h-full w-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Look ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

const LookBack = () => {
  const formalImages = [
    "public/images/banners/lookback1.jpg",
    "public/images/banners/lookback1.1.jpg", 
    "public/images/banners/lookback1.2.jpg"
  ];
  
  const summerImages = [
    "public/images/banners/lookback2.jpg",
    "public/images/banners/lookback2.1.jpg",
    "public/images/banners/lookback2.2.jpg"
  ];

  const streetImages = [
    "public/images/banners/lookback3.jpg",
    "public/images/banners/lookback3.1.jpg",
    "public/images/banners/lookback3.2.jpg"
  ];

  const [formalIndex, setFormalIndex] = useState(0);
  const [summerIndex, setSummerIndex] = useState(0);
  const [streetIndex, setStreetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFormalIndex((prev) => (prev + 1) % formalImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [formalImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSummerIndex((prev) => (prev + 1) % summerImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [summerImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStreetIndex((prev) => (prev + 1) % streetImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [streetImages.length]);


  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 relative z-0">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            LOOK BACK 2025
          </h2>
          <div className="h-1.5 w-20 bg-black mt-2 rounded-full" />
          <p className="text-sm md:text-base text-gray-500 max-w-xs md:max-w-md mt-6 leading-relaxed">
            A curated collection of our standout pieces from 2025, blending timeless style with modern trends.
          </p>
        </div>
        <div className="w-fit">
          <button className="group flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
            <span className="font-semibold text-sm">View Collection</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 lg:gap-8">
        
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden shadow-2xl group rounded-3xl">
            <ImageSlider images={formalImages} currentIndex={formalIndex} aspectClass="aspect-[4/3]" />
            
            <div className="absolute inset-0 flex pointer-events-none rounded-3xl overflow-hidden">
              <div className="w-1/2 h-full"></div>
              <div className="w-1/2 h-full bg-black/30 backdrop-blur-[2px]"></div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 pointer-events-none">
              <h3 className="text-4xl md:text-5xl font-serif italic tracking-tighter mix-blend-difference">
                formal look
              </h3>
              <p className="absolute bottom-6 left-6 text-[9px] uppercase tracking-[0.3em] font-bold">
                Formal collection
              </p>
            </div>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">01. Formal Lookbook</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative aspect-[4/3] bg-[#7a1a1a] overflow-hidden shadow-2xl rounded-3xl">
             <div className="absolute top-4 left-6 right-6">
                <h3 className="text-3xl font-serif font-black text-white/20 leading-none">
                  COLOR <br /> BURN
                </h3>
             </div>
             <div className="absolute right-4 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] text-white/60 text-[9px] uppercase tracking-[0.5em]">
                Summer collection
             </div>
             <div className="absolute bottom-0 left-0 w-[80%] h-[75%] bg-white border-r-[10px] border-t-[10px] border-[#7a1a1a] overflow-hidden rounded-bl-3xl rounded-tr-xl">
                <ImageSlider images={summerImages} currentIndex={summerIndex} aspectClass="h-full" />
             </div>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">02. Summer Lookbook</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative aspect-[4/3] bg-black overflow-hidden shadow-2xl rounded-3xl">
            <div className="absolute top-0 left-0 w-full h-1/2 opacity-40 grayscale overflow-hidden rounded-t-3xl">
                <ImageSlider images={streetImages} currentIndex={streetIndex} aspectClass="h-full" />
            </div>
            <div className="absolute right-2 top-0 text-white/10 text-8xl font-serif font-bold h-full [writing-mode:vertical-lr] select-none pointer-events-none">
              street
            </div>
            <div className="absolute bottom-6 right-6 w-[75%] h-[60%] bg-white p-1 shadow-[-15px_15px_40px_rgba(0,0,0,0.5)] overflow-hidden rounded-xl">
               <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <ImageSlider images={streetImages} currentIndex={streetIndex} aspectClass="h-full" />
                  <div className="absolute -left-10 bottom-2 [writing-mode:vertical-lr] text-[8px] uppercase tracking-widest text-black font-bold">
                    Street Edition
                  </div>
               </div>
            </div>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">03. Street Style Lookbook</p>
        </div>

      </div>
    </section>
  );
};

export default LookBack;