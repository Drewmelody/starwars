import React from 'react';
import { ChevronRight } from 'lucide-react';

const NewsGrid = () => {
  const news = [
    {
      title: "Ahsoka Season 2 Announced",
      image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?auto=format&fit=crop&q=80",
      category: "Series"
    },
    {
      title: "The Acolyte: First Look",
      image: "https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?auto=format&fit=crop&q=80",
      category: "Coming Soon"
    },
    {
      title: "Star Wars Outlaws: Gameplay Reveal",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      category: "Games"
    }
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                {item.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition">
              {item.title}
            </h3>
            <button className="flex items-center text-gray-400 group-hover:text-white transition">
              Read More <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsGrid;