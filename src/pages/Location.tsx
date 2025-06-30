import Navigation from "@/components/Navigation";
import LocationMap from "@/components/LocationMap";
import LuxuryDestinations from "@/components/LuxuryDestinations";
import ClimateInfo from "@/components/ClimateInfo";
import Footer from "@/components/Footer";

const Location = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(30, 41, 59, 0.4)), url('https://images.unsplash.com/photo-1504611726019-0e840e158b7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-extralight mb-8 tracking-[0.05em] text-white">
              Prime Coastal Location
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90 font-light tracking-wide">
              Unparalleled Access & Exclusivity
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Discover the unrivaled advantages of 126 Monarch Bay's strategic positioning, 
              offering seamless access to luxury destinations, cultural experiences, and 
              essential amenities.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
