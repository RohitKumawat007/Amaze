import React from "react";

const Discount = () => {
  return (
    /* We add a margin-x and rounded corners to the whole section to make it look like a separate 'block' */
    <section className="px-4 md:px-10 pb-10">
      <div className="w-full bg-zinc-100 text-[#1a1a1a] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden relative shadow-sm">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Side */}
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-black"></span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500">Limited Drop</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter leading-none">
                Essential <br /> 
                <span className="font-serif italic font-normal">Minimalist</span>
              </h1>
              
              <div className="bg-black text-white px-4 py-1 w-fit rounded-lg rotate-[-2deg]">
                 <p className="text-xl font-bold tracking-tight">50% Off Selects</p>
              </div>

              <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
                Premium fabrics meets intentional design. Shop our curated season finale collection.
              </p>

              <button className="mt-4 px-10 py-4 bg-black text-white rounded-full font-bold text-xs tracking-[0.2em] hover:scale-105 transition-transform">
                SHOP THE SALE
              </button>
            </div>

            {/* Image Side */}
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="/public/images/banners/bnr4.jpg" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                  alt="Discount Banner"
                />
              </div>

              {/* Promo Badge */}
              <div className="absolute -bottom-4 -right-2 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="text-right">
                  <p className="text-[9px] uppercase font-bold text-zinc-400">Code</p>
                  <p className="text-sm font-black italic">AMZ_50</p>
                </div>
                <div className="h-10 w-[1px] bg-zinc-200"></div>
                <span className="text-3xl font-serif italic font-bold">50%</span>
              </div>
            </div>

          </div>
        </div>

        {/* Large Background Decorative Text */}
        <div className="absolute top-10 right-10 opacity-[0.03] select-none pointer-events-none hidden lg:block">
          <h2 className="text-[12rem] font-black italic tracking-tighter uppercase">SALE</h2>
        </div>
      </div>
    </section>
  );
};

export default Discount;