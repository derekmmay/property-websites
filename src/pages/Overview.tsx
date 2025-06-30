
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PropertyStats from "@/components/PropertyStats";
import PropertyDescription from "@/components/PropertyDescription";
import Footer from "@/components/Footer";

const Overview = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PropertyStats />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <PropertyDescription />
          
          <div className="space-y-8">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                alt="Luxury master bedroom"
                className="w-full h-full object-cover"
              />
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light mb-6 text-gray-800">Property Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-600">Year Built</span>
                    <span className="font-medium">1979 (Remodeled 2003)</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-600">Lot Size</span>
                    <span className="font-medium">11,000 sq ft (0.25 acre)</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-600">Architecture</span>
                    <span className="font-medium">Custom Design</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-600">Views</span>
                    <span className="font-medium">Ocean & Catalina Island</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Community</span>
                    <span className="font-medium">Guard-Gated Monarch Bay</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light mb-6 text-gray-800">Luxury Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Badge variant="outline" className="justify-center py-2">Wine Room (1,200 bottles)</Badge>
                  <Badge variant="outline" className="justify-center py-2">Five-Hole Putting Green</Badge>
                  <Badge variant="outline" className="justify-center py-2">Spa & Built-in BBQ</Badge>
                  <Badge variant="outline" className="justify-center py-2">Entertainment Room</Badge>
                  <Badge variant="outline" className="justify-center py-2">Gourmet Kitchen</Badge>
                  <Badge variant="outline" className="justify-center py-2">Private Beach Access</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Overview;
