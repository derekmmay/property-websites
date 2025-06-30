
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=3011&q=80')`
        }}
      />
      
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            126 Monarch Bay
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90 font-light">
            Dana Point, CA 92660
          </p>
          <div className="text-4xl md:text-5xl font-light mb-8 text-amber-200">
            $13,500,000
          </div>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90">
            An extraordinary luxury residence in the exclusive guard-gated community of Monarch Bay, 
            featuring panoramic ocean views and world-class amenities.
          </p>
          <div className="space-x-4">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
                Schedule Viewing
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
