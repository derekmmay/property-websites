
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AgentInfo = () => {
  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-8">
        <div className="flex items-start space-x-6">
          <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-light">
            SC
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-light text-gray-800 mb-2">Susan Chase</h3>
            <p className="text-gray-600 mb-4">Listing Agent • Compass</p>
            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <div className="flex justify-between">
                <span>Phone:</span>
                <span className="font-medium">(949) 949-9499</span>
              </div>
              <div className="flex justify-between">
                <span>Email:</span>
                <span className="font-medium">susan@compass.com</span>
              </div>
              <div className="flex justify-between">
                <span>License #:</span>
                <span className="font-medium">DRE: 123456</span>
              </div>
            </div>
            <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white">
              Contact Agent
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentInfo;
