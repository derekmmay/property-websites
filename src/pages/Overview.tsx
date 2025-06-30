
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PropertyStats from "@/components/PropertyStats";
import PropertyDescription from "@/components/PropertyDescription";
import PhotoGallery from "@/components/PhotoGallery";
import AgentInfo from "@/components/AgentInfo";
import Footer from "@/components/Footer";

const Overview = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <PropertyStats />
        
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <PropertyDescription />
          </div>
          
          <div className="space-y-12">
            <AgentInfo />
            
            <Card className="border-0 shadow-xl bg-gray-50">
              <CardContent className="p-12">
                <h3 className="text-3xl font-light mb-8 text-black">Property Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <span className="text-gray-600 font-light">Year Built</span>
                    <span className="font-medium text-black">1979 (Renovated 2003)</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <span className="text-gray-600 font-light">Lot Size</span>
                    <span className="font-medium text-black">11,000 sq ft (0.25 acre)</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <span className="text-gray-600 font-light">Architecture</span>
                    <span className="font-medium text-black">Custom Contemporary</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <span className="text-gray-600 font-light">Views</span>
                    <span className="font-medium text-black">Panoramic Ocean & Catalina</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-light">Community</span>
                    <span className="font-medium text-black">Guard-Gated Monarch Bay</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-black text-white">
              <CardContent className="p-12">
                <h3 className="text-3xl font-light mb-8">Exclusive Amenities</h3>
                <div className="grid grid-cols-1 gap-4">
                  <Badge variant="outline" className="justify-center py-3 border-white/20 text-white hover:bg-white/10">
                    1,200-Bottle Wine Sanctuary
                  </Badge>
                  <Badge variant="outline" className="justify-center py-3 border-white/20 text-white hover:bg-white/10">
                    Five-Hole Putting Green
                  </Badge>
                  <Badge variant="outline" className="justify-center py-3 border-white/20 text-white hover:bg-white/10">
                    Resort-Style Spa & BBQ
                  </Badge>
                  <Badge variant="outline" className="justify-center py-3 border-white/20 text-white hover:bg-white/10">
                    Private Entertainment Suite
                  </Badge>
                  <Badge variant="outline" className="justify-center py-3 border-white/20 text-white hover:bg-white/10">
                    Chef's Gourmet Kitchen
                  </Badge>
                  <Badge variant="outline" className="justify-center py-3 border-white/20 text-white hover:bg-white/10">
                    Exclusive Beach Access
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div id="gallery">
        <PhotoGallery />
      </div>
      
      <Footer />
    </div>
  );
};

export default Overview;
