
const PropertyDescription = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-8">
        <h2 className="text-4xl font-light text-black tracking-wide">Architectural Excellence</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-80 rounded-none overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
              alt="Grand living room with panoramic ocean views"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div className="relative h-80 rounded-none overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
              alt="Bespoke gourmet kitchen with premium appliances"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
        
        <div className="prose prose-xl text-gray-700 leading-relaxed font-light max-w-none">
          <p className="text-xl mb-8">
            126 Monarch Bay Drive represents the absolute pinnacle of California coastal luxury—a 
            singular architectural achievement within Dana Point's most coveted guard-gated sanctuary.
          </p>
          <p className="mb-8">
            This custom estate, masterfully conceived in 1979 and reimagined through extensive 
            renovations in 2003, offers 5,452 square feet of uncompromising sophistication across 
            three meticulously designed levels. Every room captures breathtaking panoramic vistas 
            of the Pacific Ocean and Catalina Island.
          </p>
          <p className="mb-8">
            The residence showcases an extraordinary 1,500-square-foot addition housing the grand 
            primary suite—a private sanctuary that seamlessly marries timeless coastal elegance 
            with contemporary luxury. Premium amenities include a temperature-controlled 1,200-bottle 
            wine sanctuary, Sub-Zero and Thermador culinary suite, and expansive entertainment 
            spaces flowing to sun-drenched ocean-facing terraces.
          </p>
        </div>
        
        <div className="relative h-96 rounded-none overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2153&q=80"
            alt="Private oceanfront terrace with infinity views"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-light mb-2">Resort-Style Outdoor Living</h3>
            <p className="text-white/90 font-light">Private terraces with unobstructed Pacific views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
