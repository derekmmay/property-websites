
import { Card, CardContent } from "@/components/ui/card";

const PropertyStats = () => {
  const stats = [
    { label: "Bedrooms", value: "5", icon: "🛏️" },
    { label: "Bathrooms", value: "5", icon: "🛁" },
    { label: "Square Footage", value: "5,452", icon: "📐" },
    { label: "Lot Size", value: "11,000 sf", icon: "🏡" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-light text-gray-800 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PropertyStats;
