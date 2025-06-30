
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

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
  const [apiKey] = useState<string>('pk.eyJ1IjoiZGVyZWttbWF5IiwiYSI6ImNtY2ptMXcxZjA0cGQybXB2NnphemRhNWkifQ.gBYDOal4M8tAzN7BIo6UTg');

  useEffect(() => {
    if (!mapContainer.current || !apiKey.trim()) {
      console.log('Missing container or API key');
      return;
    }

    console.log('Initializing map...');
    console.log('Container:', mapContainer.current);
    console.log('API Key:', apiKey.substring(0, 20) + '...');
    console.log('Coordinates:', { latitude, longitude, zoom });

    try {
      // Set the access token
      mapboxgl.accessToken = apiKey.trim();
      
      // Clean up existing map
      if (map.current) {
        console.log('Cleaning up existing map');
        map.current.remove();
        map.current = null;
      }
      
      console.log('Creating new map instance...');
      
      // Initialize map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [longitude, latitude],
        zoom: zoom,
        pitch: 45,
      });

      console.log('Map instance created');

      // Add event listeners
      map.current.on('load', () => {
        console.log('Map loaded successfully!');
        
        // Add navigation controls
        if (map.current) {
          map.current.addControl(
            new mapboxgl.NavigationControl({
              visualizePitch: true,
            }),
            'top-right'
          );

          // Add a marker
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
        }
      });

      map.current.on('error', (e) => {
        console.error('Map error:', e);
      });

      map.current.on('style.load', () => {
        console.log('Map style loaded');
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
    }
    
    return () => {
      if (map.current) {
        console.log('Cleaning up map on unmount');
        map.current.remove();
        map.current = null;
      }
    };
  }, [apiKey, latitude, longitude, zoom]);

  return (
    <div className={className}>
      <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
    </div>
  );
};

export default InteractiveMap;
