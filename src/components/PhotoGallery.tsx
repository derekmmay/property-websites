import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PropertyData } from "@/services/propertyApiService";
import { usePropertyConfig } from "@/hooks/usePropertyConfig";

interface PhotoGalleryProps {
  showLimited?: boolean;
  skipHero?: boolean;
  property?: PropertyData;
}

const PhotoGallery = ({ showLimited = false, skipHero = false, property }: PhotoGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const config = usePropertyConfig();

  // Use property images if available from API, otherwise use config
  const propertyImages = property?.images ? 
    (Array.isArray(property.images) ? property.images : [property.images]) : 
    [];
  
  const photos = propertyImages.length > 0 ? 
    propertyImages.map((img: any, index: number) => ({
      url: typeof img === 'string' ? img : img.url,
      title: typeof img === 'string' ? `Property Image ${index + 1}` : img.title || `Property Image ${index + 1}`,
      category: typeof img === 'string' ? 'Interior' : img.category || 'Interior'
    })) : 
    config.galleryImages.map((img) => ({
      url: img.url,
      title: img.title,
      category: img.category
    }));

  // Use final photos array or fallback to config images
  const finalPhotos = photos.length > 0 ? photos : config.galleryImages;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          setTimeout(() => setIsVisible(true), 800); // Delay the grid animation
        }
      },
      { threshold: 0.1 }
    );

    const galleryElement = document.getElementById('photo-gallery');
    if (galleryElement) {
      observer.observe(galleryElement);
    }

    return () => observer.disconnect();
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % finalPhotos.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + finalPhotos.length) % finalPhotos.length);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const getEntranceDirection = (index: number) => {
    const directions = [
      'translate-x-[-200px] translate-y-[-100px] rotate-[-15deg]',
      'translate-x-[200px] translate-y-[-150px] rotate-[20deg]',
      'translate-x-[-150px] translate-y-[100px] rotate-[12deg]',
      'translate-x-[180px] translate-y-[120px] rotate-[-18deg]',
      'translate-y-[-200px] rotate-[8deg]',
      'translate-x-[-250px] rotate-[-10deg]',
      'translate-x-[250px] rotate-[15deg]',
      'translate-y-[200px] rotate-[-12deg]',
    ];
    return directions[index % directions.length];
  };

  return (
    <section id="photo-gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image - Full Width - Only show if not skipped */}
        {!skipHero && (
          <div className="mb-16">
            <Card
              className={`relative overflow-hidden cursor-pointer group border-0 shadow-2xl h-[70vh] transition-all duration-1500 ${
                heroVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              onClick={() => openLightbox(0)}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 z-10"></div>
              <img
                src={finalPhotos[0].url}
                alt={finalPhotos[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-2xl font-light mb-2">{finalPhotos[0].title}</p>
                <p className="text-lg opacity-80">{finalPhotos[0].category}</p>
              </div>
            </Card>
          </div>
        )}

        {/* Scattered Grid Layout with Flutter Animations */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
          {finalPhotos.slice(1, showLimited ? 9 : finalPhotos.length).map((photo, index) => {
            const actualIndex = index + 1; // Adjust for sliced array
            const gridClasses = [
              "col-span-6 row-span-2", // Large
              "col-span-3 row-span-1", // Small
              "col-span-3 row-span-1", // Small
              "col-span-4 row-span-2", // Medium tall
              "col-span-4 row-span-1", // Medium
              "col-span-4 row-span-1", // Medium
              "col-span-3 row-span-2", // Small tall
              "col-span-6 row-span-1", // Wide
              "col-span-3 row-span-1", // Small
              "col-span-4 row-span-2", // Medium tall
              "col-span-5 row-span-1", // Medium wide
              "col-span-3 row-span-1", // Small
              "col-span-4 row-span-1", // Medium
              "col-span-8 row-span-1", // Extra wide
              "col-span-6 row-span-2", // Large
            ];

            const entranceTransform = getEntranceDirection(index);

            return (
              <Card
                key={actualIndex}
                className={`${gridClasses[index]} relative overflow-hidden cursor-pointer group border-0 shadow-lg hover:shadow-2xl transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0 translate-y-0 rotate-0' 
                    : `opacity-0 ${entranceTransform}`
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  transitionDelay: `${index * 150}ms`,
                  transitionDuration: '1200ms',
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
                onClick={() => openLightbox(actualIndex)}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 z-10"></div>
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:rotate-1"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-sm font-medium">{photo.title}</p>
                  <p className="text-xs opacity-80">{photo.category}</p>
                </div>
                
                {/* Enhanced floating animation effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full animate-pulse" 
                       style={{ animationDelay: `${index * 200}ms` }}></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full animate-pulse" 
                       style={{ animationDelay: `${index * 300}ms` }}></div>
                  <div className="absolute top-1/2 left-2 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" 
                       style={{ animationDelay: `${index * 400}ms` }}></div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All Button - Only show when limited */}
        {showLimited && (
          <div className="text-center mt-16">
            <Link to="/visuals">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105 shadow-xl"
              >
                View All Visuals
              </Button>
            </Link>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-in fade-in duration-300">
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/10 z-10 transition-all duration-300 hover:scale-110"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10 transition-all duration-300 hover:scale-110"
                onClick={prevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10 transition-all duration-300 hover:scale-110"
                onClick={nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              <div className="max-w-6xl max-h-full animate-in zoom-in-50 duration-500">
                <img
                  src={finalPhotos[currentIndex].url}
                  alt={finalPhotos[currentIndex].title}
                  className="max-w-full max-h-full object-contain transition-all duration-500"
                />
                <div className="text-center mt-4 text-white animate-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-2xl font-light mb-2">{finalPhotos[currentIndex].title}</h3>
                  <p className="text-gray-300">{finalPhotos[currentIndex].category}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {currentIndex + 1} of {finalPhotos.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
