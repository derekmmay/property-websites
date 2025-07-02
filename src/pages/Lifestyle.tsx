
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
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full text-sm tracking-[0.2em] uppercase mb-8">
                Curated Experiences
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-extralight mb-12 tracking-[-0.02em] text-white leading-none">
              Lifestyle
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide opacity-95">
              Where Luxury Meets Pacific Serenity
            </p>
            <p className="text-lg mb-16 max-w-4xl mx-auto opacity-90 leading-relaxed font-light">
              Immerse yourself in the sophisticated coastal culture of Dana Point, where world-class amenities, 
              cultural experiences, and natural beauty converge to create an unparalleled lifestyle.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        
        {/* Living Experience Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-black mb-8 tracking-wide">Living in Dana Point</h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Experience the refined elegance of coastal California living, where every day feels like a retreat.
            </p>
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Luxury coastal living"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-medium mb-1">Ocean Views</h3>
                <p className="text-sm opacity-90">Wake up to endless Pacific horizons</p>
              </div>
            </div>
            
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Marina lifestyle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-medium mb-1">Harbor Living</h3>
                <p className="text-sm opacity-90">Waterfront luxury at your doorstep</p>
              </div>
            </div>
            
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Luxury dining"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-medium mb-1">Culinary Scene</h3>
                <p className="text-sm opacity-90">World-class dining experiences</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lifestyle Categories */}
        <div className="text-center mb-32">
          <h2 className="text-5xl font-light text-black mb-20 tracking-wide">Daily Experiences</h2>
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
