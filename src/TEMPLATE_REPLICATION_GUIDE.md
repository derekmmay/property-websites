# Property Website Template - Replication Guide

## Overview

This project is now structured as a reusable template for luxury property websites. Each property gets its own deployment with customized configuration while maintaining the same beautiful design and functionality.

## Template Structure

```
src/
├── config/
│   ├── property.ts         # Property-specific configuration
│   └── site.ts            # SEO and site configuration
├── components/
│   ├── common/
│   │   └── PageLayout.tsx  # Reusable page layout with SEO
│   ├── SEO/
│   │   └── MetaTags.tsx    # SEO meta tags component
│   └── [other components]  # All components use config system
├── hooks/
│   └── usePropertyConfig.ts # Configuration hooks
└── pages/
    └── [all pages]         # Updated to use template system
```

## Quick Start for New Property

### 1. Update Property Configuration

Edit `src/config/property.ts`:

```typescript
export const propertyConfig: PropertyConfig = {
  address: "123 Ocean Drive",
  city: "Malibu",
  state: "CA",
  zipCode: "90265",
  country: "USA",
  
  price: "$25,000,000",
  bedrooms: 6,
  bathrooms: 7,
  squareFootage: "8,500",
  
  headline: "123 Ocean Drive",
  subheadline: "Your custom property description...",
  description: "Detailed property description...",
  
  // Add your property images
  heroImage: "https://your-hero-image.jpg",
  galleryImages: [
    {
      url: "https://image1.jpg",
      title: "Living Room",
      category: "Interior"
    },
    // ... more images
  ],
  
  // Configure agent details
  agent: {
    name: "Agent Name",
    email: "agent@realty.com",
    phone: "(555) 123-4567"
  },
  
  // Set location details
  location: {
    neighborhood: "Malibu Colony",
    keyAttraction: "Pacific Ocean",
    nearbyAmenities: ["Nobu", "Soho House", "Point Dume"]
  }
};
```

### 2. Update Site Configuration

Edit `src/config/site.ts`:

```typescript
// The site config auto-generates from property config
// Only update these if needed:
export const siteConfig: SiteConfig = {
  url: "https://your-property-domain.com", // Update this
  twitterSite: "@your_twitter", // Update social handles
  // ... other customizations
};
```

### 3. Deploy & Configure

1. **Deploy to Lovable**: Use the standard Lovable deployment
2. **Custom Domain**: Connect your property-specific domain
3. **Analytics**: Add Google Analytics/tracking codes
4. **Update URLs**: Ensure all URLs point to your domain

## Template Features

### ✅ SEO Optimized
- Automatic meta tags generation
- Schema.org structured data
- Open Graph social sharing
- Sitemap-friendly URLs

### ✅ Responsive Design
- Mobile-first approach
- Touch-friendly interactions
- Optimized for all devices

### ✅ Performance Optimized
- Image optimization
- Lazy loading
- Efficient animations
- Fast loading times

### ✅ Configurable Components
- Property details
- Photo galleries
- Agent information
- Location features
- Navigation structure

## Customization Options

### Images
- **Hero Image**: Main property facade
- **Gallery Images**: Interior/exterior shots
- **Categories**: Interior, Exterior, Amenities

### Content
- **Headlines**: Property name and tagline
- **Descriptions**: Detailed property copy
- **Features**: Key selling points
- **Location**: Neighborhood and attractions

### Branding
- **Agent Details**: Contact information
- **Navigation**: Custom page names
- **Colors**: Via Tailwind config (if needed)

## Best Practices

### 1. Image Guidelines
- **Hero Image**: 2000x1200px minimum
- **Gallery Images**: 1500x1000px minimum
- **Format**: WebP preferred, JPEG acceptable
- **Optimization**: Compress for web

### 2. Content Guidelines
- **Headlines**: Keep concise and impactful
- **Descriptions**: Focus on unique selling points
- **Features**: Highlight luxury amenities
- **Location**: Emphasize exclusivity

### 3. SEO Guidelines
- **Title**: Include price and location
- **Description**: Under 160 characters
- **Keywords**: Focus on location + luxury terms
- **Images**: Add descriptive alt text

## Technical Implementation

### Configuration System
All components use the configuration system:

```typescript
// Components automatically use config
const config = usePropertyConfig();
const siteConfig = useSiteConfig();
```

### SEO Integration
Pages use PageLayout for consistent SEO:

```typescript
<PageLayout 
  title="Custom page title"
  description="Page description"
  showNavigation={true}
  showFooter={true}
>
  {/* Page content */}
</PageLayout>
```

### Dynamic Data
Components support both static config and dynamic API data:

```typescript
// Falls back to config if no API data
{property?.address || config.address}
```

## Maintenance

### Regular Updates
- Update property images seasonally
- Refresh marketing copy
- Update agent information
- Monitor SEO performance

### Content Management
- Images stored in `/public/` or CDN
- Content in configuration files
- Easy to update without code changes

## Deployment Checklist

- [ ] Update property configuration
- [ ] Add property images
- [ ] Configure agent details
- [ ] Set custom domain
- [ ] Test all pages
- [ ] Verify SEO meta tags
- [ ] Test mobile responsiveness
- [ ] Configure analytics
- [ ] Submit to search engines

## Support

This template is designed for easy replication. For questions or customizations:

1. Check configuration files first
2. Review component documentation
3. Test locally before deployment
4. Use browser dev tools for debugging

---

**Template Version**: 1.0  
**Last Updated**: January 2025  
**Compatible with**: Lovable, React, TypeScript, Tailwind CSS
