
import { Card, CardContent } from "@/components/ui/card";

const ClimateInfo = () => {
  return (
    <div className="mb-20">
      <h2 className="text-4xl font-light mb-12 text-slate-800 text-center">Mediterranean Climate Excellence</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-yellow-50 overflow-hidden">
          <CardContent className="p-10 text-center relative">
            <div className="absolute top-0 left-0 right-0 h-1 gold-gradient"></div>
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full shadow-inner"></div>
            </div>
            <h3 className="text-2xl font-light text-slate-800 mb-4 font-playfair">Year-Round Sunshine</h3>
            <p className="text-slate-600 leading-relaxed">275+ pristine days of California sunshine with mild Mediterranean climate perfection</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
          <CardContent className="p-10 text-center relative">
            <div className="absolute top-0 left-0 right-0 h-1 ocean-gradient"></div>
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-8 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-light text-slate-800 mb-4 font-playfair">Optimal Temperatures</h3>
            <p className="text-slate-600 leading-relaxed">Average highs 77°F, lows 50°F. Consistently comfortable luxury living conditions</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-gray-50 overflow-hidden">
          <CardContent className="p-10 text-center relative">
            <div className="absolute top-0 left-0 right-0 h-1 platinum-gradient"></div>
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-slate-400 to-gray-500 rounded-full flex items-center justify-center">
              <div className="w-6 h-2 bg-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-light text-slate-800 mb-4 font-playfair">Pacific Influence</h3>
            <p className="text-slate-600 leading-relaxed">Natural climate moderation with refreshing ocean breezes and coastal serenity</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClimateInfo;
