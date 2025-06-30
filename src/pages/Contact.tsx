
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Phone, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - 126 Monarch Bay Drive | Luxury Oceanfront Estate Dana Point</title>
        <meta name="description" content="Contact our luxury real estate specialists for detailed information about 126 Monarch Bay Drive, an exceptional oceanfront estate in Dana Point's exclusive guard-gated community." />
        <meta name="keywords" content="126 Monarch Bay Drive, Dana Point luxury real estate, oceanfront estate contact, Monarch Bay community, luxury property inquiry, Susan Chase realtor" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://126monarchbay.com/contact" />
        <meta property="og:title" content="Contact Us - 126 Monarch Bay Drive | Luxury Oceanfront Estate" />
        <meta property="og:description" content="Connect with our luxury property specialists for personalized assistance with 126 Monarch Bay Drive, Dana Point's premier oceanfront estate." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://126monarchbay.com/contact" />
        <meta property="twitter:title" content="Contact Us - 126 Monarch Bay Drive | Luxury Oceanfront Estate" />
        <meta property="twitter:description" content="Connect with our luxury property specialists for personalized assistance with 126 Monarch Bay Drive, Dana Point's premier oceanfront estate." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Susan Chase, Compass Real Estate" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Dana Point, California" />
        <meta name="geo.position" content="33.4734;-117.7242" />
        <meta name="ICBM" content="33.4734, -117.7242" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Susan Chase",
            "telephone": "(949) 949-9499",
            "email": "susan@compass.com",
            "url": "https://126monarchbay.com/contact",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dana Point",
              "addressRegion": "CA",
              "postalCode": "92660",
              "addressCountry": "US"
            },
            "worksFor": {
              "@type": "RealEstateAgency",
              "name": "Compass Real Estate"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Dana Point, California"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')`
            }}
          />
          
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-extralight mb-4 md:mb-8 tracking-[-0.02em] text-white leading-none">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 opacity-95 font-light tracking-wide">
                Inquire About 126 Monarch Bay
              </p>
              <p className="text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed font-light px-4">
                Connect with our luxury property specialists for detailed information and personalized assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-24">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-light text-black mb-4 md:mb-6 tracking-wide">Get in Touch</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto px-4">
              For inquiries, additional information, or to discuss this exceptional oceanfront estate, 
              our dedicated team is ready to assist you with every detail.
            </p>
          </div>

          {/* Contact Methods - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Phone Contact */}
            <Card className="border-0 shadow-xl bg-black text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 text-black" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-white mb-3 md:mb-4">Direct Line</h3>
                <p className="text-white/80 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  Immediate assistance for qualified buyers
                </p>
                <p className="text-xl md:text-2xl font-medium text-white mb-4 md:mb-6">(949) 949-9499</p>
                <Button className="bg-white hover:bg-gray-100 text-black px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-light tracking-wide w-full md:w-auto">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="border-0 shadow-xl bg-gray-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-black mb-3 md:mb-4">Email Inquiry</h3>
                <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  Detailed property information and documentation
                </p>
                <p className="text-xl md:text-2xl font-medium text-black mb-4 md:mb-6">susan@compass.com</p>
                <Button className="bg-black hover:bg-gray-800 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-light tracking-wide w-full md:w-auto">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information Section */}
          <div className="mt-12 md:mt-20 text-center">
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-light text-black mb-4 md:mb-6">126 Monarch Bay Drive</h3>
              <p className="text-lg md:text-xl text-gray-600 mb-3 md:mb-4">Dana Point, CA 92660</p>
              <p className="text-base md:text-lg text-gray-500 mb-6 md:mb-8">Guard-Gated Monarch Bay Community</p>
              <div className="border-t border-gray-200 pt-6 md:pt-8">
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-2xl mx-auto px-4">
                  This property is offered exclusively through authorized representatives. 
                  All inquiries require pre-qualification and are handled with complete confidentiality. 
                  Property details and pricing subject to verification and change without notice. 
                  DRE License #123456789.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
