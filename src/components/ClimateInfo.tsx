
import { Card, CardContent } from "@/components/ui/card";

const ClimateInfo = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-light mb-8 text-gray-800">Perfect Climate</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">☀️</div>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Year-Round Sunshine</h3>
            <p className="text-gray-600">275+ sunny days annually with mild Mediterranean climate</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🌡️</div>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Perfect Temperatures</h3>
            <p className="text-gray-600">Average highs 77°F, lows 50°F. Rarely below 45°F or above 85°F</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🌊</div>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Ocean Breezes</h3>
            <p className="text-gray-600">Natural climate control with refreshing Pacific Ocean influences</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClimateInfo;
