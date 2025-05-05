
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary py-4 border-b border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Dollar Keeper</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-secondary transition-colors">Home</Link>
          <Link to="/courses" className="text-white hover:text-secondary transition-colors">Courses</Link>
          <Link to="/about" className="text-white hover:text-secondary transition-colors">About</Link>
          <Link to="/contact" className="text-white hover:text-secondary transition-colors">Contact</Link>
          <Link to="/login">
            <Button variant="outline" className="border-secondary text-white hover:bg-secondary hover:text-primary">Login</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-secondary text-primary hover:bg-secondary/90">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-gray-800 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-secondary transition-colors py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/courses" className="text-white hover:text-secondary transition-colors py-2" onClick={toggleMenu}>Courses</Link>
            <Link to="/about" className="text-white hover:text-secondary transition-colors py-2" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="text-white hover:text-secondary transition-colors py-2" onClick={toggleMenu}>Contact</Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full border-secondary text-white hover:bg-secondary hover:text-primary">Login</Button>
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                <Button className="w-full bg-secondary text-primary hover:bg-secondary/90">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
