
import Navigation from "@/components/Navigation";
import LocationMap from "@/components/LocationMap";
import LuxuryDestinations from "@/components/LuxuryDestinations";
import ClimateInfo from "@/components/ClimateInfo";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Car, Plane } from "lucide-react";

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

      {/* Location Stats */}
      <div className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-extralight text-black mb-4">2 min</div>
              <p className="text-gray-600 font-light">to Beach Access</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extralight text-black mb-4">15 min</div>
              <p className="text-gray-600 font-light">to Newport Beach</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extralight text-black mb-4">45 min</div>
              <p className="text-gray-600 font-light">to Beverly Hills</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extralight text-black mb-4">60 min</div>
              <p className="text-gray-600 font-light">to LAX Airport</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Transportation & Access */}
        <div className="mb-24">
          <h2 className="text-5xl font-light text-black mb-16 text-center tracking-wide">Seamless Connectivity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-light text-black mb-4">Private Drive</h3>
                <p className="text-gray-600 font-light">Gated community with 24/7 security and private beach access</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-light text-black mb-4">Aviation Access</h3>
                <p className="text-gray-600 font-light">John Wayne Airport 20 minutes, LAX 60 minutes via helicopter</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-light text-black mb-4">Strategic Position</h3>
                <p className="text-gray-600 font-light">Equidistant from Los Angeles and San Diego metropolitan areas</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-light text-black mb-4">Year-Round Access</h3>
                <p className="text-gray-600 font-light">Perfect climate ensures unrestricted access to all amenities</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map and Destinations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <LocationMap />
          <LuxuryDestinations />
        </div>
      </div>

      <ClimateInfo />
      
      <Footer />
    </div>
  );
};

export default Location;
