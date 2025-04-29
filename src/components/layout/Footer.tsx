import { Link } from 'react-router-dom';
import { Activity, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 text-white mb-4">
              <Activity className="h-6 w-6" />
              <span className="text-lg font-bold">BMR Calculator</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Free online calculator to estimate your Basal Metabolic Rate (BMR) and daily calorie needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Calculator
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About BMR
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> at bmrcalculator.xyz
          </p>
          <p className="mt-2">
            &copy; {currentYear} BMR Calculator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;