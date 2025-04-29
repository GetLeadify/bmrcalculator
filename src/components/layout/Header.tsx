import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-cyan-700 hover:text-cyan-800 transition-colors"
        >
          <Activity className="h-7 w-7" />
          <span className="text-xl font-bold">BMR Calculator</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
          >
            Home
          </Link>
          <a 
            href="#calculator" 
            className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
          >
            Calculator
          </a>
          <a 
            href="#about" 
            className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
          >
            About BMR
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-cyan-600 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#calculator" 
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calculator
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About BMR
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;