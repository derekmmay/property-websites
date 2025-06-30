
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info and Compass Logo */}
          <div className="space-y-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-4xl font-light mb-10 tracking-wide text-white">Susan Chase</h4>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-2 h-2 bg-white rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 text-xl font-light hover:text-white transition-colors duration-300">(949) 949-9499</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-2 h-2 bg-white rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 font-light hover:text-white transition-colors duration-300">susan@compass.com</span>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-white rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 font-light hover:text-white transition-colors duration-300">
                    DRE License #123456
                  </span>
                </div>
              </div>
            </div>

            {/* Compass Logo with enhanced styling */}
            <div className="pt-8 border-t border-gray-700/50">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                  <img 
                    src="/lovable-uploads/9935b2a7-c9a4-4e38-b0e8-15f3e21f8dc4.png" 
                    alt="Compass Real Estate" 
                    className="h-8 w-auto"
                  />
                </div>
                <div className="text-gray-400 text-sm font-light">
                  Luxury Real Estate Specialist
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Lead Form */}
          <div className="relative">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur-xl"></div>
            
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-10 rounded-2xl border border-gray-700/50 backdrop-blur-sm shadow-2xl">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
              
              <h4 className="text-3xl font-light mb-10 tracking-wide text-white relative z-10">Get Property Information</h4>
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-black/40 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-black/60 transition-all duration-300 h-14 font-light rounded-lg backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-black/40 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-black/60 transition-all duration-300 h-14 font-light rounded-lg backdrop-blur-sm"
                    />
                  </div>
                </div>
                
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-black/40 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-black/60 transition-all duration-300 h-14 font-light rounded-lg backdrop-blur-sm"
                  required
                />
                
                <Textarea
                  name="message"
                  placeholder="Message (optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-black/40 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-black/60 transition-all duration-300 min-h-[140px] font-light resize-none rounded-lg backdrop-blur-sm"
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white font-light text-lg h-14 tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-[1.02] rounded-lg"
                >
                  Request Information
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Enhanced Footer Bottom */}
        <div className="border-t border-gray-700/50 mt-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm font-light">Website created by:</span>
              <a 
                href="https://brandsynk.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-all duration-300 hover:scale-105 p-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
              >
                <img 
                  src="/lovable-uploads/84f43fff-7a9a-4259-b8f7-9393caadff14.png" 
                  alt="BroSynk Logo" 
                  className="h-6 w-auto"
                />
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <p className="text-gray-400 text-sm font-light">
                © 2025 All rights reserved
              </p>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
