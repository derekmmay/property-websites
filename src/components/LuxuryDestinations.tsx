
import { Card, CardContent } from "@/components/ui/card";

const LuxuryDestinations = () => {
  const destinations = [
    {
      title: "John Wayne Airport",
      distance: "24 miles • 25 minutes",
      description: "Private aviation & executive transport services",
      type: "Aviation",
      gradient: "from-slate-500 to-slate-600"
    },
    {
      title: "South Coast Plaza",
      distance: "20 miles • 25 minutes",
      description: "California's premier luxury retail destination",
      type: "Retail",
      gradient: "from-amber-500 to-amber-600"
    },
    {
      title: "Waldorf Astoria Resort",
      distance: "Adjacent • 2 minutes",
      description: "AAA Five-Diamond resort & spa sanctuary",
      type: "Hospitality",
      gradient: "from-gray-500 to-gray-600"
    },
    {
      title: "The Ritz-Carlton",
      distance: "5 miles • 8 minutes",
      description: "Oceanfront luxury dining & wellness",
      type: "Hospitality",
      gradient: "from-gray-500 to-gray-600"
    },
    {
      title: "Dana Point Harbor",
      distance: "2 miles • 5 minutes",
      description: "Private yacht marina & Catalina Express",
      type: "Marine",
      gradient: "from-slate-500 to-slate-600"
    },
    {
      title: "Monarch Beach Golf",
      distance: "Adjacent • 3 minutes",
      description: "Robert Trent Jones Jr. championship links",
      type: "Recreation",
      gradient: "from-slate-500 to-slate-600"
    }
  ];

  return (
    <div className="text-center">
      <h2 className="text-5xl font-light mb-20 text-black tracking-wide">Elite Lifestyle Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white overflow-hidden group">
            <CardContent className="p-8 relative">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${destination.gradient}`}></div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
                  {destination.type}
                </span>
              </div>
              <h3 className="text-xl font-medium text-black mb-4">
                {destination.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 font-medium">
                {destination.distance}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
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
