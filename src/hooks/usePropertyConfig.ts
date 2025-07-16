import { propertyConfig, PropertyConfig } from '@/config/property';
import { siteConfig, SiteConfig } from '@/config/site';
import { useSearchParams } from 'react-router-dom';

// Hook to access property configuration with URL parameter overrides
export const usePropertyConfig = (): PropertyConfig => {
  const [searchParams] = useSearchParams();
  
  // If URL parameters exist, create property object from them
  const propertyId = searchParams.get('propertyId');
  const address = searchParams.get('address');
  const price = searchParams.get('price');
  const beds = searchParams.get('beds');
  const baths = searchParams.get('baths');
  const area = searchParams.get('area');
  const city = searchParams.get('city');
  const state = searchParams.get('state');
  const agent = searchParams.get('agent');
  const email = searchParams.get('email');
  const phone = searchParams.get('phone');
  
  // If we have URL parameters, override the property config
  if (address || propertyId) {
    const overriddenConfig: PropertyConfig = {
      ...propertyConfig,
      address: address || propertyConfig.address,
      city: city || propertyConfig.city,
      state: state || propertyConfig.state,
      price: price || propertyConfig.price,
      bedrooms: beds ? parseInt(beds) : propertyConfig.bedrooms,
      bathrooms: baths ? parseFloat(baths) : propertyConfig.bathrooms,
      squareFootage: area || propertyConfig.squareFootage,
      headline: address || propertyConfig.headline,
      subheadline: `Luxury real estate in ${city || propertyConfig.city}, ${state || propertyConfig.state}`,
      agent: {
        ...propertyConfig.agent,
        name: agent || propertyConfig.agent.name,
        email: email || propertyConfig.agent.email,
        phone: phone || propertyConfig.agent.phone,
      }
    };
    
    return overriddenConfig;
  }
  
  return propertyConfig;
};

// Hook to access site configuration
export const useSiteConfig = (): SiteConfig => {
  return siteConfig;
};

// Hook to get formatted property data
export const useFormattedProperty = () => {
  const property = usePropertyConfig();
  
  return {
    ...property,
    fullAddress: `${property.address}, ${property.city}, ${property.state} ${property.zipCode}`,
    priceFormatted: property.price,
    bedroomsFormatted: `${property.bedrooms} ${property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}`,
    bathroomsFormatted: `${property.bathrooms} ${property.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}`,
    squareFootageFormatted: `${property.squareFootage} sq ft`,
    locationFormatted: `${property.city}, ${property.state}`,
  };
};