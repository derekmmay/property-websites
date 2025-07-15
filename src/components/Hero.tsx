import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Waves, MapPin, Gem } from "lucide-react";
import { PropertyData } from "@/services/propertyApiService";
import { usePropertyConfig } from "@/hooks/usePropertyConfig";

interface HeroProps {
  property?: PropertyData;
}

const Hero = ({ property }: HeroProps) => {
  const config = usePropertyConfig();
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('${property?.images?.[0] || config.heroImage}')`
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-7xl md:text-9xl font-extralight mb-12 tracking-[-0.02em] text-white leading-none">
              {property?.address || config.headline}
            </h1>
            <p className="text-lg mb-16 max-w-4xl mx-auto opacity-90 leading-relaxed font-light">
              {property?.description || config.subheadline}
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/80 text-white bg-transparent hover:bg-white hover:text-black px-12 py-6 text-base font-light tracking-[0.2em] uppercase transition-all duration-500 hover:scale-105 backdrop-blur-sm"
                >
                  Private Viewing
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/40 animate-pulse">
          <div className="w-px h-20 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </div>

      <div className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Key Features with Icons - black background with white text */}
          <div>
            <h2 className="text-5xl font-light text-white mb-24 text-center tracking-wide">Distinctive Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              {config.distinctiveFeatures.map((feature, index) => {
                const IconComponent = feature.icon === 'Shield' ? Shield : 
                                    feature.icon === 'Waves' ? Waves : 
                                    feature.icon === 'MapPin' ? MapPin : Gem;
                
                return (
                  <div key={index} className="text-center group">
                    <div className="flex items-center justify-center mx-auto mb-10">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-light text-white mb-8">{feature.title}</h3>
                    <p className="text-gray-300 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
