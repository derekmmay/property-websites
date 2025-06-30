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
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info and Compass Logo */}
          <div>
            {/* Contact Info */}
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-6 tracking-wide">Susan Chase</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-300">(949) 949-9499</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300">susan@compass.com</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-300">
                    DRE License #123456
                  </span>
                </div>
              </div>
            </div>

            {/* Compass Logo */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/9935b2a7-c9a4-4e38-b0e8-15f3e21f8dc4.png" 
                  alt="Compass Real Estate" 
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Lead Form */}
          <div>
            <h4 className="text-lg font-medium mb-6 tracking-wide">Get Property Information</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                required
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Textarea
                name="message"
                placeholder="Message (optional)"
                value={formData.message}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]"
              />
              <Button 
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 font-medium"
              >
                Request Information
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm">Website created by:</span>
              <a 
                href="https://brandsynk.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/lovable-uploads/84f43fff-7a9a-4259-b8f7-9393caadff14.png" 
                  alt="BroSynk Logo" 
                  className="h-6 w-auto"
                />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
