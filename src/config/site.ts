import { propertyConfig } from './property';

// Site Configuration - SEO and Meta Data
export interface SiteConfig {
  // Basic Site Information
  name: string;
  title: string;
  description: string;
  url: string;
  
  // SEO Configuration
  keywords: string[];
  author: string;
  robots: string;
  
  // Open Graph / Social Media
  ogImage: string;
  ogType: string;
  twitterCard: string;
  twitterSite?: string;
  
  // Schema.org structured data
  schema: {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    address: {
      "@type": string;
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    offers: {
      "@type": string;
      price: string;
      priceCurrency: string;
    };
    numberOfRooms: number;
    numberOfBathroomsTotal: number;
    floorSize: {
      "@type": string;
      value: string;
      unitCode: string;
    };
  };
  
  // Navigation
  navigation: Array<{
    name: string;
    path: string;
    description: string;
  }>;
  
  // Contact Information
  contact: {
    phone: string;
    email: string;
    address: string;
    hours?: string;
  };
}

// Generate site configuration from property configuration
export const siteConfig: SiteConfig = {
  name: `${propertyConfig.address} | Luxury Real Estate`,
  title: `${propertyConfig.address} - ${propertyConfig.price} | ${propertyConfig.city}, ${propertyConfig.state}`,
  description: `${propertyConfig.subheadline} Luxury ${propertyConfig.propertyType} for sale in ${propertyConfig.city}, ${propertyConfig.state}. ${propertyConfig.bedrooms} bedrooms, ${propertyConfig.bathrooms} bathrooms, ${propertyConfig.squareFootage} sq ft.`,
  url: "https://your-domain.com", // Update this for each property
  
  keywords: [
    "luxury real estate",
    "oceanfront property",
    propertyConfig.city,
    propertyConfig.state,
    propertyConfig.location.neighborhood,
    "luxury home",
    "estate",
    "waterfront",
    "premium property",
    `${propertyConfig.bedrooms} bedroom`,
    `${propertyConfig.bathrooms} bathroom`,
    propertyConfig.propertyType.toLowerCase()
  ],
  
  author: propertyConfig.agent.name,
  robots: "index, follow",
  
  ogImage: propertyConfig.heroImage,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterSite: "@your_twitter_handle", // Update as needed
  
  schema: {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    name: propertyConfig.address,
    description: propertyConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: propertyConfig.address,
      addressLocality: propertyConfig.city,
      addressRegion: propertyConfig.state,
      postalCode: propertyConfig.zipCode,
      addressCountry: propertyConfig.country
    },
    offers: {
      "@type": "Offer",
      price: propertyConfig.price.replace(/[^0-9]/g, ''),
      priceCurrency: "USD"
    },
    numberOfRooms: propertyConfig.bedrooms,
    numberOfBathroomsTotal: propertyConfig.bathrooms,
    floorSize: {
      "@type": "QuantitativeValue",
      value: propertyConfig.squareFootage.replace(/[^0-9]/g, ''),
      unitCode: "FTK"
    }
  },
  
  navigation: [
    {
      name: "Overview",
      path: "/",
      description: "Property overview and main features"
    },
    {
      name: "Visuals",
      path: "/visuals",
      description: "Photo gallery and virtual tour"
    },
    {
      name: "Lifestyle",
      path: "/locale",
      description: "Local lifestyle and amenities"
    },
    {
      name: "Proximity",
      path: "/proximity",
      description: "Location and nearby attractions"
    },
    {
      name: "Education",
      path: "/education",
      description: "Schools and educational facilities"
    },
    {
      name: "Insights",
      path: "/insights",
      description: "Market data and analytics"
    }
  ],
  
  contact: {
    phone: propertyConfig.agent.phone,
    email: propertyConfig.agent.email,
    address: `${propertyConfig.address}, ${propertyConfig.city}, ${propertyConfig.state} ${propertyConfig.zipCode}`,
    hours: "By appointment only"
  }
};