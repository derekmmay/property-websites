
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import AgentInfo from "@/components/AgentInfo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div 
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(30, 41, 59, 0.5)), url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-light mb-4 font-playfair tracking-wide">Get In Touch</h1>
          <p className="text-xl opacity-90 font-light tracking-wide">Schedule Your Private Showing</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-light mb-8 text-gray-800">Contact Information</h2>
            <AgentInfo />
            
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-8">
              <img 
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury property exterior"
                className="w-full h-full object-cover"
              />
            </div>
            
            <Card className="border-0 shadow-lg mt-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light mb-6 text-gray-800">Property Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Address:</span>
                    <span className="font-medium">126 Monarch Bay, Dana Point</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium">$13,500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">MLS® #:</span>
                    <span className="font-medium">OC25145377</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">Luxury Residential</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light mb-6 text-gray-800">Send Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name *" />
                  <Input placeholder="Last Name *" />
                </div>
                <Input type="email" placeholder="Email *" />
                <Input type="tel" placeholder="Phone *" />
                <Textarea 
                  placeholder="Comment *" 
                  rows={6}
                  className="resize-none"
                />
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
