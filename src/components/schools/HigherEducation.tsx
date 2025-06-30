
import { Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HigherEducation = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-16">
        <Globe className="w-8 h-8 text-black mr-4" />
        <h3 className="text-4xl font-light text-black">Higher Education</h3>
      </div>
      
      <Card className="border-0 shadow-xl bg-gradient-to-r from-gray-900 to-black text-white">
        <CardContent className="p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h4 className="text-3xl font-light mb-6">University of California, Irvine</h4>
              <p className="text-white/80 font-light mb-6">World-renowned research university • 20 miles</p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="outline" className="border-white/30 text-white">Research: A+</Badge>
                <Badge variant="outline" className="border-white/30 text-white">Top 10 Public</Badge>
              </div>
              <p className="text-white/80 leading-relaxed font-light">
                AAU research university with top-ranked programs in business, engineering, 
                medicine, and computer science. Part of the prestigious UC system.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-white/20">
                <span className="text-white/80">US News Ranking</span>
                <span className="text-white font-medium">#10 Public Universities</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-white/20">
                <span className="text-white/80">Student Population</span>
                <span className="text-white font-medium">36,000+</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-white/20">
                <span className="text-white/80">Research Funding</span>
                <span className="text-white font-medium">$523M Annually</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-white/80">Notable Alumni</span>
                <span className="text-white font-medium">Tech & Business Leaders</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HigherEducation;
