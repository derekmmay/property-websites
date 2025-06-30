
import { Card, CardContent } from "@/components/ui/card";

const LocationMap = () => {
  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-0">
        <div className="h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
          <div className="text-center z-10">
            <h3 className="text-2xl font-light text-gray-800 mb-2">Interactive Map</h3>
            <p className="text-gray-600">Detailed location and proximity information</p>
            <div className="mt-4 text-sm text-gray-500">
              🏖️ Private Beach Access • 🏌️ Golf Course • ✈️ Airport Access
            </div>
          </div>
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-blue-300 to-teal-300"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;
