
const PropertyDescription = () => {
  return (
    <div className="space-y-20">
      {/* Main Header with Enhanced Typography */}
      <div className="text-center space-y-8">
        <div className="inline-block px-8 py-3 bg-black/5 border border-black/10 rounded-full">
          <span className="text-sm tracking-[0.3em] uppercase text-gray-600 font-medium">
            Architectural Masterpiece
          </span>
        </div>
        <h2 className="text-6xl md:text-7xl font-extralight text-black tracking-[-0.02em] leading-none">
          Coastal
          <span className="block text-gray-400 italic">Excellence</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
          126 Monarch Bay Drive represents the absolute pinnacle of California coastal luxury—a 
          singular architectural achievement within Dana Point's most coveted sanctuary.
        </p>
      </div>

      {/* Hero Image Grid */}
      <div className="relative">
        <div className="grid grid-cols-12 gap-6 h-[600px]">
          {/* Large Main Image */}
          <div className="col-span-12 md:col-span-8 relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
              alt="Grand living room with panoramic ocean views"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h3 className="text-2xl font-light mb-2">Ocean View Living</h3>
                <p className="text-white/90 font-light text-sm">Panoramic Pacific vistas from every room</p>
              </div>
            </div>
          </div>
          
          {/* Side Images */}
          <div className="col-span-12 md:col-span-4 space-y-6">
            <div className="relative h-[285px] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                alt="Bespoke gourmet kitchen with premium appliances"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-light">Gourmet Kitchen</h4>
                <p className="text-white/80 text-xs">Premium appliances</p>
              </div>
            </div>
            
            <div className="relative h-[285px] overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2153&q=80"
                alt="Private oceanfront terrace with infinity views"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-light">Ocean Terraces</h4>
                <p className="text-white/80 text-xs">Resort-style outdoor living</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="w-20 h-px bg-gradient-to-r from-black to-transparent"></div>
            <h3 className="text-4xl font-light text-black leading-tight">
              A Legacy of
              <span className="block text-gray-500">Architectural Vision</span>
            </h3>
          </div>
          
          <div className="prose prose-lg text-gray-700 leading-relaxed font-light max-w-none space-y-6">
            <p>
              This custom estate, masterfully conceived in 1979 and reimagined through extensive 
              renovations in 2003, offers <strong className="font-medium">5,452 square feet</strong> of uncompromising 
              sophistication across three meticulously designed levels.
            </p>
            <p>
              The residence showcases an extraordinary <strong className="font-medium">1,500-square-foot addition</strong> 
              housing the grand primary suite—a private sanctuary that seamlessly marries timeless 
              coastal elegance with contemporary luxury.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="text-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="text-3xl font-extralight text-black mb-2">1,200</div>
              <p className="text-sm text-gray-600 uppercase tracking-wide">Bottle Wine Cellar</p>
            </div>
            <div className="text-center p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="text-3xl font-extralight text-black mb-2">3</div>
              <p className="text-sm text-gray-600 uppercase tracking-wide">Designed Levels</p>
            </div>
          </div>
        </div>

        {/* Stats and Features */}
        <div className="space-y-8">
          <div className="bg-black text-white p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <h4 className="text-3xl font-light mb-8">Premium Amenities</h4>
              <div className="space-y-4">
                {[
                  "Sub-Zero & Thermador Culinary Suite",
                  "Temperature-Controlled Wine Sanctuary", 
                  "Expansive Entertainment Spaces",
                  "Sun-Drenched Ocean-Facing Terraces"
                ].map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-white/90 font-light group-hover:text-white transition-colors duration-300">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="border-l-4 border-gray-300 pl-8 py-6">
            <blockquote className="text-2xl font-light text-gray-700 italic leading-relaxed mb-4">
              "Every room captures breathtaking panoramic vistas of the Pacific Ocean and Catalina Island."
            </blockquote>
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              Architectural Statement
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
