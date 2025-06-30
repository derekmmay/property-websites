
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(30, 41, 59, 0.4)), url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=3011&q=80')`
          }}
        />
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-extralight mb-8 tracking-[0.05em] text-white">
              126 Monarch Bay
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90 font-light tracking-wide">
              Dana Point, California 92660
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
              An extraordinary architectural masterpiece within the exclusive guard-gated community of Monarch Bay, 
              featuring panoramic Pacific Ocean views and unparalleled luxury amenities.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="luxury-gradient hover:opacity-90 text-white px-12 py-4 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105">
                  Schedule Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/60">
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </div>

      <div className="bg-white py-16 text-center">
        <div className="text-5xl md:text-6xl font-light text-gray-800">
          $13,500,000
        </div>
      </div>
    </>
  );
};

export default Hero;
