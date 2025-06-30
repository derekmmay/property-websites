
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MarketOverviewTab = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Market Context</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                Dana Point's luxury real estate market has shown remarkable resilience, with waterfront properties like 126 Monarch Bay Drive representing the pinnacle of coastal living. The area has experienced consistent appreciation over the past decade.
              </p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-black mb-4">$2.8M</div>
                  <div className="text-sm text-gray-600">Neighborhood Median</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-black mb-4">28</div>
                  <div className="text-sm text-gray-600">Avg Days on Market</div>
                </div>
              </div>
              <p className="text-gray-700">
                The Monarch Bay community maintains its exclusivity with only <strong>23 active listings</strong> in a neighborhood of over <strong>1,200 properties</strong>, creating a unique supply-demand dynamic that supports property values.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Investment Perspective</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                This property represents a rare opportunity in one of Southern California's most sought-after coastal enclaves. The recent comprehensive renovation positions it as a modern luxury residence while maintaining its prestigious address.
              </p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-black mb-4">$2,476</div>
                  <div className="text-sm text-gray-600">Price per Sq Ft</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-black mb-4">0.75</div>
                  <div className="text-sm text-gray-600">Acres</div>
                </div>
              </div>
              <p className="text-gray-700">
                The property's <strong>6,480 square feet</strong> of living space on a <strong>0.75-acre lot</strong> offers both luxury and privacy, with potential for future customization within the community's architectural guidelines.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketOverviewTab;
