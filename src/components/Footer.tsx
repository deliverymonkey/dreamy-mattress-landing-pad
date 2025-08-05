
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo className="h-12" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Premium white glove mattress delivery service serving nationwide. 
              We handle everything from delivery to setup with professional care and attention to detail.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 rounded-lg p-2">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Call for Immediate Service</p>
                <p className="text-blue-400 text-lg font-bold">(213) 980-7171</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>White Glove Delivery</li>
              <li>Room Setup Service</li>
              <li>Old Mattress Removal</li>
              <li>Assembly Service</li>
              <li>Weekend Delivery</li>
              <li>Same Day Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>Nationwide Service</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>(213) 980-7171</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>info@mattressdelivery.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-blue-400" />
                <span>Mon-Sat: 8AM-8PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Mattress Delivery Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">License & Insurance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
