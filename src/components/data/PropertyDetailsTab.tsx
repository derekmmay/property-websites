
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PropertyDetailsTab = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Property Specifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-600 text-sm">Year Built</span>
                <p className="font-semibold">1992</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Last Renovated</span>
                <p className="font-semibold">2024</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Lot Size</span>
                <p className="font-semibold">0.75 acres</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Property Type</span>
                <p className="font-semibold">Single Family</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Parking</span>
                <p className="font-semibold">3-car garage</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Pool</span>
                <p className="font-semibold">Infinity Edge</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Property Tax (Annual)</span>
                <span className="font-semibold">$162,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">HOA Fees (Monthly)</span>
                <span className="font-semibold">$2,850</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Insurance (Annual)</span>
                <span className="font-semibold">$18,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price per Sq Ft</span>
                <span className="font-semibold">$2,476</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Architectural Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Interior Materials</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Italian Stone</Badge>
                  <Badge variant="secondary">French Oak</Badge>
                  <Badge variant="secondary">Limestone</Badge>
                  <Badge variant="secondary">Custom Millwork</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Design Style</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Wabi Sabi</Badge>
                  <Badge variant="outline">Contemporary</Badge>
                  <Badge variant="outline">Mediterranean</Badge>
                  <Badge variant="outline">Coastal</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Gated Community</span>
                <Badge variant="default">Yes</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">24/7 Security</span>
                <Badge variant="default">Yes</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Ocean Access</span>
                <Badge variant="default">Private</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Beach Club</span>
                <Badge variant="default">Included</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PropertyDetailsTab;
