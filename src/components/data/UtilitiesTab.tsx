
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Droplets, Flame, Wifi, Shield, Trash2 } from "lucide-react";

const UtilitiesTab = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Electrical & Power
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Electrical Panel</span>
                <Badge variant="default">400 Amp</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Solar System</span>
                <Badge variant="default">Owned - 15kW</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Backup Generator</span>
                <Badge variant="default">Whole House</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Smart Home Wiring</span>
                <Badge variant="default">Cat 6 Throughout</Badge>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500">
                Monthly Average: $180 (with solar offset)
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplets className="w-5 h-5" />
              Water & Sewer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Water Source</span>
                <Badge variant="default">Municipal</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Water Pressure</span>
                <Badge variant="default">Excellent</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Irrigation System</span>
                <Badge variant="default">Smart Drip</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pool/Spa Systems</span>
                <Badge variant="default">Saltwater</Badge>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500">
                Monthly Average: $280 (includes irrigation)
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="w-5 h-5" />
              Gas & Heating
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Gas Service</span>
                <Badge variant="default">Natural Gas</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">HVAC System</span>
                <Badge variant="default">Multi-Zone</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Water Heater</span>
                <Badge variant="default">Tankless</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Fireplace</span>
                <Badge variant="default">Gas Insert</Badge>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500">
                Monthly Average: $120 (seasonal variation)
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="w-5 h-5" />
              Internet & Communication
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Internet Provider</span>
                <Badge variant="default">Spectrum Fiber</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Speed Available</span>
                <Badge variant="default">1 Gig</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">TV/Cable</span>
                <Badge variant="default">Available</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Phone Service</span>
                <Badge variant="default">VoIP Ready</Badge>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500">
                Service providers: Spectrum, Cox, AT&T available
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security & Safety
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Security System</span>
                <Badge variant="default">Integrated</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Gate Access</span>
                <Badge variant="default">24/7 Guard</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Fire Safety</span>
                <Badge variant="default">Sprinkler System</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Emergency Services</span>
                <Badge variant="default">Direct Line</Badge>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500">
                Community security included in HOA fees
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trash2 className="w-5 h-5" />
              Waste & Recycling
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Waste Collection</span>
                <Badge variant="default">Twice Weekly</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Recycling</span>
                <Badge variant="default">Weekly</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Green Waste</span>
                <Badge variant="default">Weekly</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Bulk Pickup</span>
                <Badge variant="default">On Request</Badge>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500">
                Service included in city utilities
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Utility Summary & Costs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-black mb-2">$580</div>
              <div className="text-sm text-gray-600">Monthly Average</div>
              <div className="text-xs text-gray-500 mt-1">All utilities combined</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-black mb-2">$6,960</div>
              <div className="text-sm text-gray-600">Annual Estimate</div>
              <div className="text-xs text-gray-500 mt-1">Excluding HOA fees</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-black mb-2">Green</div>
              <div className="text-sm text-gray-600">Energy Rating</div>
              <div className="text-xs text-gray-500 mt-1">Solar + efficiency</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-black mb-2">Smart</div>
              <div className="text-sm text-gray-600">Home Ready</div>
              <div className="text-xs text-gray-500 mt-1">Full automation</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UtilitiesTab;
