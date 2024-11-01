import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    title: "Star Wars: The Acolyte",
    subtitle: "STREAMING JUNE 4 ON DISNEY+",
    description: "Watch the new trailer for Star Wars: The Acolyte and experience the series June 4 on Disney+.",
    image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?auto=format&fit=crop&q=80",
    category: "SERIES"
  },
  {
    id: 2,
    title: "The Mandalorian & Grogu",
    subtitle: "IN THEATERS 2025",
    description: "The Mandalorian and Grogu embark on their greatest adventure yet, heading to the big screen.",
    image: "https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?auto=format&fit=crop&q=80",
    category: "FILM"
  },
  {
    id: 3,
    title: "Star Wars Outlaws",
    subtitle: "COMING 2024",
    description: "Experience the first-ever open world Star Wars game, coming in 2024.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    category: "GAMES"
  }
];

const HomeSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="relative h-screen group">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<button class="${className}">
              <div class="h-1 bg-gray-600 rounded-full">
                <div class="h-full bg-yellow-400 rounded-full transition-all duration-500 transform origin-left"></div>
              </div>
              <span class="text-xs mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">
                ${slides[index].title}
              </span>
            </button>`;
          }
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s]"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform: `scale(${activeIndex === index ? 1.1 : 1})`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              <div className="relative h-full container mx-auto px-4 flex items-center">
                <div className="max-w-2xl">
                  <span className="inline-block px-4 py-1 bg-yellow-400 text-black font-semibold rounded-full mb-4">
                    {slide.category}
                  </span>
                  <h2 className="text-5xl md:text-7xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-yellow-400 font-semibold mb-4">
                    {slide.subtitle}
                  </p>
                  <p className="text-lg text-gray-200 mb-8">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition flex items-center gap-2">
                      <Play size={20} />
                      Watch Now
                    </button>
                    <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 z-10 flex justify-between pointer-events-none">
          <button className="swiper-button-prev w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition pointer-events-auto">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-button-next w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition pointer-events-auto">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Custom Pagination */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="swiper-pagination flex gap-4"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default HomeSlider;