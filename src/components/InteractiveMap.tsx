
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface InteractiveMapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  className?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  latitude = 33.4734, 
  longitude = -117.7018, 
  zoom = 15,
  className = "w-full h-96"
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState<string>('pk.eyJ1IjoiZGVyZWttbWF5IiwiYSI6ImNtY2ptMXcxZjA0cGQybXB2NnphemRhNWkifQ.gBYDOal4M8tAzN7BIo6UTg');
  const [mapInitialized, setMapInitialized] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const initializeMap = () => {
    if (!mapContainer.current || !apiKey.trim()) {
      console.log('Missing container or API key');
      return;
    }

    try {
      console.log('Initializing map with coordinates:', { latitude, longitude, zoom });
      
      // Set the access token
      mapboxgl.accessToken = apiKey.trim();
      
      // Clean up existing map
      if (map.current) {
        map.current.remove();
      }
      
      // Initialize map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [longitude, latitude],
        zoom: zoom,
        pitch: 45,
      });

      // Add event listeners for debugging
      map.current.on('load', () => {
        console.log('Map loaded successfully');
        setMapInitialized(true);
        setError('');
      });

      map.current.on('error', (e) => {
        console.error('Map error:', e);
        setError('Map failed to load. Please check your API key.');
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add a marker for the property location
      new mapboxgl.Marker({
        color: '#000000',
        scale: 1.2
      })
        .setLngLat([longitude, latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<div class="text-sm font-medium">126 Monarch Bay Drive<br><span class="text-xs text-gray-600">Dana Point, CA</span></div>')
        )
        .addTo(map.current);

      // Add atmosphere effects
      map.current.on('style.load', () => {
        if (map.current) {
          map.current.setFog({
            color: 'rgb(255, 255, 255)',
            'high-color': 'rgb(200, 200, 225)',
            'horizon-blend': 0.2,
          });
        }
      });

    } catch (error) {
      console.error('Error initializing map:', error);
      setError('Failed to initialize map. Please check your API key.');
    }
  };

  // Auto-initialize the map on component mount with the default API key
  useEffect(() => {
    console.log('useEffect triggered, apiKey:', apiKey, 'mapInitialized:', mapInitialized);
    if (apiKey && !mapInitialized && !map.current) {
      initializeMap();
    }
    
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [apiKey, mapInitialized]);

  if (error) {
    return (
      <div className={`${className} bg-red-50 border border-red-200 rounded-lg flex flex-col items-center justify-center p-8`}>
        <div className="text-center max-w-md">
          <h3 className="text-lg font-medium text-red-900 mb-4">Map Error</h3>
          <p className="text-sm text-red-600 mb-6">{error}</p>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Enter Mapbox public token (pk.eyJ1...)"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full"
            />
            <Button 
              onClick={() => {
                setError('');
                setMapInitialized(false);
                initializeMap();
              }}
              disabled={!apiKey.trim()}
              className="w-full"
            >
              Retry Map
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!mapInitialized) {
    return (
      <div className={`${className} bg-gray-100 border border-gray-200 rounded-lg flex flex-col items-center justify-center p-8`}>
        <div className="text-center max-w-md">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Loading Map...</h3>
          <p className="text-sm text-gray-600 mb-6">
            Initializing interactive map with Mapbox
          </p>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Enter Mapbox public token (pk.eyJ1...)"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full"
            />
            <Button 
              onClick={initializeMap}
              disabled={!apiKey.trim()}
              className="w-full"
            >
              Initialize Map
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
    </div>
  );
};

export default InteractiveMap;
