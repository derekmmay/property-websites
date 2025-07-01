
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { MAP_CONFIG } from '@/utils/mapConfig';
import { addTravelTimeIsochrones, addLuxuryHeatmap, add3DBuildings } from '@/utils/mapLayers';
import { setupMapInteractivity, addMainPropertyMarker, addNavigationControls } from '@/utils/mapSetup';
import { useMapMarkers } from '@/hooks/useMapMarkers';

interface UseAdvancedMapboxProps {
  latitude: number;
  longitude: number;
  zoom: number;
  apiKey: string;
  isInteractive?: boolean;
  activeFilters: string[];
}

export const useAdvancedMapbox = ({ 
  latitude, 
  longitude, 
  zoom, 
  apiKey, 
  isInteractive = true,
  activeFilters 
}: UseAdvancedMapboxProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
  const { 
    clearAllMarkers, 
    addPropertyValueMarkers, 
    addSchoolMarkers, 
    addLuxuryPOIMarkers 
  } = useMapMarkers();

  useEffect(() => {
    if (!mapContainer.current || !apiKey.trim()) {
      console.log('Missing container or API key');
      return;
    }

    console.log('Initializing advanced map...');
    
    try {
      mapboxgl.accessToken = apiKey.trim();
      
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: MAP_CONFIG.style,
        center: [longitude, latitude],
        zoom: zoom,
        pitch: MAP_CONFIG.pitch,
        interactive: isInteractive,
      });

      map.current.on('load', () => {
        console.log('Advanced map loaded successfully!');
        setIsMapLoaded(true);
        
        if (map.current && isInteractive) {
          addNavigationControls(map.current);
        }

        if (map.current) {
          addMainPropertyMarker(map.current, longitude, latitude);
        }

        setupStaticLayers();
      });

      map.current.on('style.load', () => {
        if (map.current) {
          map.current.setFog(MAP_CONFIG.fog);
        }
      });

    } catch (error) {
      console.error('Error initializing advanced map:', error);
    }
    
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [apiKey, latitude, longitude, zoom, isInteractive]);

  const setupStaticLayers = () => {
    if (!map.current || !isMapLoaded) return;

    addTravelTimeIsochrones(map.current);
    add3DBuildings(map.current);
  };

  const setupFilteredLayers = () => {
    if (!map.current || !isMapLoaded) return;

    console.log('Setting up filtered layers with filters:', activeFilters);
    
    clearAllMarkers();
    
    // Add property markers if high-income filter is active or no filters
    if (activeFilters.includes('high-income') || activeFilters.length === 0) {
      addPropertyValueMarkers(map.current);
    }
    
    // Add school markers if education filter is active or no filters
    if (activeFilters.includes('education') || activeFilters.length === 0) {
      addSchoolMarkers(map.current);
    }
    
    // Add luxury POI markers based on their categories
    addLuxuryPOIMarkers(map.current, activeFilters);
    
    // Add luxury heatmap (always visible for context)
    addLuxuryHeatmap(map.current);
  };

  // Update map interactivity
  useEffect(() => {
    if (map.current) {
      setupMapInteractivity(map.current, isInteractive);
    }
  }, [isInteractive]);

  // Update layers based on active filters
  useEffect(() => {
    console.log('Filter change detected:', activeFilters);
    if (map.current && isMapLoaded) {
      setupFilteredLayers();
    }
  }, [activeFilters, isMapLoaded]);

  const flyToLocation = (coordinates: [number, number], zoom: number = 16) => {
    if (map.current) {
      map.current.flyTo({
        center: coordinates,
        zoom: zoom,
        duration: 2000,
        essential: true
      });
    }
  };

  return { mapContainer, map: map.current, flyToLocation };
};
