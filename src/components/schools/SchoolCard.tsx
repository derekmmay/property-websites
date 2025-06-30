
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface SchoolCardProps {
  name: string;
  type: string;
  distance: string;
  rating: string;
  badges: { text: string; variant?: "secondary" | "outline" }[];
  description: string;
  variant?: "default" | "dark";
  colorAccent?: string;
}

const SchoolCard = ({
  name,
  type,
  distance,
  rating,
  badges,
  description,
  variant = "default",
  colorAccent = "blue"
}: SchoolCardProps) => {
  const isDark = variant === "dark";
  
  return (
    <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 overflow-hidden ${
      isDark ? "bg-gradient-to-br from-black to-gray-800 text-white" : "bg-white"
    }`}>
      <CardContent className="p-8">
        {!isDark && (
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${colorAccent}-500 to-${colorAccent}-600`}></div>
        )}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h4 className={`text-2xl font-light mb-2 ${isDark ? "text-white" : "text-black"}`}>
              {name}
            </h4>
            <p className={`font-light ${isDark ? "text-white/80" : "text-gray-600"}`}>
              {type} • {distance}
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className={`text-lg font-medium ${isDark ? "text-white" : "text-black"}`}>
              {rating}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {badges.map((badge, index) => (
            <Badge 
              key={index}
              variant={badge.variant || "secondary"} 
              className={badge.variant === "outline" && isDark 
                ? "border-white/30 text-white" 
                : badge.variant === "secondary" && !isDark
                ? "bg-black text-white"
                : "bg-gray-100 text-black"
              }
            >
              {badge.text}
            </Badge>
          ))}
        </div>
        <p className={`leading-relaxed font-light ${
          isDark ? "text-white/80" : "text-gray-600"
        }`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default SchoolCard;
