
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo className="h-12" />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-blue-600">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">(555) 123-4567</span>
            </div>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">
                Reviews
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </a>
              <div className="flex items-center text-blue-600 pt-2">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-semibold">(555) 123-4567</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
