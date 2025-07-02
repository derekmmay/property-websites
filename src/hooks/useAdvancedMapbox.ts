
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
  const [isStyleLoaded, setIsStyleLoaded] = useState(false);
  
  const { 
    clearAllMarkers, 
    addPropertyValueMarkers, 
    addPOIMarkers 
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
        console.log('Map style loaded');
        setIsStyleLoaded(true);
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
    if (!map.current || !isMapLoaded || !isStyleLoaded) return;

    addTravelTimeIsochrones(map.current);
    add3DBuildings(map.current);
  };

  const setupFilteredLayers = async () => {
    if (!map.current || !isMapLoaded || !isStyleLoaded) return;

    console.log('Setting up filtered layers with filters:', activeFilters);
    
    clearAllMarkers();
    
    if (activeFilters.length === 0) {
      console.log('No active filters, clearing all markers');
      return;
    }
    
    // Add property markers if high-income filter is active
    if (activeFilters.includes('high-income')) {
      addPropertyValueMarkers(map.current);
    }
    
    // Add POI markers for all other filters
    const poiFilters = activeFilters.filter(filter => filter !== 'high-income');
    if (poiFilters.length > 0) {
      await addPOIMarkers(map.current, poiFilters);
    }
  };

  // Setup static layers when style loads
  useEffect(() => {
    if (isStyleLoaded) {
      setupStaticLayers();
    }
  }, [isStyleLoaded]);

  // Update map interactivity
  useEffect(() => {
    if (map.current) {
      setupMapInteractivity(map.current, isInteractive);
    }
  }, [isInteractive]);

  // Update layers based on active filters
  useEffect(() => {
    console.log('Filter change detected:', activeFilters);
    if (map.current && isMapLoaded && isStyleLoaded) {
      setupFilteredLayers();
    }
  }, [activeFilters, isMapLoaded, isStyleLoaded]);

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
