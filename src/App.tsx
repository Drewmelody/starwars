import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeSlider from './components/HomeSlider';
import NewsGrid from './components/NewsGrid';
import CharacterShowcase from './components/CharacterShowcase';
import VideoSection from './components/VideoSection';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="relative">
        <HomeSlider />
        <NewsGrid />
        <CharacterShowcase />
        <VideoSection />
        
        <footer className="bg-zinc-900 py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">More From Star Wars:</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
                  <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
                  <a href="#" className="text-gray-400 hover:text-white transition">YouTube</a>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                TM & © Lucasfilm Ltd. All Rights Reserved
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;