import Navigation from "@/components/Navigation";
import LocationHero from "@/components/location/LocationHero";
import TravelTimes from "@/components/location/TravelTimes";

import Footer from "@/components/Footer";
import { useLocationState } from "@/hooks/useLocationState";

const Location = () => {
  const {
    isMapInteractive,
    activeFilters,
    showFilters,
    toggleMapInteractivity,
    handleFilterChange,
    handleCloseFilters,
  } = useLocationState();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Map Section - Interactive Map Only */}
      <LocationHero
        isMapInteractive={isMapInteractive}
        activeFilters={activeFilters}
        showFilters={showFilters}
        onToggleMapInteractivity={toggleMapInteractivity}
        onFilterChange={handleFilterChange}
        onCloseFilters={handleCloseFilters}
      />

      {/* Content below - only visible when not in interactive mode */}
      {!isMapInteractive && (
        <>
          {/* Travel Times - moved right under hero */}
          <TravelTimes />

          
          <Footer />
        </>
      )}
    </div>
  );
};

export default Location;