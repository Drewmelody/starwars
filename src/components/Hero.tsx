import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1579566346927-c68383817a25?auto=format&fit=crop&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Mandalorian
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Journey through the galaxy with the legendary bounty hunter and his companion Grogu.
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
  );
};

export default Hero;