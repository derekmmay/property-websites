
import React, { useState, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useSimpleMapbox } from '@/hooks/useSimpleMapbox';
import { useMapMarkers } from '@/hooks/useMapMarkers';

interface InteractiveMapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  className?: string;
  isInteractive?: boolean;
  activeFilters?: string[];
  onMapLoad?: (map: any) => void;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  latitude = 33.4734, 
  longitude = -117.7018, 
  zoom = 12,
  className = "w-full h-96",
  isInteractive = true,
  activeFilters = [],
  onMapLoad
}) => {
  const [apiKey] = useState<string>('pk.eyJ1IjoiZGVyZWttbWF5IiwiYSI6ImNtY2ptMXcxZjA0cGQybXB2NnphemRhNWkifQ.gBYDOal4M8tAzN7BIo6UTg');
  
  const { mapContainer, map, isMapReady } = useSimpleMapbox({
    latitude,
    longitude,
    zoom,
    apiKey,
    isInteractive,
    isDarkMode: !isInteractive
  });

  const { 
    clearAllMarkers, 
    addPropertyValueMarkers, 
    addPOIMarkers 
  } = useMapMarkers();

  // Notify parent component when map is loaded
  useEffect(() => {
    if (map && isMapReady && onMapLoad) {
      onMapLoad(map);
    }
  }, [map, isMapReady, onMapLoad]);

  // Add markers when filters are active
  useEffect(() => {
    if (!map || !isMapReady) return;

    console.log('Adding markers for active filters:', activeFilters);
    
    // Clear existing markers first
    clearAllMarkers();
    
    if (activeFilters.length === 0) {
      console.log('No active filters, clearing all markers');
      return;
    }
    
    // Add property value markers if high-income filter is active
    if (activeFilters.includes('high-income')) {
      addPropertyValueMarkers(map);
    }
    
    // Add POI markers for all other filters
    const poiFilters = activeFilters.filter(filter => filter !== 'high-income');
    if (poiFilters.length > 0) {
      addPOIMarkers(map, poiFilters);
    }
  }, [activeFilters, map, isMapReady, clearAllMarkers, addPropertyValueMarkers, addPOIMarkers]);

  return (
    <div className={className}>
      <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
    </div>
  );
};

export default InteractiveMap;
