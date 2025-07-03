import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { MAP_CONFIG } from '@/utils/mapConfig';

interface UseSimpleMapboxProps {
  latitude: number;
  longitude: number;
  zoom: number;
  apiKey: string;
  isInteractive?: boolean;
  isDarkMode?: boolean;
}

export const useSimpleMapbox = ({ 
  latitude, 
  longitude, 
  zoom, 
  apiKey, 
  isInteractive = true,
  isDarkMode = false
}: UseSimpleMapboxProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !apiKey.trim()) {
      console.log('Missing container or API key');
      return;
    }

    console.log('Initializing simple map...');
    
    try {
      mapboxgl.accessToken = apiKey.trim();
      
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: isDarkMode ? MAP_CONFIG.style.dark : MAP_CONFIG.style.light,
        center: [longitude, latitude],
        zoom: zoom,
        pitch: MAP_CONFIG.pitch,
        interactive: isInteractive,
      });

      map.current.on('load', () => {
        console.log('Simple map loaded successfully!');
        setIsMapReady(true);
        
        // Navigation controls will be handled by custom component

        // Add main property marker
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

      map.current.on('style.load', () => {
        console.log('Simple map style loaded');
        if (map.current) {
          map.current.setFog(MAP_CONFIG.fog);
        }
      });

      map.current.on('error', (e) => {
        console.error('Simple map error:', e);
      });

    } catch (error) {
      console.error('Error initializing simple map:', error);
    }
    
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [apiKey, latitude, longitude, zoom, isInteractive, isDarkMode]);

  // Update map interactivity
  useEffect(() => {
    if (map.current && isMapReady) {
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
  }, [isInteractive, isMapReady]);

  // Update map style when isDarkMode changes
  useEffect(() => {
    if (map.current && isMapReady) {
      const newStyle = isDarkMode ? MAP_CONFIG.style.dark : MAP_CONFIG.style.light;
      map.current.setStyle(newStyle);
    }
  }, [isDarkMode, isMapReady]);

  return { mapContainer, map: map.current, isMapReady };
};