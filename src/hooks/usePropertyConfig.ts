import { propertyConfig, PropertyConfig } from '@/config/property';
import { siteConfig, SiteConfig } from '@/config/site';

// Hook to access property configuration
export const usePropertyConfig = (): PropertyConfig => {
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