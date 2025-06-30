
import Navigation from "@/components/Navigation";
import EventsCalendar from "@/components/EventsCalendar";
import LuxuryDestinations from "@/components/LuxuryDestinations";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
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

      {/* Lifestyle Categories */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-light text-black mb-16 text-center tracking-wide">Curated Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
                  <Waves className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-light text-black mb-6">Ocean Activities</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Private beach access, world-class surfing, deep-sea fishing, and exclusive yacht charters 
                  to Catalina Island and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
                  <Utensils className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-light text-black mb-6">Culinary Excellence</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Michelin-starred restaurants, exclusive wine tastings, private chef experiences, 
                  and artisanal farmers markets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-light text-black mb-6">Arts & Culture</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Gallery openings, cultural festivals, live performances, and exclusive access 
                  to Orange County's premier art scene.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
                  <Ship className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-light text-black mb-6">Marina Life</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Dana Point Harbor, luxury yacht clubs, sailing regattas, and waterfront dining 
                  at the region's most exclusive venues.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
                  <Mountain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-light text-black mb-6">Recreation</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Championship golf courses, tennis clubs, hiking trails, and exclusive 
                  fitness facilities with ocean views.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
                  <Sun className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-light text-black mb-6">Wellness</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Luxury spas, wellness retreats, meditation gardens, and holistic health 
                  practitioners in serene coastal settings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Events and Destinations */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <EventsCalendar />
            </div>
            <div>
              <LuxuryDestinations />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Lifestyle;
