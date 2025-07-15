import PageLayout from '@/components/common/PageLayout';
import Hero from '@/components/Hero';
import PropertyDescription from '@/components/PropertyDescription';
import PhotoGallery from '@/components/PhotoGallery';
import { usePropertyConfig } from '@/hooks/usePropertyConfig';

const Index = () => {
  const config = usePropertyConfig();
  
  return (
    <PageLayout 
      title={`${config.address} - ${config.price} | Luxury Real Estate`}
      description={config.subheadline}
      showNavigation={true}
      showFooter={true}
    >
      <Hero />
      <PropertyDescription />
      <PhotoGallery showLimited={true} />
    </PageLayout>
  );
};

export default Index;
