
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import LocationMap from "@/components/LocationMap";
import LuxuryDestinations from "@/components/LuxuryDestinations";

const Location = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div 
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(30, 41, 59, 0.5)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-light mb-4 font-playfair tracking-wide">Location & Community</h1>
          <p className="text-xl opacity-90 font-light tracking-wide">Exclusive Monarch Bay Living</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-light mb-6 text-gray-800">Monarch Bay Excellence</h2>
            
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury waterfront community"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg text-gray-600">
              <p>
                Monarch Bay represents one of Southern California's most exclusive oceanfront enclaves, 
                positioned at the prestigious southern end of Orange County near Laguna Beach. This 
                guard-gated community offers unparalleled privacy and luxury resort-style living.
              </p>
              <p>
                Residents enjoy exclusive private beach access and membership privileges at the 
                adjacent Waldorf Astoria Monarch Beach resort, creating a unique lifestyle that 
                seamlessly blends private home ownership with world-class resort amenities.
              </p>
            </div>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light mb-6 text-gray-800">Community Features</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">24/7 Guarded & Gated Security</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Private Beach Club Access</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Waldorf Astoria Resort Privileges</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Panoramic Ocean Views</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Custom Estate Architecture</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <LuxuryDestinations />
        <LocationMap />
      </div>
    </div>
  );
};

export default Location;
