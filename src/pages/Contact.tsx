import Navigation from "@/components/Navigation";
import AgentInfo from "@/components/AgentInfo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-5xl font-light text-gray-800 mb-8">Contact Us</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              For inquiries, showings, or additional information, please reach out to our dedicated team. 
              We are available to assist you with every aspect of this extraordinary property.
            </p>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-gray-800 mb-6">Schedule a Private Tour</h3>
                <p className="text-gray-600 mb-6">
                  Experience 126 Monarch Bay firsthand. Schedule a private tour to explore the exquisite 
                  details and unparalleled luxury of this exceptional estate.
                </p>
                <Button className="w-full luxury-gradient hover:opacity-90 text-white">
                  Request a Tour
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <AgentInfo />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
