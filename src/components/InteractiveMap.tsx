
import React, { useState, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useSimpleMapbox } from '@/hooks/useSimpleMapbox';
import { addLuxuryHeatmap } from '@/utils/mapLayers';
import { useMapMarkers } from '@/hooks/useMapMarkers';

interface InteractiveMapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  className?: string;
  isInteractive?: boolean;
  activeFilters?: string[];
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  latitude = 33.4734, 
  longitude = -117.7018, 
  zoom = 15,
  className = "w-full h-96",
  isInteractive = true,
  activeFilters = []
}) => {
  const [apiKey] = useState<string>('pk.eyJ1IjoiZGVyZWttbWF5IiwiYSI6ImNtY2ptMXcxZjA0cGQybXB2NnphemRhNWkifQ.gBYDOal4M8tAzN7BIo6UTg');
  
  const { mapContainer, map, isMapReady } = useSimpleMapbox({
    latitude,
    longitude,
    zoom,
    apiKey,
    isInteractive
  });

  const { 
    clearAllMarkers, 
    addPropertyValueMarkers, 
    addSchoolMarkers, 
    addLuxuryPOIMarkers 
  } = useMapMarkers();

  // Only add layers when filters are active
  useEffect(() => {
    if (!map || !isMapReady || activeFilters.length === 0) {
      // Clear any existing markers when no filters are active
      if (map && isMapReady && activeFilters.length === 0) {
        clearAllMarkers();
      }
      return;
    }

    console.log('Adding layers for active filters:', activeFilters);
    
    // Clear existing markers first
    clearAllMarkers();
    
    // Add markers based on active filters
    if (activeFilters.includes('high-income')) {
      addPropertyValueMarkers(map);
    }
    
    if (activeFilters.includes('education')) {
      addSchoolMarkers(map);
    }
    
    // Add luxury POI markers based on their categories
    addLuxuryPOIMarkers(map, activeFilters);
    
    // Add luxury heatmap only if luxury filters are active
    const luxuryFilters = ['luxury-hotels', 'private-clubs', 'luxury-spas', 'marinas', 'fine-dining', 'golf-courses'];
    if (activeFilters.some(filter => luxuryFilters.includes(filter))) {
      try {
        addLuxuryHeatmap(map);
      } catch (error) {
        console.log('Heatmap already exists or style not ready:', error);
      }
    }
  }, [activeFilters, map, isMapReady]);

  return (
    <div className={className}>
      <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
    </div>
  );
};

export default InteractiveMap;
