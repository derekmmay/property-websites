import { useState, useEffect } from "react";

export const useLocationState = () => {
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
    console.log('=== FILTER CHANGE CALLED ===');
    console.log('Previous filters:', activeFilters);
    console.log('New filters:', filters);
    console.log('Current interactive state:', isMapInteractive);
    
    setActiveFilters(filters);
    
    // Enable interactive mode when filters are applied
    if (filters.length > 0 && !isMapInteractive) {
      console.log('Enabling interactive mode due to filters');
      setIsMapInteractive(true);
    }
    
    console.log('Filter change complete');
  };

  const handleCloseFilters = () => {
    console.log('Closing filters from Location component');
    setShowFilters(false);
  };

  return {
    isMapInteractive,
    activeFilters,
    showFilters,
    toggleMapInteractivity,
    handleFilterChange,
    handleCloseFilters,
  };
};