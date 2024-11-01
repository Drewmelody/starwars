import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold tracking-wider">STAR WARS</a>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition">News</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Video</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Films</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Series</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Games</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition">
              Sign In
            </button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-4 py-6 space-y-4">
            <a href="#" className="block text-gray-300 hover:text-white transition">News</a>
            <a href="#" className="block text-gray-300 hover:text-white transition">Video</a>
            <a href="#" className="block text-gray-300 hover:text-white transition">Films</a>
            <a href="#" className="block text-gray-300 hover:text-white transition">Series</a>
            <a href="#" className="block text-gray-300 hover:text-white transition">Games</a>
            <button className="w-full px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;