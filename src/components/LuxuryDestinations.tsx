
import { Card, CardContent } from "@/components/ui/card";

const LuxuryDestinations = () => {
  const destinations = [
    {
      title: "John Wayne Airport",
      distance: "24 miles • 25 minutes",
      description: "Private aviation & executive transport services",
      type: "Aviation",
      gradient: "luxury-gradient"
    },
    {
      title: "South Coast Plaza",
      distance: "20 miles • 25 minutes",
      description: "California's premier luxury retail destination",
      type: "Retail",
      gradient: "gold-gradient"
    },
    {
      title: "Waldorf Astoria Resort",
      distance: "Adjacent • 2 minutes",
      description: "AAA Five-Diamond resort & spa sanctuary",
      type: "Hospitality",
      gradient: "ocean-gradient"
    },
    {
      title: "The Ritz-Carlton",
      distance: "5 miles • 8 minutes",
      description: "Oceanfront luxury dining & wellness",
      type: "Hospitality",
      gradient: "platinum-gradient"
    },
    {
      title: "Dana Point Harbor",
      distance: "2 miles • 5 minutes",
      description: "Private yacht marina & Catalina Express",
      type: "Marine",
      gradient: "ocean-gradient"
    },
    {
      title: "Monarch Beach Golf",
      distance: "Adjacent • 3 minutes",
      description: "Robert Trent Jones Jr. championship links",
      type: "Recreation",
      gradient: "luxury-gradient"
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-4xl font-light mb-12 text-slate-800 text-center">Elite Lifestyle Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8 relative">
              <div className={`absolute top-0 left-0 right-0 h-1 ${destination.gradient}`}></div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">
                  {destination.type}
                </span>
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-3 font-playfair">
                {destination.title}
              </h3>
              <p className="text-sm text-slate-600 mb-4 font-medium">
                {destination.distance}
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                {destination.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LuxuryDestinations;
