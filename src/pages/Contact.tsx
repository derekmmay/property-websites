
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')`
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-7xl md:text-8xl font-extralight mb-8 tracking-[-0.02em] text-white leading-none">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-95 font-light tracking-wide">
              Inquire About 126 Monarch Bay
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed font-light">
              Connect with our luxury property specialists for detailed information and personalized assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-black mb-6 tracking-wide">Get in Touch</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            For inquiries, additional information, or to discuss this exceptional oceanfront estate, 
            our dedicated team is ready to assist you with every detail.
          </p>
        </div>

        {/* Contact Methods - Centered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Phone Contact */}
          <Card className="border-0 shadow-xl bg-black text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Direct Line</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Immediate assistance for qualified buyers
              </p>
              <p className="text-2xl font-medium text-white mb-6">(949) 949-9499</p>
              <Button className="bg-white hover:bg-gray-100 text-black px-8 py-3 text-base font-light tracking-wide">
                Call Now
              </Button>
            </CardContent>
          </Card>

          {/* Email Contact */}
          <Card className="border-0 shadow-xl bg-gray-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-4">Email Inquiry</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Detailed property information and documentation
              </p>
              <p className="text-2xl font-medium text-black mb-6">susan@compass.com</p>
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-base font-light tracking-wide">
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information Section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 p-12 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-light text-black mb-6">126 Monarch Bay Drive</h3>
            <p className="text-xl text-gray-600 mb-4">Dana Point, CA 92660</p>
            <p className="text-lg text-gray-500 mb-8">Guard-Gated Monarch Bay Community</p>
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto">
                This property is offered exclusively through authorized representatives. 
                All inquiries require pre-qualification and are handled with complete confidentiality. 
                Property details and pricing subject to verification and change without notice. 
                DRE License #123456789.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
