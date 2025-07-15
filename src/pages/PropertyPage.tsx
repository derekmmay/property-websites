import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPropertyByAddress, PropertyData } from "@/services/propertyApiService";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PropertyDescription from "@/components/PropertyDescription";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

const PropertyPage = () => {
  const { propertyAddress } = useParams<{ propertyAddress: string }>();

  const { data: property, isLoading, error } = useQuery<PropertyData | null>({
    queryKey: ['property', propertyAddress],
    queryFn: () => propertyAddress ? fetchPropertyByAddress(propertyAddress) : null,
    enabled: !!propertyAddress,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-lg text-muted-foreground">Loading property...</p>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero property={property} />
      <PropertyDescription property={property} />
      <PhotoGallery property={property} showLimited={true} />
      <Footer />
    </div>
  );
};

export default PropertyPage;