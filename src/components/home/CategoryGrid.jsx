import { useState } from "react";
import ProductRow from "./ProductRow";

const categories = ["Top Sale's", "Summer", "Winter", "Trending"];

export default function CategoryGrid() {
  const [activeCategory, setActiveCategory] = useState("Top Sale's");

  const filteredProducts = ProductRow.filter(
  (item) => item.category === activeCategory
);

  const addToCart = (product) => {
    console.log("Added to cart:", product);
  };

  const buyNow = (product) => {
    console.log("Buy now:", product);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 relative z-0">
      
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            OUR COLLECTION
          </h2>
          <div className="h-1 w-20 bg-black mt-2 rounded-full" />
        </div>

        <p className="text-xs md:text-sm text-gray-500 max-w-xs md:max-w-md">
          Step into the world of premium streetwear.
          Designed for bold looks and daily comfort.
        </p>
      </div>

      <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap gap-3 md:gap-4 mb-10 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-5 py-2 rounded-full border text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer
              ${
                activeCategory === cat
                  ? "bg-black text-white border-black shadow-lg"
                  : "bg-white text-gray-600 border-gray-200 hover:border-black"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group transition-transform duration-300"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/5] z-10">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 md:bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                <button
                  onClick={() => addToCart(product)}
                  className="w-[70%] py-2.5 bg-white text-black rounded-full text-xs md:text-sm font-bold
                             hover:bg-gray-100 active:scale-95 transition-all cursor-pointer shadow-xl"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => buyNow(product)}
                  className="w-[70%] py-2.5 border-2 border-white text-white rounded-full text-xs md:text-sm font-bold
                             hover:bg-white hover:text-black active:scale-95 transition-all cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className="mt-4 px-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-black transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{product.category || "Apparel"}</p>
                </div>
                <span className="text-sm md:text-base font-bold text-black">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
