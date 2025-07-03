import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ZoomIn, ZoomOut } from 'lucide-react';

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
      console.log('Updating map interactivity:', isInteractive);
      
      if (isInteractive) {
        mapRef.current.dragPan.enable();
        mapRef.current.scrollZoom.enable();
        mapRef.current.boxZoom.enable();
        mapRef.current.dragRotate.enable();
        mapRef.current.keyboard.enable();
        mapRef.current.doubleClickZoom.enable();
        mapRef.current.touchZoomRotate.enable();
        
        // Ensure zoom is enabled programmatically
        mapRef.current.getCanvas().style.cursor = 'grab';
        console.log('All interactive controls enabled, including scroll zoom');
      } else {
        mapRef.current.dragPan.disable();
        mapRef.current.scrollZoom.disable();
        mapRef.current.boxZoom.disable();
        mapRef.current.dragRotate.disable();
        mapRef.current.keyboard.disable();
        mapRef.current.doubleClickZoom.disable();
        mapRef.current.touchZoomRotate.disable();
        
        mapRef.current.getCanvas().style.cursor = 'default';
        console.log('All interactive controls disabled');
      }
    }
  }, [isInteractive, isMapReady]);

  const handleZoomIn = (e: React.MouseEvent) => {
    console.log('=== ZOOM IN BUTTON CLICKED ===');
    console.log('Event target:', e.target);
    console.log('Current target:', e.currentTarget);
    console.log('Interactive:', isInteractive);
    console.log('Map exists:', !!mapRef.current);
    console.log('Map ready:', isMapReady);
    
    e.preventDefault();
    e.stopPropagation();
    
    if (mapRef.current) {
      const currentLevel = mapRef.current.getZoom();
      console.log('Current zoom level:', currentLevel);
      
      try {
        // Try using easeTo for smoother transition
        mapRef.current.easeTo({
          zoom: currentLevel + 1,
          duration: 300
        });
        console.log('Zoom easeTo command sent, new target:', currentLevel + 1);
        
        setTimeout(() => {
          console.log('Actual zoom after easeTo:', mapRef.current?.getZoom());
        }, 400);
      } catch (error) {
        console.error('Error setting zoom:', error);
      }
    } else {
      console.error('NO MAP REFERENCE AVAILABLE');
    }
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    console.log('=== ZOOM OUT BUTTON CLICKED ===');
    console.log('Event target:', e.target);
    console.log('Current target:', e.currentTarget);
    console.log('Interactive:', isInteractive);
    console.log('Map exists:', !!mapRef.current);
    console.log('Map ready:', isMapReady);
    
    e.preventDefault();
    e.stopPropagation();
    
    if (mapRef.current) {
      const currentLevel = mapRef.current.getZoom();
      console.log('Current zoom level:', currentLevel);
      
      try {
        const newZoom = Math.max(0, currentLevel - 1);
        // Try using easeTo for smoother transition
        mapRef.current.easeTo({
          zoom: newZoom,
          duration: 300
        });
        console.log('Zoom easeTo command sent, new target:', newZoom);
        
        setTimeout(() => {
          console.log('Actual zoom after easeTo:', mapRef.current?.getZoom());
        }, 400);
      } catch (error) {
        console.error('Error setting zoom:', error);
      }
    } else {
      console.error('NO MAP REFERENCE AVAILABLE');
    }
  };


  return (
    <div className={`relative ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
      
      {/* Custom Zoom Controls - Only show in interactive mode */}
      {isInteractive && (
        <div className="absolute top-6 right-6 z-[60] flex flex-col gap-2 pointer-events-auto">
          <button
            onClick={handleZoomIn}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-lg border border-gray-200 shadow-xl flex items-center justify-center hover:bg-white hover:shadow-2xl transition-all duration-200 cursor-pointer select-none"
            aria-label="Zoom in"
            type="button"
            style={{ pointerEvents: 'auto' }}
          >
            <ZoomIn className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={handleZoomOut}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-lg border border-gray-200 shadow-xl flex items-center justify-center hover:bg-white hover:shadow-2xl transition-all duration-200 cursor-pointer select-none"
            aria-label="Zoom out"
            type="button"
            style={{ pointerEvents: 'auto' }}
          >
            <ZoomOut className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MapboxMap;