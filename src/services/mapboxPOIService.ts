
import mapboxgl from 'mapbox-gl';

interface POIResult {
  id: string;
  name: string;
  coordinates: [number, number];
  category: string;
  address?: string;
  phone?: string;
}

// Map our filter categories to Mapbox POI categories
const getCategoryMapping = (category: string): string => {
  const mappings: Record<string, string> = {
    'restaurant': 'restaurant',
    'cafe': 'cafe',
    'bar': 'bar',
    'grocery': 'grocery',
    'gas_station': 'gas',
    'hospital': 'hospital',
    'lodging': 'lodging',
    'tourist_attraction': 'tourist_attraction',
    'bank': 'bank',
    'golf_course': 'golf',
    'park': 'park',
    'gym': 'gym',
    'school': 'school',
    'university': 'university',
    'library': 'library'
  };
  
  return mappings[category] || category;
};

export const searchPOIs = async (
  map: mapboxgl.Map,
  category: string,
  center: [number, number],
  radius: number = 5000
): Promise<POIResult[]> => {
  try {
    const mappedCategory = getCategoryMapping(category);
    console.log(`Searching for category: ${category} -> mapped to: ${mappedCategory}`);
    
    // Try multiple search approaches
    const searches = [
      // Approach 1: Search by category name
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${mappedCategory}.json?proximity=${center[0]},${center[1]}&types=poi&limit=10&access_token=${mapboxgl.accessToken}`,
      // Approach 2: Search by general query
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${category}.json?proximity=${center[0]},${center[1]}&types=poi&limit=10&access_token=${mapboxgl.accessToken}`
    ];
    
    let allResults: POIResult[] = [];
    
    for (let i = 0; i < searches.length; i++) {
      const url = searches[i];
      console.log(`Attempt ${i + 1} - Fetching POIs for ${category} with URL:`, url);
      
      try {
        const response = await fetch(url);
        console.log(`Response status for ${category} (attempt ${i + 1}):`, response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Failed to fetch POIs for ${category} (attempt ${i + 1}):`, response.status, errorText);
          continue;
        }
        
        const data = await response.json();
        console.log(`Raw data for ${category} (attempt ${i + 1}):`, data);
        
        if (data.features && data.features.length > 0) {
          const results = data.features.map((item: any) => ({
            id: item.id || `${category}-${Math.random()}`,
            name: item.text || item.place_name || 'Unknown',
            coordinates: item.center || center,
            category: category,
            address: item.place_name,
            phone: item.properties?.phone
          }));
          
          console.log(`Found ${results.length} POIs for ${category} (attempt ${i + 1}):`, results);
          allResults.push(...results);
          
          // If we found results, break out of the loop
          if (results.length > 0) {
            break;
          }
        } else {
          console.log(`No features found for ${category} (attempt ${i + 1})`);
        }
      } catch (fetchError) {
        console.error(`Fetch error for ${category} (attempt ${i + 1}):`, fetchError);
      }
    }
    
    // If no results from geocoding, try a broader search
    if (allResults.length === 0) {
      console.log(`No results found for ${category}, trying broader search...`);
      const broadUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${category}.json?proximity=${center[0]},${center[1]}&limit=10&access_token=${mapboxgl.accessToken}`;
      
      try {
        const response = await fetch(broadUrl);
        if (response.ok) {
          const data = await response.json();
          console.log(`Broad search data for ${category}:`, data);
          
          if (data.features && data.features.length > 0) {
            allResults = data.features.map((item: any) => ({
              id: item.id || `${category}-${Math.random()}`,
              name: item.text || item.place_name || 'Unknown',
              coordinates: item.center || center,
              category: category,
              address: item.place_name,
              phone: item.properties?.phone
            }));
            console.log(`Broad search found ${allResults.length} results for ${category}`);
          }
        }
      } catch (broadError) {
        console.error(`Broad search error for ${category}:`, broadError);
      }
    }
    
    console.log(`Final results for ${category}:`, allResults);
    return allResults;
  } catch (error) {
    console.error(`Error fetching POIs for ${category}:`, error);
    return [];
  }
};

export const getCategoryColor = (category: string): string => {
  const colorMap: Record<string, string> = {
    'restaurant': '#ef4444',
    'cafe': '#f59e0b',
    'bar': '#8b5cf6',
    'grocery': '#10b981',
    'gas_station': '#06b6d4',
    'hospital': '#f43f5e',
    'lodging': '#3b82f6',
    'tourist_attraction': '#8b5cf6',
    'bank': '#6366f1',
    'golf_course': '#22c55e',
    'park': '#16a34a',
    'gym': '#f97316',
    'school': '#eab308',
    'university': '#a855f7',
    'library': '#6366f1'
  };
  
  return colorMap[category] || '#6b7280';
};

export const getCategoryIcon = (category: string): string => {
  const iconMap: Record<string, string> = {
    'restaurant': '🍽️',
    'cafe': '☕',
    'bar': '🍹',
    'grocery': '🛒',
    'gas_station': '⛽',
    'hospital': '🏥',
    'lodging': '🏨',
    'tourist_attraction': '🎯',
    'bank': '🏦',
    'golf_course': '⛳',
    'park': '🌳',
    'gym': '💪',
    'school': '🏫',
    'university': '🎓',
    'library': '📚'
  };
  
  return iconMap[category] || '📍';
};
