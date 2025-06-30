
import { Card, CardContent } from "@/components/ui/card";

const PropertyStats = () => {
  const stats = [
    { label: "Bedrooms", value: "5", gradient: "luxury-gradient" },
    { label: "Bathrooms", value: "5", gradient: "ocean-gradient" },
    { label: "Square Footage", value: "5,452", gradient: "gold-gradient" },
    { label: "Lot Size", value: "11,000 sf", gradient: "platinum-gradient" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 text-center relative overflow-hidden">
            <div className={`absolute inset-0 ${stat.gradient} opacity-5`}></div>
            <div className="relative z-10">
              <div className="text-4xl font-extralight text-slate-800 mb-2">{stat.value}</div>
              <div className="text-xs text-slate-600 uppercase tracking-[0.2em] font-medium">{stat.label}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PropertyStats;
