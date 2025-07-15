import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const MetaTags = ({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website' 
}: MetaTagsProps) => {
  const metaTitle = title || siteConfig.title;
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;
  const metaUrl = url || siteConfig.url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={siteConfig.keywords.join(', ')} />
      <meta name="author" content={siteConfig.author} />
      <meta name="robots" content={siteConfig.robots} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={siteConfig.twitterCard} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      {siteConfig.twitterSite && (
        <meta name="twitter:site" content={siteConfig.twitterSite} />
      )}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={metaUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(siteConfig.schema)}
      </script>
    </Helmet>
  );
};

export default MetaTags;