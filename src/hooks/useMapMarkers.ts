
import { useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { propertyData, luxuryPOIs, schoolData, getPropertyValueColor } from '@/services/mapDataService';

export const useMapMarkers = () => {
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  const clearAllMarkers = () => {
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];
  };

  const addPropertyValueMarkers = (map: mapboxgl.Map) => {
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
        .addTo(map);

      markersRef.current.push(marker);
    });
  };

  const addSchoolMarkers = (map: mapboxgl.Map) => {
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
        .addTo(map);

      markersRef.current.push(marker);
    });
  };

  const addLuxuryPOIMarkers = (map: mapboxgl.Map, activeFilters: string[]) => {
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
          .addTo(map);

        markersRef.current.push(marker);
      }
    });
  };

  return {
    clearAllMarkers,
    addPropertyValueMarkers,
    addSchoolMarkers,
    addLuxuryPOIMarkers
  };
};
