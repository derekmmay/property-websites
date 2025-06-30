
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full text-sm tracking-[0.2em] uppercase mb-8">
                Exclusive Oceanfront Estate
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-extralight mb-12 tracking-[-0.02em] text-white leading-none">
              126 Monarch Bay
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide opacity-95">
              Dana Point, California
            </p>
            <p className="text-lg mb-16 max-w-4xl mx-auto opacity-90 leading-relaxed font-light">
              A rare architectural masterpiece commanding panoramic Pacific Ocean views within 
              the most exclusive guard-gated enclave of Southern California's coastline.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-black hover:bg-gray-900 text-white px-16 py-6 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105 border border-white/20">
                  Private Viewing
                </Button>
              </Link>
              <Link to="#gallery">
                <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 px-16 py-6 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/40 animate-pulse">
          <div className="w-px h-20 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </div>

      <div className="bg-white py-20 border-b border-gray-100">
        <div className="text-center">
          <div className="text-6xl md:text-7xl font-extralight text-black tracking-wide">
            $13,500,000
          </div>
          <p className="text-xl text-gray-500 mt-4 font-light tracking-wide">
            Priced to reflect unparalleled luxury
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
