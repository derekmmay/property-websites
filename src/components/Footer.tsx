
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Property Info */}
          <div>
            <h3 className="text-2xl font-light mb-6 tracking-wide">126 Monarch Bay</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              An extraordinary architectural masterpiece within the exclusive guard-gated 
              community of Monarch Bay, Dana Point.
            </p>
            <div className="text-3xl font-light text-white mb-4">$13,500,000</div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-medium mb-6 tracking-wide">Explore</h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">
                Overview
              </Link>
              <Link to="/location" className="block text-gray-300 hover:text-white transition-colors">
                Location
              </Link>
              <Link to="/lifestyle" className="block text-gray-300 hover:text-white transition-colors">
                Lifestyle
              </Link>
              <Link to="/schools" className="block text-gray-300 hover:text-white transition-colors">
                Schools
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-6 tracking-wide">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">(949) 949-9499</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">susan@compass.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-300">
                  126 Monarch Bay Drive<br />
                  Dana Point, CA 92660
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Luxury Real Estate. All rights reserved. | DRE License #123456
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
