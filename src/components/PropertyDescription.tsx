
const PropertyDescription = () => {
  return (
    <div className="space-y-20">
      {/* Main Header */}
      <div className="text-center space-y-8">
        <h2 className="text-6xl md:text-7xl font-extralight text-black tracking-[-0.02em] leading-none">
          126 Monarch Bay Drive
          <span className="block text-2xl md:text-3xl text-gray-600 font-light mt-4">
            Dana Point, CA 92629
          </span>
        </h2>
      </div>

      {/* Property Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-4xl font-extralight text-black mb-2">$13,500,000</div>
          <div className="text-sm text-gray-600 uppercase tracking-wide">Sales Price</div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-extralight text-black mb-2">5,452</div>
          <div className="text-sm text-gray-600 uppercase tracking-wide">Square Feet</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-light text-black mb-2">5</div>
          <div className="text-sm text-gray-600 uppercase tracking-wide">Bedrooms</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-light text-black mb-2">5</div>
          <div className="text-sm text-gray-600 uppercase tracking-wide">Bathrooms</div>
        </div>
      </div>

      {/* Main Content Area - Full Width */}
      <div className="max-w-6xl mx-auto">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-light text-justify">
          <p>
            This estate defines a new era of California coastal luxury, where timeless Mediterranean 
            inspiration meets contemporary refinement. Seamlessly integrating architecture with nature, 
            the design embraces Japanese-influenced Wabi Sabi philosophy—celebrating organic textures, 
            raw materials, and the beauty of imperfection. Set within the exclusive, guard-gated enclave of 
            Monarch Bay, the 5-bedroom, 5-bathroom estate captures sweeping views of the Pacific Ocean 
            and Catalina Island through floor-to-ceiling glass.
          </p>
          
          <p>
            Warm, elemental materials—including custom millwork, imported Italian stone, French oak, and 
            limestone—flow effortlessly throughout the open-concept living spaces. The home's sculptural 
            facade is wrapped in natural materials, offering a bold, tactile contrast against the coastal 
            terrain. The primary suite is a secluded haven with panoramic views, a spa-inspired bath with 
            sculptural soaking tub, and a custom walk-in closet.
          </p>
          
          <p>
            Each additional en-suite bedroom is uniquely appointed with refined finishes and artistic 
            detailing. A dedicated wine sanctuary, built-in entertainment spaces, and seamless indoor-outdoor 
            transitions enhance the home's livability. Outside, an infinity-edge pool, fire feature, 
            built-in BBQ, and multiple lounge areas create the perfect setting for gathering or unwinding 
            under the stars.
          </p>
          
          <p>
            Designed by acclaimed architects, this residence is a masterclass in elevated coastal living—where 
            thoughtful architecture honors its environment with quiet sophistication. An adjacent half-acre 
            parcel is also available, offering the opportunity to preserve the home's sense of space and views. 
            The property includes approved plans for a 1,500-square-foot addition, providing the option to 
            build a complementary retreat or simply maintain the surrounding natural landscape.
          </p>
        </div>
      </div>

      {/* Feature Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative h-80 overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="Grand living room with panoramic ocean views"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-light mb-1">Grand living room with panoramic ocean views</h3>
          </div>
        </div>
        
        <div className="relative h-80 overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
            alt="Bespoke gourmet kitchen with premium appliances"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-light mb-1">Bespoke gourmet kitchen with premium appliances</h3>
          </div>
        </div>
        
        <div className="relative h-80 overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2153&q=80"
            alt="Private oceanfront terrace with infinity views"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-light mb-1">Private oceanfront terrace with infinity views</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
