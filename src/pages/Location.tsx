
import Navigation from "@/components/Navigation";
import LocationMap from "@/components/LocationMap";
import LuxuryDestinations from "@/components/LuxuryDestinations";
import ClimateInfo from "@/components/ClimateInfo";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Car, Plane, Shield, Waves } from "lucide-react";

const Location = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1504611726019-0e840e158b7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full text-sm tracking-[0.2em] uppercase mb-8">
                Prime Coastal Position
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-extralight mb-12 tracking-[-0.02em] text-white leading-none">
              Unrivaled Location
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide opacity-95">
              Dana Point's Most Exclusive Address
            </p>
            <p className="text-lg mb-16 max-w-4xl mx-auto opacity-90 leading-relaxed font-light">
              Strategically positioned within the guard-gated enclave of Monarch Bay, offering unparalleled 
              access to Southern California's most coveted destinations while maintaining absolute privacy.
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

        {/* Full Width Map */}
        <div className="mb-16">
          <LocationMap />
        </div>

        {/* Mediterranean Climate Excellence - moved under map */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-black mb-16 tracking-wide">Mediterranean Climate Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-full shadow-inner"></div>
              </div>
              <h3 className="text-2xl font-light text-black mb-4">Year-Round Sunshine</h3>
              <p className="text-gray-600 font-light leading-relaxed">275+ pristine days of California sunshine with mild Mediterranean climate perfection</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-2 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-light text-black mb-4">Optimal Temperatures</h3>
              <p className="text-gray-600 font-light leading-relaxed">Average highs 77°F, lows 50°F. Consistently comfortable luxury living conditions</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-2 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-light text-black mb-4">Pacific Influence</h3>
              <p className="text-gray-600 font-light leading-relaxed">Natural climate moderation with refreshing ocean breezes and coastal serenity</p>
            </div>
          </div>
        </div>

        {/* Luxury Destinations */}
        <div className="mb-24">
          <LuxuryDestinations />
        </div>

        {/* Climate Information */}
        <ClimateInfo />
      </div>
      
      <Footer />
    </div>
  );
};

export default Location;
