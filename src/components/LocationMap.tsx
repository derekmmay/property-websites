
import { Card, CardContent } from "@/components/ui/card";

const LocationMap = () => {
  return (
    <Card className="border-0 shadow-none overflow-hidden h-full rounded-none">
      <CardContent className="p-0 h-full">
        <div className="h-full bg-gradient-to-br from-slate-100 via-gray-200 to-slate-300 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 luxury-gradient opacity-10"></div>
          <div className="text-center z-10">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full text-sm tracking-[0.2em] uppercase mb-8 text-white">
                Prime Coastal Position
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extralight mb-12 tracking-[-0.02em] text-slate-800 leading-none">
              Unrivaled Location
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide text-slate-700">
              Dana Point's Most Exclusive Address
            </p>
            <p className="text-lg mb-16 max-w-4xl mx-auto text-slate-600 leading-relaxed font-light">
              Strategically positioned within the guard-gated enclave of Monarch Bay, offering unparalleled 
              access to Southern California's most coveted destinations while maintaining absolute privacy.
            </p>
            <div className="grid grid-cols-3 gap-8 text-xs text-slate-500 uppercase tracking-[0.15em] max-w-md mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full"></div>
                <span>Private Beach</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full"></div>
                <span>Championship Golf</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full"></div>
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
