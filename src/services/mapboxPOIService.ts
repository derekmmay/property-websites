
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

// Mock POI data for Dana Point area
const getMockPOIs = (category: string, center: [number, number]): POIResult[] => {
  const baseCoords = center;
  const mockData: Record<string, POIResult[]> = {
    restaurant: [
      { id: 'r1', name: 'The Ritz-Carlton Laguna Niguel', coordinates: [baseCoords[0] + 0.001, baseCoords[1] + 0.001], category, address: '1 Ritz Carlton Dr, Dana Point, CA' },
      { id: 'r2', name: 'Chart House Dana Point', coordinates: [baseCoords[0] - 0.001, baseCoords[1] + 0.002], category, address: '34442 Green Lantern St, Dana Point, CA' },
      { id: 'r3', name: "Luciana's Ristorante", coordinates: [baseCoords[0] + 0.002, baseCoords[1] - 0.001], category, address: '24312 Del Prado, Dana Point, CA' }
    ],
    cafe: [
      { id: 'c1', name: 'Coffee Importers', coordinates: [baseCoords[0] + 0.0015, baseCoords[1] + 0.0005], category, address: '24601 Del Prado, Dana Point, CA' },
      { id: 'c2', name: 'Starbucks Dana Point', coordinates: [baseCoords[0] - 0.0005, baseCoords[1] + 0.0015], category, address: '24300 Chrisanta Dr, Dana Point, CA' }
    ],
    bar: [
      { id: 'b1', name: 'Wind & Sea Restaurant', coordinates: [baseCoords[0] + 0.001, baseCoords[1] - 0.0005], category, address: '34699 Golden Lantern, Dana Point, CA' },
      { id: 'b2', name: 'Hennessey\'s Tavern', coordinates: [baseCoords[0] - 0.002, baseCoords[1] + 0.001], category, address: '34111 Golden Lantern St, Dana Point, CA' }
    ],
    grocery: [
      { id: 'g1', name: 'Whole Foods Market', coordinates: [baseCoords[0] + 0.003, baseCoords[1] + 0.001], category, address: '26755 Aliso Creek Rd, Aliso Viejo, CA' },
      { id: 'g2', name: 'Pavilions', coordinates: [baseCoords[0] - 0.001, baseCoords[1] - 0.002], category, address: '24820 Del Prado, Dana Point, CA' }
    ],
    gas_station: [
      { id: 'gs1', name: 'Shell', coordinates: [baseCoords[0] + 0.002, baseCoords[1] + 0.002], category, address: '24832 Del Prado, Dana Point, CA' },
      { id: 'gs2', name: 'Chevron', coordinates: [baseCoords[0] - 0.0015, baseCoords[1] - 0.001], category, address: '34143 Coast Hwy, Dana Point, CA' }
    ],
    hospital: [
      { id: 'h1', name: 'Mission Hospital Laguna Beach', coordinates: [baseCoords[0] + 0.05, baseCoords[1] + 0.03], category, address: '31872 Coast Hwy, Laguna Beach, CA' },
      { id: 'h2', name: 'Saddleback Memorial Medical Center', coordinates: [baseCoords[0] - 0.03, baseCoords[1] + 0.05], category, address: '24451 Health Center Dr, Laguna Hills, CA' }
    ],
    lodging: [
      { id: 'l1', name: 'The Ritz-Carlton Laguna Niguel', coordinates: [baseCoords[0] + 0.001, baseCoords[1] + 0.001], category, address: '1 Ritz Carlton Dr, Dana Point, CA' },
      { id: 'l2', name: 'DoubleTree by Hilton Dana Point', coordinates: [baseCoords[0] - 0.002, baseCoords[1] + 0.003], category, address: '34402 Green Lantern St, Dana Point, CA' }
    ],
    tourist_attraction: [
      { id: 't1', name: 'Dana Point Harbor', coordinates: [baseCoords[0] - 0.005, baseCoords[1] - 0.003], category, address: '24500 Dana Point Harbor Dr, Dana Point, CA' },
      { id: 't2', name: 'Salt Creek Beach', coordinates: [baseCoords[0] + 0.01, baseCoords[1] + 0.005], category, address: '33333 S Pacific Coast Hwy, Dana Point, CA' }
    ],
    bank: [
      { id: 'bk1', name: 'Bank of America', coordinates: [baseCoords[0] + 0.001, baseCoords[1] - 0.001], category, address: '24560 Del Prado, Dana Point, CA' },
      { id: 'bk2', name: 'Wells Fargo', coordinates: [baseCoords[0] - 0.003, baseCoords[1] + 0.002], category, address: '34143 Pacific Coast Hwy, Dana Point, CA' }
    ],
    golf_course: [
      { id: 'gc1', name: 'The Ritz-Carlton Golf Club', coordinates: [baseCoords[0] + 0.02, baseCoords[1] + 0.01], category, address: '1 Ritz Carlton Dr, Dana Point, CA' },
      { id: 'gc2', name: 'Laguna Cliffs Marriott Golf Course', coordinates: [baseCoords[0] - 0.01, baseCoords[1] + 0.015], category, address: '25135 Park Lantern, Dana Point, CA' }
    ],
    park: [
      { id: 'p1', name: 'Heritage Park', coordinates: [baseCoords[0] + 0.004, baseCoords[1] - 0.002], category, address: '24501 Dana Point Harbor Dr, Dana Point, CA' },
      { id: 'p2', name: 'Lantern Bay Park', coordinates: [baseCoords[0] - 0.006, baseCoords[1] - 0.004], category, address: '25111 Park Lantern, Dana Point, CA' }
    ],
    gym: [
      { id: 'gy1', name: '24 Hour Fitness', coordinates: [baseCoords[0] + 0.003, baseCoords[1] + 0.003], category, address: '26701 Aliso Creek Rd, Aliso Viejo, CA' },
      { id: 'gy2', name: 'LA Fitness', coordinates: [baseCoords[0] - 0.004, baseCoords[1] + 0.001], category, address: '24001 Via Fabricante, Mission Viejo, CA' }
    ],
    school: [
      { id: 's1', name: 'Dana Hills High School', coordinates: [baseCoords[0] + 0.008, baseCoords[1] + 0.006], category, address: '33333 Golden Lantern, Dana Point, CA' },
      { id: 's2', name: 'Capistrano Valley High School', coordinates: [baseCoords[0] - 0.02, baseCoords[1] + 0.01], category, address: '26301 Via Escolar, Mission Viejo, CA' }
    ],
    university: [
      { id: 'u1', name: 'Saddleback College', coordinates: [baseCoords[0] - 0.05, baseCoords[1] + 0.03], category, address: '28000 Marguerite Pkwy, Mission Viejo, CA' },
      { id: 'u2', name: 'UC Irvine', coordinates: [baseCoords[0] - 0.1, baseCoords[1] + 0.08], category, address: 'Irvine, CA 92697' }
    ],
    library: [
      { id: 'li1', name: 'Dana Point Library', coordinates: [baseCoords[0] + 0.005, baseCoords[1] - 0.003], category, address: '33841 Niguel Rd, Dana Point, CA' },
      { id: 'li2', name: 'Mission Viejo Library', coordinates: [baseCoords[0] - 0.03, baseCoords[1] + 0.02], category, address: '100 Civic Center, Mission Viejo, CA' }
    ]
  };

  return mockData[category] || [];
};

export const searchPOIs = async (
  map: mapboxgl.Map,
  category: string,
  center: [number, number],
  radius: number = 5000
): Promise<POIResult[]> => {
  console.log(`Searching for category: ${category} near Dana Point`);
  
  // Use mock data for reliable results
  const results = getMockPOIs(category, center);
  console.log(`Found ${results.length} POIs for ${category}:`, results);
  
  return results;
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
