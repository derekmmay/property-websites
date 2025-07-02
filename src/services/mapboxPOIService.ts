import mapboxgl from 'mapbox-gl';

interface POIResult {
  id: string;
  name: string;
  coordinates: [number, number];
  category: string;
  address?: string;
  phone?: string;
}

export const searchPOIs = async (
  map: mapboxgl.Map,
  category: string,
  center: [number, number],
  radius: number = 5000
): Promise<POIResult[]> => {
  try {
    // Use Mapbox Geocoding API with categories instead of Search API
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${category}.json?proximity=${center[0]},${center[1]}&types=poi&limit=10&access_token=${mapboxgl.accessToken}`;
    console.log(`Fetching POIs for ${category} with URL:`, url);
    
    const response = await fetch(url);
    
    console.log(`Response status for ${category}:`, response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Failed to fetch POIs for ${category}:`, response.status, errorText);
      return [];
    }
    
    const data = await response.json();
    console.log(`Raw data for ${category}:`, data);
    
    const results = data.features?.map((item: any) => ({
      id: item.id || `${category}-${Math.random()}`,
      name: item.text || item.place_name || 'Unknown',
      coordinates: item.center || center,
      category: category,
      address: item.place_name,
      phone: item.properties?.phone
    })) || [];
    
    console.log(`Processed POI results for ${category}:`, results);
    return results;
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