
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { MAP_CONFIG } from '@/utils/mapConfig';

interface UseMapboxProps {
  latitude: number;
  longitude: number;
  zoom: number;
  apiKey: string;
  isInteractive?: boolean;
}

export const useMapbox = ({ latitude, longitude, zoom, apiKey, isInteractive = true }: UseMapboxProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !apiKey.trim()) {
      console.log('Missing container or API key');
      return;
    }

    console.log('Initializing map...');
    console.log('Container:', mapContainer.current);
    console.log('API Key:', apiKey.substring(0, 20) + '...');
    console.log('Coordinates:', { latitude, longitude, zoom });
    console.log('Interactive:', isInteractive);

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
        style: MAP_CONFIG.style.light,
        center: [longitude, latitude],
        zoom: zoom,
        pitch: MAP_CONFIG.pitch,
        interactive: isInteractive,
      });

      console.log('Map instance created');

      // Add event listeners
      map.current.on('load', () => {
        console.log('Map loaded successfully!');
        
        // Add navigation controls only if interactive
        if (map.current && isInteractive) {
          map.current.addControl(
            new mapboxgl.NavigationControl({
              visualizePitch: true,
            }),
            'top-right'
          );
        }

        // Add a marker
        if (map.current) {
          new mapboxgl.Marker({
            color: MAP_CONFIG.marker.color,
            scale: MAP_CONFIG.marker.scale
          })
            .setLngLat([longitude, latitude])
            .setPopup(
              new mapboxgl.Popup({ offset: MAP_CONFIG.marker.popupOffset })
                .setHTML(MAP_CONFIG.marker.popupHtml)
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
          map.current.setFog(MAP_CONFIG.fog);
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
  }, [apiKey, latitude, longitude, zoom, isInteractive]);

  // Update map interactivity when the prop changes
  useEffect(() => {
    if (map.current) {
      console.log('Updating map interactivity:', isInteractive);
      
      if (isInteractive) {
        map.current.dragPan.enable();
        map.current.scrollZoom.enable();
        map.current.boxZoom.enable();
        map.current.dragRotate.enable();
        map.current.keyboard.enable();
        map.current.doubleClickZoom.enable();
        map.current.touchZoomRotate.enable();
      } else {
        map.current.dragPan.disable();
        map.current.scrollZoom.disable();
        map.current.boxZoom.disable();
        map.current.dragRotate.disable();
        map.current.keyboard.disable();
        map.current.doubleClickZoom.disable();
        map.current.touchZoomRotate.disable();
      }
    }
  }, [isInteractive]);

  return { mapContainer, map: map.current };
};
