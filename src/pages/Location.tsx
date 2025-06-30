import { useState } from "react";
import Navigation from "@/components/Navigation";
import InteractiveMap from "@/components/InteractiveMap";
import ClimateInfo from "@/components/ClimateInfo";
import Footer from "@/components/Footer";
import { MapPin, Clock, Car, Plane, Shield, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const [isMapInteractive, setIsMapInteractive] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Map Section - Interactive Map Only */}
      <div className="h-screen relative">
        <InteractiveMap 
          latitude={33.4734}
          longitude={-117.7018}
          zoom={15}
          className="w-full h-full"
        />
        
        {/* Overlay content */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white z-10 max-w-4xl mx-auto px-4 pointer-events-auto">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full text-sm tracking-[0.2em] uppercase mb-8">
                Prime Coastal Position
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extralight mb-12 tracking-[-0.02em] leading-none">
              Unrivaled Location
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide">
              Dana Point's Most Exclusive Address
            </p>
          </div>
        </div>
      </div>

      {/* Travel Times - moved right under hero */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-light text-black mb-16 text-center tracking-wide">Seamless Connectivity</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-4">2 min</div>
              <p className="text-gray-600 font-light">Beach Access</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-4">20 min</div>
              <p className="text-gray-600 font-light">John Wayne Airport</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-4">45 min</div>
              <p className="text-gray-600 font-light">Beverly Hills</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-4">60 min</div>
              <p className="text-gray-600 font-light">LAX Airport</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        
        {/* Key Location Benefits */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-black mb-16 tracking-wide">Strategic Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-4">Guard-Gated Security</h3>
              <p className="text-gray-600 font-light leading-relaxed">24/7 private security within the exclusive Monarch Bay enclave</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Waves className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-4">Private Beach Access</h3>
              <p className="text-gray-600 font-light leading-relaxed">Exclusive coastline access with pristine beaches and water activities</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-4">Central Location</h3>
              <p className="text-gray-600 font-light leading-relaxed">Equidistant from Los Angeles and San Diego metropolitan areas</p>
            </div>
          </div>
        </div>

        {/* Climate Information */}
        <ClimateInfo />
      </div>
      
      <Footer />
    </div>
  );
};

export default Location;
