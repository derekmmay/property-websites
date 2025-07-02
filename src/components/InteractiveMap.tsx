
import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useSimpleMapbox } from '@/hooks/useSimpleMapbox';

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
  
  const { mapContainer } = useSimpleMapbox({
    latitude,
    longitude,
    zoom,
    apiKey,
    isInteractive
  });

  return (
    <div className={className}>
      <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
    </div>
  );
};

export default InteractiveMap;
