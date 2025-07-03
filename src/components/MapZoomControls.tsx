import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';
import mapboxgl from 'mapbox-gl';

interface MapZoomControlsProps {
  map: mapboxgl.Map | null;
  className?: string;
}

const MapZoomControls: React.FC<MapZoomControlsProps> = ({ map, className = "" }) => {
  const handleZoomIn = () => {
    if (map) {
      map.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (map) {
      map.zoomOut();
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <Button
        onClick={handleZoomIn}
        variant="outline"
        size="lg"
        className="w-12 h-12 bg-white hover:bg-gray-50 border-2 border-gray-300 shadow-lg rounded-lg flex items-center justify-center"
        aria-label="Zoom in"
      >
        <Plus className="w-6 h-6 text-gray-700" />
      </Button>
      <Button
        onClick={handleZoomOut}
        variant="outline"
        size="lg"
        className="w-12 h-12 bg-white hover:bg-gray-50 border-2 border-gray-300 shadow-lg rounded-lg flex items-center justify-center"
        aria-label="Zoom out"
      >
        <Minus className="w-6 h-6 text-gray-700" />
      </Button>
    </div>
  );
};

export default MapZoomControls;