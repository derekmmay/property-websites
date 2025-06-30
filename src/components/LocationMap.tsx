
import { Card, CardContent } from "@/components/ui/card";

const LocationMap = () => {
  return (
    <Card className="border-0 shadow-2xl overflow-hidden">
      <CardContent className="p-0">
        <div className="h-96 bg-gradient-to-br from-slate-100 via-gray-200 to-slate-300 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 luxury-gradient opacity-10"></div>
          <div className="text-center z-10">
            <h3 className="text-3xl font-light text-slate-800 mb-4 font-playfair">Interactive Location Map</h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto leading-relaxed">Comprehensive proximity analysis and luxury destination mapping</p>
            <div className="grid grid-cols-3 gap-6 text-xs text-slate-500 uppercase tracking-[0.15em]">
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full"></div>
                <span>Private Beach</span>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full"></div>
                <span>Championship Golf</span>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full"></div>
                <span>Aviation Access</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;
