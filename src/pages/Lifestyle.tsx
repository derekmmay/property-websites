
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import EventsCalendar from "@/components/EventsCalendar";
import ClimateInfo from "@/components/ClimateInfo";

const Lifestyle = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="relative h-64 bg-gradient-to-r from-amber-900 to-orange-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Coastal Lifestyle</h1>
          <p className="text-xl opacity-90">Year-Round Luxury Living</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ClimateInfo />
        <EventsCalendar />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light mb-4 text-gray-800">Recreation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• World-class surfing at Salt Creek</li>
                <li>• Monarch Beach Golf Links</li>
                <li>• Private beach club access</li>
                <li>• Harbor boating & sailing</li>
                <li>• Whale watching tours</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light mb-4 text-gray-800">Fine Dining</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Bourbon Steak Orange County</li>
                <li>• Raya at The Ritz-Carlton</li>
                <li>• Salt Creek Grille</li>
                <li>• Coastal Kitchen</li>
                <li>• Harbor waterfront dining</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light mb-4 text-gray-800">Shopping</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• South Coast Plaza luxury retail</li>
                <li>• Monarch Bay Plaza boutiques</li>
                <li>• Laguna Beach art galleries</li>
                <li>• Dana Point Lantern District</li>
                <li>• Gelson's gourmet market</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
