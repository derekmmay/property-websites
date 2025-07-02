
import Navigation from "@/components/Navigation";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Visuals - 126 Monarch Bay Drive | Luxury Oceanfront Estate Gallery</title>
        <meta name="description" content="Explore stunning photography of 126 Monarch Bay Drive, showcasing the luxury oceanfront estate's architectural details, interior design, and oceanfront setting in Dana Point." />
        <meta name="keywords" content="126 Monarch Bay Drive, luxury estate photography, Dana Point oceanfront property, luxury home visuals, interior design, architectural photography" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://126monarchbay.com/visuals" />
        <meta property="og:title" content="Visuals - 126 Monarch Bay Drive | Luxury Estate Gallery" />
        <meta property="og:description" content="Experience the beauty of 126 Monarch Bay Drive through our comprehensive visual gallery showcasing this exceptional oceanfront estate." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://126monarchbay.com/visuals" />
        <meta property="twitter:title" content="Visuals - 126 Monarch Bay Drive | Luxury Estate Gallery" />
        <meta property="twitter:description" content="Experience the beauty of 126 Monarch Bay Drive through our comprehensive visual gallery." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Susan Chase, Compass Real Estate" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')`
            }}
          />
          
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-extralight mb-4 md:mb-8 tracking-[-0.02em] text-white leading-none">
                Visual Gallery
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 opacity-95 font-light tracking-wide">
                Experience 126 Monarch Bay
              </p>
              <p className="text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed font-light px-4">
                Discover every exquisite detail of this oceanfront masterpiece through our comprehensive visual collection.
              </p>
            </div>
          </div>
        </div>

        {/* Full Photo Gallery */}
        <PhotoGallery skipHero={true} />
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
