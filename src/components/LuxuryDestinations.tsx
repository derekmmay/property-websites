
import { Card, CardContent } from "@/components/ui/card";

const LuxuryDestinations = () => {
  const destinations = [
    {
      title: "John Wayne Airport (SNA)",
      distance: "24 miles • ~25 minutes",
      description: "Private shuttle or Uber Black service available",
      type: "Transportation"
    },
    {
      title: "South Coast Plaza",
      distance: "20 miles • ~25 minutes",
      description: "California's premier luxury retail destination",
      type: "Shopping"
    },
    {
      title: "Waldorf Astoria Resort",
      distance: "Adjacent • 2 minutes",
      description: "AAA Five-Diamond resort with spa & dining",
      type: "Resort"
    },
    {
      title: "Ritz-Carlton Laguna Niguel",
      distance: "5 miles • ~8 minutes",
      description: "Ocean-view dining and luxury amenities",
      type: "Resort"
    },
    {
      title: "Dana Point Harbor",
      distance: "2 miles • ~5 minutes",
      description: "Yacht marina, fine dining & Catalina Express",
      type: "Recreation"
    },
    {
      title: "Monarch Beach Golf Links",
      distance: "Adjacent • 3 minutes",
      description: "Robert Trent Jones Jr. championship course",
      type: "Golf"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-light mb-8 text-gray-800">Elite Lifestyle Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wide text-blue-600 font-medium">
                  {destination.type}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {destination.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {destination.distance}
              </p>
              <p className="text-sm text-gray-500">
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
