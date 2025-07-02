
import { useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { propertyData, getPropertyValueColor } from '@/services/mapDataService';
import { searchPOIs, getCategoryColor, getCategoryIcon } from '@/services/mapboxPOIService';

export const useMapMarkers = () => {
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  const clearAllMarkers = () => {
    console.log('clearAllMarkers called, removing', markersRef.current.length, 'markers');
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

  const addPOIMarkers = async (map: mapboxgl.Map, activeFilters: string[]) => {
    console.log('Adding POI markers for filters:', activeFilters);
    
    if (activeFilters.length === 0) return;
    
    const center: [number, number] = [-117.7018, 33.4734]; // Dana Point coordinates
    
    // Search for POIs for each active filter
    for (const filter of activeFilters) {
      try {
        const pois = await searchPOIs(map, filter, center);
        console.log(`Found ${pois.length} POIs for ${filter}`);
        
        pois.forEach((poi) => {
          const color = getCategoryColor(poi.category);
          const icon = getCategoryIcon(poi.category);
          
          // Create custom marker element
          const el = document.createElement('div');
          el.className = 'custom-marker';
          el.style.width = '30px';
          el.style.height = '30px';
          el.style.borderRadius = '50%';
          el.style.backgroundColor = color;
          el.style.border = '2px solid white';
          el.style.display = 'flex';
          el.style.alignItems = 'center';
          el.style.justifyContent = 'center';
          el.style.fontSize = '14px';
          el.textContent = icon;
          
          const marker = new mapboxgl.Marker({ element: el })
            .setLngLat(poi.coordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 15 })
                .setHTML(`
                  <div class="p-3">
                    <h3 class="font-bold text-sm mb-1">${poi.name}</h3>
                    ${poi.address ? `<p class="text-xs text-gray-600 mb-1">${poi.address}</p>` : ''}
                    ${poi.phone ? `<p class="text-xs text-gray-600 mb-1">${poi.phone}</p>` : ''}
                    <span class="inline-block text-xs px-2 py-1 rounded bg-gray-100 text-gray-800 capitalize">
                      ${poi.category.replace('_', ' ')}
                    </span>
                  </div>
                `)
            )
            .addTo(map);

          markersRef.current.push(marker);
        });
      } catch (error) {
        console.error(`Error adding markers for ${filter}:`, error);
      }
    }
  };

  return {
    clearAllMarkers,
    addPropertyValueMarkers,
    addPOIMarkers
  };
};
