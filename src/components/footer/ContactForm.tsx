
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactForm = () => {
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
    <div>
      <h4 className="text-2xl font-light mb-8 text-white">Get Property Information</h4>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500 h-12"
            required
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500 h-12"
          />
        </div>
        
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500 h-12"
          required
        />
        
        <Textarea
          name="message"
          placeholder="Message (optional)"
          value={formData.message}
          onChange={handleInputChange}
          className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500 min-h-[120px] resize-none"
        />
        
        <Button 
          type="submit"
          className="w-full bg-white text-black hover:bg-gray-100 font-light text-base h-12"
        >
          Request Information
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
