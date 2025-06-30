import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      title: "Grand Oceanfront Facade",
      category: "Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
      title: "Living Room with Ocean Views",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      title: "Gourmet Kitchen",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      title: "Master Suite Sanctuary",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2153&q=80",
      title: "Private Terrace",
      category: "Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Dining Room",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Wine Cellar",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Infinity Pool",
      category: "Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2158&q=80",
      title: "Home Theater",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Master Bathroom",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      title: "Library Study",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      title: "Guest Suite",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
      title: "Private Gym",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Garden Courtyard",
      category: "Exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Executive Office",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
      title: "Spa Bathroom",
      category: "Interior"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Define different entrance directions for variety
  const getEntranceDirection = (index: number) => {
    const directions = [
      'translate-x-[-200px] translate-y-[-100px] rotate-[-15deg]', // From top-left
      'translate-x-[200px] translate-y-[-150px] rotate-[20deg]',   // From top-right
      'translate-x-[-150px] translate-y-[100px] rotate-[12deg]',   // From bottom-left
      'translate-x-[180px] translate-y-[120px] rotate-[-18deg]',   // From bottom-right
      'translate-y-[-200px] rotate-[8deg]',                        // From top
      'translate-x-[-250px] rotate-[-10deg]',                      // From left
      'translate-x-[250px] rotate-[15deg]',                        // From right
      'translate-y-[200px] rotate-[-12deg]',                       // From bottom
    ];
    return directions[index % directions.length];
  };

  return (
    <section id="photo-gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-black mb-6 tracking-wide">Private Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the architectural mastery and refined elegance of this extraordinary oceanfront estate
          </p>
        </div>

        {/* Scattered Grid Layout with Flutter Animations */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
          {photos.slice(0, 16).map((photo, index) => {
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
              "col-span-6 row-span-1", // Wide
            ];

            const entranceTransform = getEntranceDirection(index);

            return (
              <Card
                key={index}
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
                onClick={() => openLightbox(index)}
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
                  src={photos[currentIndex].url}
                  alt={photos[currentIndex].title}
                  className="max-w-full max-h-full object-contain transition-all duration-500"
                />
                <div className="text-center mt-4 text-white animate-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-2xl font-light mb-2">{photos[currentIndex].title}</h3>
                  <p className="text-gray-300">{photos[currentIndex].category}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {currentIndex + 1} of {photos.length}
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
