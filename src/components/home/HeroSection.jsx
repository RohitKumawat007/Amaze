import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full relative z-10">
      <div className="pt-24 md:pt-32 lg:pt-40 px-4 md:px-8 lg:px-16">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          <div className="flex flex-col gap-4 md:gap-6 order-2 lg:order-1">
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Shop the Latest <br className="hidden md:block" /> Trends
            </h1>

            <p className="text-gray-600 max-w-md text-sm md:text-base">
              Discover the latest trends & express your style effortlessly.
              Shop exclusive collections with premium designs, just for you.
            </p>

            <div className="w-fit">
              <button
                className="group flex items-center gap-3 px-6 py-3 rounded-full bg-black text-white 
                           transition-all duration-300 hover:scale-105"
              >
                <span>Shop Now</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pt-4 md:pt-8">
              
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">25 Million+</h3>
                <p className="text-xs md:text-sm text-gray-500 max-w-xs">
                  Real reviews from our happy customers. See what fashion lovers
                  are saying.
                </p>
              </div>

              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white bg-gray-200">
                    <img src={`/public/images/banners/p${num}.webp`} alt={`p${num}`}
                      className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-gray-200 order-1 lg:order-2">
            <img
              src="public/images/banners/bnr 1.jpg"
              alt="hero"
              className="w-full h-full object-cover"
            /> 
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          
          <div className="h-40 md:h-52 rounded-2xl bg-gray-200 overflow-hidden">
            <img
              src="/public/images/banners/bnr 2.jpg"
              alt="hero"
              className="w-full h-full object-cover"
            /> 
          </div>

          <div className="h-40 md:h-52 rounded-2xl bg-gray-200 overflow-hidden">
            <img
              src="/public/images/banners/bnr 3.webp"
              alt="hero"
              className="w-full h-full object-cover"
            /> 
          </div>

          <div className="h-40 md:h-52 rounded-2xl bg-gray-100 flex flex-col items-center justify-center text-center gap-3 px-6 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg md:text-xl font-semibold">
              Models wearing <br /> full outfits
            </h3>

            <div className="w-fit">
              <button
                className="px-5 py-2 rounded-full bg-black text-white text-sm
                           transition-all duration-300 hover:scale-105"
              >
                Explore More
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;