
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
  const [apiKey, setApiKey] = useState<string>('');
  const [mapInitialized, setMapInitialized] = useState<boolean>(false);

  const initializeMap = () => {
    if (!mapContainer.current || !apiKey.trim()) return;

    try {
      // Set the access token
      mapboxgl.accessToken = apiKey.trim();
      
      // Initialize map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [longitude, latitude],
        zoom: zoom,
        pitch: 45,
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
        map.current?.setFog({
          color: 'rgb(255, 255, 255)',
          'high-color': 'rgb(200, 200, 225)',
          'horizon-blend': 0.2,
        });
      });

      setMapInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
      alert('Invalid API key. Please check your Mapbox public token.');
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!mapInitialized) {
    return (
      <div className={`${className} bg-gray-100 border border-gray-200 rounded-lg flex flex-col items-center justify-center p-8`}>
        <div className="text-center max-w-md">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Interactive Map</h3>
          <p className="text-sm text-gray-600 mb-6">
            Enter your Mapbox public token to view the interactive map. 
            Get your token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mapbox.com</a>
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
