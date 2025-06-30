
import Hero from "@/components/Hero";
import PropertyDescription from "@/components/PropertyDescription";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

const Overview = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PropertyDescription />
      <PhotoGallery />
      <Footer />
    </div>
  );
};

export default Overview;
