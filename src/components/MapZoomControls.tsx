import React from 'react';
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
    <div className={`flex flex-col gap-1 ${className}`}>
      <button
        onClick={handleZoomIn}
        className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded border border-white/20 shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200"
        aria-label="Zoom in"
      >
        <Plus className="w-4 h-4 text-gray-700" />
      </button>
      <button
        onClick={handleZoomOut}
        className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded border border-white/20 shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200"
        aria-label="Zoom out"
      >
        <Minus className="w-4 h-4 text-gray-700" />
      </button>
    </div>
  );
};

export default MapZoomControls;