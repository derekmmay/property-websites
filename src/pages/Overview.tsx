
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PropertyDescription from "@/components/PropertyDescription";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

const Overview = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <PropertyDescription />
          </div>
          
          <div className="space-y-12">
            {/* Sidebar content removed */}
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
