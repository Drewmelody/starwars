import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      title: "The Mandalorian Season 4 Teaser",
      duration: "2:15",
      thumbnail: "https://images.unsplash.com/photo-1579566346927-c68383817a25?auto=format&fit=crop&q=80"
    },
    {
      title: "Ahsoka: Behind the Scenes",
      duration: "5:30",
      thumbnail: "https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?auto=format&fit=crop&q=80"
    },
    {
      title: "Star Wars Celebration 2024",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12">Featured Videos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center transform group-hover:scale-110 transition">
                  <Play size={20} className="text-black ml-1" />
                </div>
              </div>
              <span className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </span>
            </div>
            <h3 className="text-lg font-semibold group-hover:text-yellow-400 transition">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;