import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Anuv Jain",
    role: "A singer from India",
    content: "The fabric feels premium, the fit is effortless, and the design is timeless. This brand really understands modern elegance without being loud. I’ll definitely be ordering again.",
    image: "public/images/banners/cmt1.webp"
  },
  {
    id: 2,
    name: "Robert Pattinson",
    role: "A actor from Las Vegas",
    content: "I love how clean and understated the designs are. The materials feel luxurious without trying too hard. It’s become one of my go-to brands for everyday wear.",
    image: "public/images/banners/cmt2.webp"
  },
  {
    id: 3,
    name: "Noah Laurent",
    role: "A fitness trainer from France",
    content: "The silhouettes are sharp, the fabric is soft, and everything feels perfectly balanced. It’s rare to find fashion that feels this confident and timeless.",
    image: "public/images/banners/cmt3.webp"
  }
];

const Review = () => {
  return (
    <section className="px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto bg-[#f9f9f9] rounded-[3rem] md:rounded-[4rem] px-6 py-16 md:px-16 md:py-24 relative overflow-hidden shadow-sm">
        
        <div className="absolute top-10 left-10 opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-8xl md:text-[13rem] font-black italic uppercase tracking-tighter">Amaze</h2>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-xl">
             <div className="flex flex-col gap-2">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-zinc-900 leading-none">
                  Our Customer
                </h2>
                <div className="flex items-center gap-4">
                   <div className="h-1.5 w-20 bg-black rounded-full" />
                   <h2 className="text-4xl md:text-6xl font-serif italic font-light text-zinc-800">
                     Testimonials
                   </h2>
                </div>
             </div>
          </div>
          <p className="text-zinc-500 text-sm md:text-base max-w-sm leading-relaxed font-normal">
            Our brand is very trusted. You can see from the reviews of our exclusive global community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-700 group border border-zinc-100/50"
            >
              <div className="mb-6">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11L8 17H5L7 11H5V7H11V11H10ZM18 11L16 17H13L15 11H13V7H19V11H18Z" fill="#ff5c35" />
                </svg>
              </div>

              <p className="text-zinc-700 text-sm md:text-base leading-relaxed mb-8 min-h-[80px]">
                "{item.content}"
              </p>

              <div className="flex gap-1 mb-10">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-zinc-50">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-zinc-100 ring-4 ring-zinc-50 transition-transform duration-500 group-hover:scale-110">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm md:text-base tracking-tight">{item.name}</h4>
                  <p className="text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-bold">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;