
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Phone, Mail, Calendar, MapPin } from "lucide-react";

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
              Private Viewing
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-95 font-light tracking-wide">
              Exclusive Access to 126 Monarch Bay
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed font-light">
              Schedule a private viewing of this extraordinary oceanfront estate with our luxury property specialists.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-light text-black mb-8 tracking-wide">Get in Touch</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-12">
                For inquiries, private showings, or additional information about this exceptional property, 
                our dedicated team is available to assist you with every detail.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              {/* Featured Calendar Scheduling Card */}
              <Card className="border-0 shadow-2xl bg-black text-white hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                      <Calendar className="w-7 h-7 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-light text-white mb-3">Schedule Private Tour</h3>
                      <p className="text-white/80 mb-6 text-lg leading-relaxed">
                        Book an exclusive viewing appointment at your convenience
                      </p>
                      <Button className="bg-white hover:bg-gray-100 text-black px-10 py-4 text-lg font-light tracking-wide h-auto">
                        View Available Times
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gray-50 hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-black mb-2">Direct Line</h3>
                      <p className="text-gray-600 mb-4">Immediate assistance for qualified buyers</p>
                      <p className="text-xl font-medium text-black">(949) 949-9499</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gray-50 hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-black mb-2">Email Inquiry</h3>
                      <p className="text-gray-600 mb-4">Detailed property information and documentation</p>
                      <p className="text-xl font-medium text-black">susan@compass.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Property Location and Disclaimer */}
          <div className="space-y-12">
            {/* Property Location - Made smaller and less prominent */}
            <Card className="border-0 shadow-lg bg-gray-100">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-3 text-gray-800">Property Location</h3>
                    <p className="text-gray-600 mb-1 text-sm">126 Monarch Bay Drive</p>
                    <p className="text-gray-600 mb-1 text-sm">Dana Point, CA 92660</p>
                    <p className="text-gray-500 text-xs">Guard-Gated Monarch Bay Community</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <div className="bg-gray-50 p-8 rounded-none">
              <p className="text-sm text-gray-500 leading-relaxed">
                This property is offered exclusively through authorized representatives. 
                All showings require pre-qualification and are conducted by appointment only. 
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
