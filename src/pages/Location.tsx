
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import InteractiveMap from "@/components/InteractiveMap";
import MapFilters from "@/components/MapFilters";
import ClimateInfo from "@/components/ClimateInfo";
import Footer from "@/components/Footer";
import { Waves, Plane, ShoppingBag, UtensilsCrossed, Ship, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const navigate = useNavigate();
  const [isMapInteractive, setIsMapInteractive] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Prevent body scroll when interactive map is active
  useEffect(() => {
    if (isMapInteractive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMapInteractive]);

  const toggleMapInteractivity = () => {
    console.log('Toggle map interactivity clicked, current state:', isMapInteractive);
    const newInteractiveState = !isMapInteractive;
    setIsMapInteractive(newInteractiveState);
    
    // Show filters when enabling interactive mode, hide when disabling
    if (newInteractiveState) {
      setShowFilters(true);
    } else {
      setShowFilters(false);
      setActiveFilters([]); // Clear filters when disabling interactive mode
    }
  };

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters);
    // Enable interactive mode when filters are applied
    if (filters.length > 0 && !isMapInteractive) {
      setIsMapInteractive(true);
    }
  };

  const handleCloseFilters = () => {
    console.log('Closing filters from Location component');
    setShowFilters(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Map Section - Interactive Map Only */}
      <div className={`h-screen relative ${isMapInteractive ? 'fixed inset-0 z-40' : ''}`}>
        <InteractiveMap 
          latitude={33.4734}
          longitude={-117.7018}
          zoom={15}
          className="w-full h-full"
          isInteractive={isMapInteractive}
          activeFilters={activeFilters}
        />
        
        {/* Map Controls Overlay - Top Left Corner */}
        {isMapInteractive && showFilters && (
          <div className="absolute top-6 left-6 z-50 max-w-sm max-h-[calc(100vh-120px)]">
            <MapFilters 
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClose={handleCloseFilters}
            />
          </div>
        )}
        
        {/* Main Overlay content - Only show when NOT in interactive mode */}
        {!isMapInteractive && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
            <div className="text-center text-white z-10 max-w-4xl mx-auto px-4 pointer-events-auto">
              <h1 className="text-6xl md:text-8xl font-extralight mb-12 tracking-[-0.02em] leading-none">
                Unrivaled Location
              </h1>
              <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide">
                Dana Point's Most Exclusive Address
              </p>
              <div className="mb-8">
                <Button
                  onClick={toggleMapInteractivity}
                  variant="outline"
                  className="px-6 py-2 backdrop-blur-sm border border-white/20 rounded-full text-sm tracking-[0.2em] uppercase transition-all duration-300 bg-black/50 text-white hover:bg-black/70"
                >
                  Explore Interactive Map
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Mode Exit Button - Top Center with proper spacing from nav */}
        {isMapInteractive && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50">
            <Button
              onClick={toggleMapInteractivity}
              variant="outline"
              className="px-6 py-3 bg-white/95 backdrop-blur-sm border-2 border-black rounded-xl text-sm font-medium text-black hover:bg-black hover:text-white transition-all duration-300 shadow-lg min-h-[48px] touch-manipulation"
              type="button"
            >
              Exit Interactive Mode
            </Button>
          </div>
        )}
      </div>

      {/* Content below - only visible when not in interactive mode */}
      {!isMapInteractive && (
        <>
          {/* Travel Times - moved right under hero */}
          <div className="bg-gray-50 py-20">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-4xl font-light text-black mb-16 text-center tracking-wide">Seamless Connectivity</h2>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Waves className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-extralight text-black mb-2">2 min</div>
                  <p className="text-gray-600 font-light text-sm">Beach Access</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-extralight text-black mb-2">20 min</div>
                  <p className="text-gray-600 font-light text-sm">John Wayne Airport</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-extralight text-black mb-2">60 min</div>
                  <p className="text-gray-600 font-light text-sm">LAX International</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-extralight text-black mb-2">25 min</div>
                  <p className="text-gray-600 font-light text-sm">Fashion Island Mall</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <UtensilsCrossed className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-extralight text-black mb-2">30 min</div>
                  <p className="text-gray-600 font-light text-sm">Michelin Star Dining</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-extralight text-black mb-2">15 min</div>
                  <p className="text-gray-600 font-light text-sm">Private Concierge</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 py-24">
            {/* Climate Information */}
            <ClimateInfo />
          </div>
          
          <Footer />
        </>
      )}
    </div>
  );
};

export default Location;
