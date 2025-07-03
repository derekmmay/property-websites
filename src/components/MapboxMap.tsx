import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Plus, Minus } from 'lucide-react';

interface MapboxMapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  className?: string;
  isInteractive?: boolean;
  activeFilters?: string[];
  onMapLoad?: (map: mapboxgl.Map) => void;
}

const MapboxMap: React.FC<MapboxMapProps> = ({
  latitude = 33.4734,
  longitude = -117.7018,
  zoom = 12,
  className = "w-full h-96",
  isInteractive = true,
  activeFilters = [],
  onMapLoad
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(zoom);

  const apiKey = 'pk.eyJ1IjoiZGVyZWttbWF5IiwiYSI6ImNtY2ptMXcxZjA0cGQybXB2NnphemRhNWkifQ.gBYDOal4M8tAzN7BIo6UTg';

  useEffect(() => {
    if (!mapContainer.current || !apiKey.trim()) return;

    mapboxgl.accessToken = apiKey.trim();
    
    if (mapRef.current) {
      mapRef.current.remove();
    }

    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: !isInteractive ? 'mapbox://styles/mapbox/dark-v11' : 'mapbox://styles/mapbox/light-v11',
      center: [longitude, latitude],
      zoom: zoom,
      pitch: 45,
      interactive: isInteractive,
    });

    mapRef.current.on('load', () => {
      setIsMapReady(true);
      
      // Add main property marker
      if (mapRef.current) {
        new mapboxgl.Marker({
          color: '#000000',
          scale: 1.2
        })
          .setLngLat([longitude, latitude])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML('<div class="text-sm font-medium">126 Monarch Bay Drive<br><span class="text-xs text-gray-600">Dana Point, CA</span></div>')
          )
          .addTo(mapRef.current);

        if (onMapLoad) {
          onMapLoad(mapRef.current);
        }
      }
    });

    mapRef.current.on('style.load', () => {
      if (mapRef.current) {
        mapRef.current.setFog({
          color: 'rgb(255, 255, 255)',
          'high-color': 'rgb(200, 200, 225)',
          'horizon-blend': 0.2,
        });
      }
    });

    mapRef.current.on('zoom', () => {
      if (mapRef.current) {
        setCurrentZoom(mapRef.current.getZoom());
      }
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [apiKey, latitude, longitude, zoom, isInteractive]);

  // Update map interactivity
  useEffect(() => {
    if (mapRef.current && isMapReady) {
      if (isInteractive) {
        mapRef.current.dragPan.enable();
        mapRef.current.scrollZoom.enable();
        mapRef.current.boxZoom.enable();
        mapRef.current.dragRotate.enable();
        mapRef.current.keyboard.enable();
        mapRef.current.doubleClickZoom.enable();
        mapRef.current.touchZoomRotate.enable();
      } else {
        mapRef.current.dragPan.disable();
        mapRef.current.scrollZoom.disable();
        mapRef.current.boxZoom.disable();
        mapRef.current.dragRotate.disable();
        mapRef.current.keyboard.disable();
        mapRef.current.doubleClickZoom.disable();
        mapRef.current.touchZoomRotate.disable();
      }
    }
  }, [isInteractive, isMapReady]);

  const handleZoomIn = () => {
    if (mapRef.current && isMapReady) {
      const newZoom = currentZoom + 1;
      mapRef.current.setZoom(newZoom);
      setCurrentZoom(newZoom);
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current && isMapReady) {
      const newZoom = Math.max(0, currentZoom - 1);
      mapRef.current.setZoom(newZoom);
      setCurrentZoom(newZoom);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
      
      {/* Custom Zoom Controls */}
      <div className="absolute top-6 right-6 z-50 flex flex-col gap-1">
        <button
          onClick={handleZoomIn}
          className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded border border-white/20 shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200"
          aria-label="Zoom in"
          disabled={!isMapReady}
        >
          <Plus className="w-4 h-4 text-gray-700" />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded border border-white/20 shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200"
          aria-label="Zoom out"
          disabled={!isMapReady}
        >
          <Minus className="w-4 h-4 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default MapboxMap;