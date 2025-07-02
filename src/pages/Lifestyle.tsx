
import Navigation from "@/components/Navigation";
import EventsCalendar from "@/components/EventsCalendar";
import LuxuryDestinations from "@/components/LuxuryDestinations";
import Footer from "@/components/Footer";
import { Waves, Utensils, Palette, Ship, Mountain, Sun } from "lucide-react";

const Lifestyle = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-[-0.02em] text-white leading-none">
              Lifestyle
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-light tracking-wide opacity-95">
              Where Luxury Meets Pacific Serenity
            </p>
            <p className="text-lg mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed font-light">
              Immerse yourself in the sophisticated coastal culture of Dana Point, where world-class amenities, 
              cultural experiences, and natural beauty converge to create an unparalleled lifestyle.
            </p>
          </div>
        </div>
      </div>

      {/* Lifestyle Stats Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-light text-black mb-16 text-center tracking-wide">Coastal Living Excellence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-4">275+</div>
              <p className="text-gray-600 font-light">Sunny Days Per Year</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-4">5-Star</div>
              <p className="text-gray-600 font-light">Resort Amenities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-4">2 min</div>
              <p className="text-gray-600 font-light">To Private Beach</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-4">Year-Round</div>
              <p className="text-gray-600 font-light">Perfect Climate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        
        {/* Living Experience Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-black mb-8 tracking-wide">Living in Dana Point</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Experience the refined elegance of coastal California living, where every day feels like a retreat.
            </p>
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1625029117304-2f0299e7b544?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dana Point coastline"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-medium mb-1">Pacific Coastline</h3>
                <p className="text-sm opacity-90">Pristine Dana Point beaches</p>
              </div>
            </div>
            
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Harbor and marina lifestyle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-medium mb-1">Dana Point Harbor</h3>
                <p className="text-sm opacity-90">World-class marina lifestyle</p>
              </div>
            </div>
            
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1496104004320-65356cee6048?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Beach community lifestyle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-medium mb-1">Beach Community</h3>
                <p className="text-sm opacity-90">Active coastal living</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lifestyle Categories */}
        <div className="text-center mb-32">
          <h2 className="text-4xl font-light text-black mb-20 tracking-wide">Daily Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-800 transition-colors duration-300">
                <Waves className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-6">Ocean Activities</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Private beach access, world-class surfing, deep-sea fishing, and exclusive yacht charters 
                to Catalina Island and beyond.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-800 transition-colors duration-300">
                <Utensils className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-6">Culinary Excellence</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Michelin-starred restaurants, exclusive wine tastings, private chef experiences, 
                and artisanal farmers markets.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-800 transition-colors duration-300">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-6">Arts & Culture</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Gallery openings, cultural festivals, live performances, and exclusive access 
                to Orange County's premier art scene.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-800 transition-colors duration-300">
                <Ship className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-6">Marina Life</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Dana Point Harbor, luxury yacht clubs, sailing regattas, and waterfront dining 
                at the region's most exclusive venues.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-800 transition-colors duration-300">
                <Mountain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-6">Recreation</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Championship golf courses, tennis clubs, hiking trails, and exclusive 
                fitness facilities with ocean views.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gray-800 transition-colors duration-300">
                <Sun className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-6">Wellness</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Luxury spas, wellness retreats, meditation gardens, and holistic health 
                practitioners in serene coastal settings.
              </p>
            </div>
          </div>
        </div>
        
        {/* Events Calendar Section */}
        <div className="mb-32">
          <EventsCalendar />
        </div>

        {/* Luxury Destinations Section */}
        <div className="mb-24">
          <LuxuryDestinations />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Lifestyle;
