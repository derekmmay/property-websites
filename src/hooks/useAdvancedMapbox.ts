
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { MAP_CONFIG } from '@/utils/mapConfig';
import { propertyData, luxuryPOIs, schoolData, travelTimeIsochrones, getPropertyValueColor, getLuxuryHeatmapData } from '@/services/mapDataService';

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
  
  // Track all markers for proper cleanup
  const markersRef = useRef<mapboxgl.Marker[]>([]);

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
          map.current.addControl(
            new mapboxgl.NavigationControl({
              visualizePitch: true,
            }),
            'top-right'
          );
        }

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

  const clearAllMarkers = () => {
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];
  };

  const setupStaticLayers = () => {
    if (!map.current || !isMapLoaded) return;

    // Add travel time isochrones (always visible)
    addTravelTimeIsochrones();
    
    // Add 3D buildings (always visible)
    add3DBuildings();
  };

  const setupFilteredLayers = () => {
    if (!map.current || !isMapLoaded) return;

    console.log('Setting up filtered layers with filters:', activeFilters);
    
    // Clear existing markers
    clearAllMarkers();
    
    // Add property markers if high-income filter is active or no filters
    if (activeFilters.includes('high-income') || activeFilters.length === 0) {
      addPropertyValueLayer();
    }
    
    // Add school markers if education filter is active or no filters
    if (activeFilters.includes('education') || activeFilters.length === 0) {
      addSchoolMarkers();
    }
    
    // Add luxury POI markers based on their categories
    addLuxuryPOIMarkers();
    
    // Add luxury heatmap (always visible for context)
    addLuxuryHeatmap();
  };

  const addPropertyValueLayer = () => {
    if (!map.current) return;

    console.log('Adding property value markers');
    
    propertyData.forEach((property) => {
      const color = getPropertyValueColor(property.price);
      
      const marker = new mapboxgl.Marker({
        color: color,
        scale: 0.8
      })
        .setLngLat(property.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-2">
                <h3 class="font-bold text-sm">${property.address}</h3>
                <p class="text-xs text-gray-600">$${property.price.toLocaleString()}</p>
                <p class="text-xs">${property.bedrooms} bed, ${property.bathrooms} bath</p>
                <p class="text-xs">${property.sqft.toLocaleString()} sqft</p>
                <span class="text-xs px-2 py-1 rounded ${
                  property.type === 'sale' ? 'bg-green-100 text-green-800' :
                  property.type === 'sold' ? 'bg-gray-100 text-gray-800' :
                  'bg-blue-100 text-blue-800'
                }">${property.type.toUpperCase()}</span>
              </div>
            `)
        )
        .addTo(map.current!);

      markersRef.current.push(marker);
    });
  };

  const addSchoolMarkers = () => {
    if (!map.current) return;

    console.log('Adding school markers');
    
    schoolData.forEach((school) => {
      const color = school.rating >= 9 ? '#22c55e' : school.rating >= 7 ? '#eab308' : '#ef4444';
      
      const marker = new mapboxgl.Marker({
        color: color,
        scale: 0.7
      })
        .setLngLat(school.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 15 })
            .setHTML(`
              <div class="p-2">
                <h3 class="font-bold text-sm">${school.name}</h3>
                <p class="text-xs text-gray-600">${school.type} school</p>
                <p class="text-xs">Rating: ${school.rating}/10</p>
                <p class="text-xs">${school.district}</p>
              </div>
            `)
        )
        .addTo(map.current!);

      markersRef.current.push(marker);
    });
  };

  const addLuxuryPOIMarkers = () => {
    if (!map.current) return;

    console.log('Adding luxury POI markers for filters:', activeFilters);
    
    luxuryPOIs.forEach((poi) => {
      const shouldShow = activeFilters.includes(poi.category) || activeFilters.length === 0;
      
      if (shouldShow) {
        const marker = new mapboxgl.Marker({
          color: '#000',
          scale: 0.6
        })
          .setLngLat(poi.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 15 })
              .setHTML(`
                <div class="p-2">
                  <h3 class="font-bold text-sm">${poi.name}</h3>
                  <p class="text-xs text-gray-600">${poi.description}</p>
                  ${poi.rating ? `<p class="text-xs">Rating: ${'★'.repeat(poi.rating)}</p>` : ''}
                  <p class="text-xs text-blue-600">${poi.category}</p>
                </div>
              `)
          )
          .addTo(map.current!);

        markersRef.current.push(marker);
      }
    });
  };

  const addTravelTimeIsochrones = () => {
    if (!map.current) return;

    // Add 15-minute travel time zone
    if (!map.current.getSource('travel-15min')) {
      map.current.addSource('travel-15min', {
        type: 'geojson',
        data: travelTimeIsochrones['15min']
      });

      map.current.addLayer({
        id: 'travel-15min-fill',
        type: 'fill',
        source: 'travel-15min',
        paint: {
          'fill-color': '#ff6b6b',
          'fill-opacity': 0.1
        }
      });

      map.current.addLayer({
        id: 'travel-15min-line',
        type: 'line',
        source: 'travel-15min',
        paint: {
          'line-color': '#ff6b6b',
          'line-width': 2,
          'line-dasharray': [2, 2]
        }
      });
    }

    // Add 30-minute travel time zone
    if (!map.current.getSource('travel-30min')) {
      map.current.addSource('travel-30min', {
        type: 'geojson',
        data: travelTimeIsochrones['30min']
      });

      map.current.addLayer({
        id: 'travel-30min-fill',
        type: 'fill',
        source: 'travel-30min',
        paint: {
          'fill-color': '#4ecdc4',
          'fill-opacity': 0.1
        }
      });

      map.current.addLayer({
        id: 'travel-30min-line',
        type: 'line',
        source: 'travel-30min',
        paint: {
          'line-color': '#4ecdc4',
          'line-width': 2,
          'line-dasharray': [2, 2]
        }
      });
    }
  };

  const addLuxuryHeatmap = () => {
    if (!map.current) return;

    const heatmapData = getLuxuryHeatmapData();
    
    if (!map.current.getSource('luxury-heatmap')) {
      map.current.addSource('luxury-heatmap', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: heatmapData.map(point => ({
            type: 'Feature',
            properties: { weight: point.weight },
            geometry: {
              type: 'Point',
              coordinates: point.coordinates
            }
          }))
        }
      });

      map.current.addLayer({
        id: 'luxury-heatmap-layer',
        type: 'heatmap',
        source: 'luxury-heatmap',
        paint: {
          'heatmap-weight': ['get', 'weight'],
          'heatmap-intensity': 1,
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(33,102,172,0)',
            0.2, 'rgb(103,169,207)',
            0.4, 'rgb(209,229,240)',
            0.6, 'rgb(253,219,199)',
            0.8, 'rgb(239,138,98)',
            1, 'rgb(178,24,43)'
          ],
          'heatmap-radius': 30,
          'heatmap-opacity': 0.6
        }
      });
    }
  };

  const add3DBuildings = () => {
    if (!map.current) return;

    if (!map.current.getLayer('3d-buildings')) {
      map.current.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 15,
        paint: {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15, 0,
            15.05, ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15, 0,
            15.05, ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      });
    }
  };

  // Update map interactivity
  useEffect(() => {
    if (map.current) {
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
