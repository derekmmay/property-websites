import { Button } from "@/components/ui/button";
import InteractiveMap from "@/components/InteractiveMap";
import MapFilters from "@/components/MapFilters";

interface LocationHeroProps {
  isMapInteractive: boolean;
  activeFilters: string[];
  showFilters: boolean;
  onToggleMapInteractivity: () => void;
  onFilterChange: (filters: string[]) => void;
  onCloseFilters: () => void;
}

const LocationHero = ({
  isMapInteractive,
  activeFilters,
  showFilters,
  onToggleMapInteractivity,
  onFilterChange,
  onCloseFilters,
}: LocationHeroProps) => {
  return (
    <div className={`h-[80vh] relative ${isMapInteractive ? 'fixed inset-0 z-40' : ''}`}>
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
            onFilterChange={onFilterChange}
            onClose={onCloseFilters}
            onExitInteractiveMode={onToggleMapInteractivity}
          />
        </div>
      )}
      
      {/* Main Overlay content - Only show when NOT in interactive mode */}
      {!isMapInteractive && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white z-10 max-w-6xl mx-auto px-4 pointer-events-auto">
            <h1 className="text-7xl md:text-9xl font-extralight mb-12 tracking-[-0.02em] leading-none">
              Unrivaled Location
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide opacity-95">
              Dana Point's Most Exclusive Address
            </p>
            <p className="text-lg mb-16 max-w-4xl mx-auto opacity-90 leading-relaxed font-light">
              Experience seamless connectivity to Southern California's finest destinations, 
              from pristine beaches to world-class amenities, all within minutes of your doorstep.
            </p>
            <div className="mb-8">
              <Button
                onClick={onToggleMapInteractivity}
                variant="outline"
                className="px-6 py-2 backdrop-blur-sm border border-white/20 rounded-full text-sm tracking-[0.2em] uppercase transition-all duration-300 bg-black/50 text-white hover:bg-black/70"
              >
                Explore Interactive Map
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationHero;