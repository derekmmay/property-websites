// Property Configuration - Customize this file for each property
export interface PropertyConfig {
  // Basic Property Information
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  
  // Property Details
  price: string;
  bedrooms: number;
  bathrooms: number;
  squareFootage: string;
  lotSize?: string;
  yearBuilt?: string;
  propertyType: string;
  
  // Marketing Information
  headline: string;
  subheadline: string;
  description: string;
  keyFeatures: string[];
  
  // Media
  heroImage: string;
  galleryImages: Array<{
    url: string;
    title: string;
    category: 'Interior' | 'Exterior' | 'Amenities';
  }>;
  
  // Agent Information
  agent: {
    name: string;
    email: string;
    phone: string;
    brokerName?: string;
  };
  
  // Location Features
  location: {
    neighborhood: string;
    keyAttraction: string;
    nearbyAmenities: string[];
    travelTimes: Array<{
      destination: string;
      time: string;
      mode: 'driving' | 'walking' | 'transit';
    }>;
  };
  
  // Distinctive Features (for Hero section)
  distinctiveFeatures: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

// Default property configuration - customize for each property
export const propertyConfig: PropertyConfig = {
  address: "126 Monarch Bay Drive",
  city: "Dana Point",
  state: "CA",
  zipCode: "92629",
  country: "USA",
  
  price: "$13,500,000",
  bedrooms: 5,
  bathrooms: 5,
  squareFootage: "5,452",
  lotSize: "0.5 acres",
  yearBuilt: "2018",
  propertyType: "Single Family Residence",
  
  headline: "126 Monarch Bay",
  subheadline: "A rare architectural masterpiece commanding panoramic Pacific Ocean views within the most exclusive guard-gated enclave of Southern California's coastline.",
  description: "This estate defines a new era of California coastal luxury, where timeless Mediterranean inspiration meets contemporary refinement. Seamlessly integrating architecture with nature, the design embraces Japanese-influenced Wabi Sabi philosophy—celebrating organic textures, raw materials, and the beauty of imperfection.",
  keyFeatures: [
    "Panoramic Pacific Ocean views",
    "Guard-gated community",
    "Infinity pool and spa",
    "Wine cellar",
    "Home theater",
    "Chef's kitchen",
    "Private beach access",
    "Three-car garage"
  ],
  
  heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
  
  galleryImages: [
    {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      title: "Grand Oceanfront Facade",
      category: "Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
      title: "Living Room with Ocean Views",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      title: "Gourmet Kitchen",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      title: "Master Suite Sanctuary",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2153&q=80",
      title: "Private Terrace",
      category: "Exterior"
    }
  ],
  
  agent: {
    name: "Sarah Johnson",
    email: "sarah@luxuryrealty.com",
    phone: "(949) 555-0123",
    brokerName: "Luxury Realty Group"
  },
  
  location: {
    neighborhood: "Monarch Bay",
    keyAttraction: "Pacific Ocean",
    nearbyAmenities: [
      "Ritz-Carlton Resort",
      "Monarch Beach Golf Links",
      "Dana Point Harbor",
      "Salt Creek Beach",
      "Laguna Beach Art District"
    ],
    travelTimes: [
      { destination: "John Wayne Airport", time: "25 min", mode: "driving" },
      { destination: "Newport Beach", time: "15 min", mode: "driving" },
      { destination: "Laguna Beach", time: "10 min", mode: "driving" },
      { destination: "Los Angeles", time: "1 hr 30 min", mode: "driving" }
    ]
  },
  
  distinctiveFeatures: [
    {
      icon: "Shield",
      title: "Guard-Gated Security",
      description: "24/7 private security within the exclusive Monarch Bay enclave"
    },
    {
      icon: "Waves",
      title: "Ocean Views",
      description: "Panoramic Pacific Ocean and Catalina Island vistas from every room"
    },
    {
      icon: "MapPin",
      title: "Prime Location",
      description: "Minutes from luxury amenities, golf, and private beach access"
    },
    {
      icon: "Gem",
      title: "Luxury Amenities",
      description: "Wine cellar, putting green, spa, and entertainment spaces"
    }
  ]
};