
export interface PropertyData {
  id: string;
  coordinates: [number, number];
  price: number;
  type: 'sale' | 'sold' | 'listing';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  address: string;
}

export interface POIData {
  id: string;
  coordinates: [number, number];
  name: string;
  category: string;
  rating?: number;
  description?: string;
}

export interface SchoolData {
  id: string;
  coordinates: [number, number];
  name: string;
  type: 'elementary' | 'middle' | 'high' | 'private';
  rating: number;
  district: string;
}

// Mock real estate data around Dana Point
export const propertyData: PropertyData[] = [
  {
    id: '1',
    coordinates: [-117.7025, 33.4740],
    price: 3200000,
    type: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    address: '123 Ocean View Dr'
  },
  {
    id: '2',
    coordinates: [-117.7015, 33.4735],
    price: 2800000,
    type: 'sold',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2400,
    address: '456 Coastal Blvd'
  },
  {
    id: '3',
    coordinates: [-117.7030, 33.4745],
    price: 4500000,
    type: 'listing',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3500,
    address: '789 Bluff Rd'
  },
  {
    id: '4',
    coordinates: [-117.7020, 33.4730],
    price: 2200000,
    type: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2000,
    address: '321 Harbor View'
  },
  {
    id: '5',
    coordinates: [-117.7040, 33.4750],
    price: 5200000,
    type: 'listing',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 4200,
    address: '654 Monarch Bay Dr'
  }
];

// Mock luxury amenities data
export const luxuryPOIs: POIData[] = [
  {
    id: 'hotel1',
    coordinates: [-117.7010, 33.4720],
    name: 'Ritz Carlton Laguna Niguel',
    category: 'luxury-hotels',
    rating: 5,
    description: '5-star oceanfront resort'
  },
  {
    id: 'restaurant1',
    coordinates: [-117.7005, 33.4725],
    name: 'Studio at Montage',
    category: 'fine-dining',
    rating: 5,
    description: 'Michelin-starred dining'
  },
  {
    id: 'spa1',
    coordinates: [-117.7012, 33.4718],
    name: 'Spa Montage',
    category: 'luxury-spas',
    rating: 5,
    description: 'World-class wellness retreat'
  },
  {
    id: 'golf1',
    coordinates: [-117.7050, 33.4760],
    name: 'Monarch Beach Golf Links',
    category: 'golf-courses',
    rating: 4,
    description: 'Championship oceanfront course'
  },
  {
    id: 'marina1',
    coordinates: [-117.7000, 33.4710],
    name: 'Dana Point Harbor',
    category: 'marinas',
    rating: 4,
    description: 'Premier yacht harbor'
  }
];

// Mock school data
export const schoolData: SchoolData[] = [
  {
    id: 'school1',
    coordinates: [-117.7035, 33.4755],
    name: 'Dana Hills High School',
    type: 'high',
    rating: 9,
    district: 'Capistrano Unified'
  },
  {
    id: 'school2',
    coordinates: [-117.7045, 33.4765],
    name: 'Monarch Bay Elementary',
    type: 'elementary',
    rating: 10,
    district: 'Capistrano Unified'
  },
  {
    id: 'school3',
    coordinates: [-117.7055, 33.4775],
    name: 'St. Margaret\'s Episcopal',
    type: 'private',
    rating: 9,
    district: 'Private'
  }
];

// Travel time isochrone data (mock GeoJSON)
export const travelTimeIsochrones = {
  "15min": {
    type: "Feature",
    properties: { time: 15, color: "#ff6b6b" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-117.720, 33.460],
        [-117.720, 33.490],
        [-117.680, 33.490],
        [-117.680, 33.460],
        [-117.720, 33.460]
      ]]
    }
  },
  "30min": {
    type: "Feature", 
    properties: { time: 30, color: "#4ecdc4" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-117.740, 33.440],
        [-117.740, 33.510],
        [-117.660, 33.510],
        [-117.660, 33.440],
        [-117.740, 33.440]
      ]]
    }
  }
};

export const getPropertyValueColor = (price: number): string => {
  if (price >= 4000000) return '#8b0000'; // Dark red for $4M+
  if (price >= 3000000) return '#ff4444'; // Red for $3-4M
  if (price >= 2000000) return '#ff8844'; // Orange for $2-3M
  if (price >= 1000000) return '#ffcc44'; // Yellow for $1-2M
  return '#44ff44'; // Green for <$1M
};

export const getLuxuryHeatmapData = () => {
  return luxuryPOIs.map(poi => ({
    coordinates: poi.coordinates,
    weight: poi.rating || 3
  }));
};
