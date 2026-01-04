import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomeSlider = () => {
  const slides = [
    {
      id: 1,
      leftImage: "https://img.freepik.com/free-photo/smiley-man-posing-grey-wall_23-2148448892.jpg",
      rightImage: "https://images.othoba.com/images/thumbs/0659629_exclusive-premium-quality-multicolor-half-sleeve-casual-printed-shirt-for-men-collection-by-fine-tex.webp",
      title: "Urban Edge",
      subtitle: "The 2026 Summer Series",
      tag: "Handcrafted",
    },
    {
      id: 2,
      leftImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      rightImage: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      title: "Silk Route",
      subtitle: "Elegance in Motion",
      tag: "Limited Edition",
    },
  ];

  return (
    <div className="w-full bg-[#111] overflow-hidden relative h-[500px] sm:h-[700px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: { shadow: true, translate: ["-20%", 0, -1] },
          next: { translate: ["100%", 0, 0] },
        }}
        autoplay={{ delay: 5000 }}
        speed={1000}
        loop
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative w-full h-full grid grid-cols-12 overflow-hidden">
                
                {/* 1. Left Image: The "Deep" Layer */}
                <div className="col-span-12 md:col-span-7 h-full relative overflow-hidden">
                  <img
                    src={slide.leftImage}
                    className={`h-full w-full object-cover transition-transform duration-[5000ms] ${isActive ? 'scale-110 rotate-2' : 'scale-100'}`}
                    alt="Fashion Model"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>

                {/* 2. Right Image: The "Focus" Layer with Clip-Path */}
                <div 
                  className="hidden md:block absolute right-0 top-0 w-1/2 h-full z-10 overflow-hidden"
                  style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                >
                  <img
                    src={slide.rightImage}
                    className={`h-full w-full object-cover transition-all duration-[3000ms] ${isActive ? 'scale-100 translate-x-0' : 'scale-125 translate-x-20'}`}
                    alt="Product Detail"
                  />
                </div>

                {/* 3. The "Floating" Floating Text Content */}
                <div className="absolute inset-0 z-20 flex items-center justify-start px-10 md:px-24">
                  <div className="max-w-xl">
                    <div className={`overflow-hidden`}>
                        <span className={`inline-block text-amber-500 font-mono tracking-widest text-sm mb-4 transition-transform duration-700 ${isActive ? 'translate-y-0' : 'translate-y-full'}`}>
                          // {slide.tag}
                        </span>
                    </div>
                    
                    <h2 className="text-white text-6xl md:text-9xl font-black uppercase leading-[0.85] mb-6">
                      <span className="block">{slide.title.split(' ')[0]}</span>
                      <span className="block text-transparent stroke-text">{slide.title.split(' ')[1]}</span>
                    </h2>

                    <p className={`text-gray-300 text-lg md:text-xl font-light tracking-wide transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                      {slide.subtitle}
                    </p>

                    <div className="mt-10 flex items-center gap-8">
                      <button className="group relative px-8 py-4 bg-white text-black font-bold uppercase text-xs tracking-[0.2em] transition-all hover:bg-amber-500">
                        Explore Now
                        <span className="absolute -bottom-2 -right-2 w-full h-full border border-white/30 -z-10 group-hover:bottom-0 group-hover:right-0 transition-all"></span>
                      </button>
                      
                      <div className="hidden sm:flex items-center gap-4 text-white/50 text-xs tracking-tighter uppercase">
                        <span className="w-12 h-[1px] bg-white/30"></span>
                        Scroll to discover
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10 flex items-end p-10">
                   <div className="flex gap-4">
                      {/* Social links or page indicators could go here */}
                   </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px white;
          paint-order: stroke fill;
        }
        .swiper-pagination-bullet {
          width: 40px !important;
          height: 4px !important;
          border-radius: 0 !important;
          background: rgba(255,255,255,0.2) !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #f59e0b !important; /* amber-500 */
        }
      `}</style>
    </div>
  );
};

export default HomeSlider;