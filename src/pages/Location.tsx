import Navigation from "@/components/Navigation";
import LocationHero from "@/components/location/LocationHero";
import TravelTimes from "@/components/location/TravelTimes";
import RealTimeWeather from "@/components/RealTimeWeather";
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

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 py-24">
            {/* Climate Information */}
            <RealTimeWeather />
          </div>
          
          <Footer />
        </>
      )}
    </div>
  );
};

export default Location;