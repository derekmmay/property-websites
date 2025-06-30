import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import EventsCalendar from "@/components/EventsCalendar";
import ClimateInfo from "@/components/ClimateInfo";

const Lifestyle = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navigation />
      
      <div 
        className="relative h-64 luxury-gradient flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(30, 41, 59, 0.5)), url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="text-center text-white relative z-10">
          <h1 className="text-5xl md:text-7xl font-extralight mb-6 tracking-wide font-playfair">Coastal Lifestyle</h1>
          <p className="text-xl opacity-90 font-light tracking-wide">Unparalleled Luxury Living</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80"
              alt="Luxury pool and outdoor living"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1578662015446-bbf9e2cdcd16?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Elegant interior design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <ClimateInfo />
        <EventsCalendar />
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-10">
              <div className="absolute top-0 left-0 right-0 h-1 ocean-gradient"></div>
              <h3 className="text-2xl font-light mb-6 text-slate-800 font-playfair">Elite Recreation</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Championship surfing at Salt Creek Beach</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Monarch Beach Golf Links oceanfront course</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Exclusive private beach club privileges</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Luxury harbor yachting & sailing</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Private whale watching expeditions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-10">
              <div className="absolute top-0 left-0 right-0 h-1 gold-gradient"></div>
              <h3 className="text-2xl font-light mb-6 text-slate-800 font-playfair">Culinary Excellence</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Bourbon Steak Orange County</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Raya at The Ritz-Carlton Laguna</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Salt Creek Grille oceanfront dining</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Coastal Kitchen artisanal cuisine</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Harbor waterfront fine dining</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-10">
              <div className="absolute top-0 left-0 right-0 h-1 luxury-gradient"></div>
              <h3 className="text-2xl font-light mb-6 text-slate-800 font-playfair">Luxury Retail</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>South Coast Plaza luxury collections</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Monarch Bay Plaza boutique shopping</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Laguna Beach art gallery district</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Dana Point Lantern District</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Gelson's gourmet provisions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
