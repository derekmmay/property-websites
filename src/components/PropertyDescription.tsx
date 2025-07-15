
import { PropertyData } from "@/services/propertyApiService";

interface PropertyDescriptionProps {
  property?: PropertyData;
}

const PropertyDescription = ({ property }: PropertyDescriptionProps) => {
  return (
    <div className="space-y-16 pt-16 px-4 sm:px-6 lg:px-8">
      {/* Main Header */}
      <div className="text-center space-y-8">
        <h2 className="text-6xl md:text-7xl font-extralight text-black tracking-[-0.02em] leading-none">
          {property?.address || "126 Monarch Bay Drive"}
          <span className="block text-2xl md:text-3xl text-gray-600 font-light mt-4">
            {property ? `${property.city}, ${property.state} ${property.zip_code}` : "Dana Point, CA 92629"}
          </span>
        </h2>
      </div>

      {/* Property Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-8">
        <div className="text-center">
          <div className="text-4xl font-extralight text-black mb-2">
            ${property?.price?.toLocaleString() || "13,500,000"}
          </div>
          <div className="text-sm text-gray-600 uppercase tracking-wide">Sales Price</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-light text-black mb-2">{property?.bedrooms || "5"}</div>
          <div className="text-sm text-gray-600 uppercase tracking-wide">Bedrooms</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-light text-black mb-2">{property?.bathrooms || "5"}</div>
          <div className="text-sm text-gray-600 uppercase tracking-wide">Bathrooms</div>
        </div>

        <div className="text-center">
          <div className="text-4xl font-extralight text-black mb-2">
            {property?.square_feet?.toLocaleString() || "5,452"}
          </div>
          <div className="text-sm text-gray-600 uppercase tracking-wide">Square Feet</div>
        </div>
      </div>

      {/* Main Content Area - Full Width */}
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8 text-gray-700 leading-[1.8] font-light">
          <p className="text-xl md:text-2xl leading-[1.6] text-gray-800">
            {property?.description || "This estate defines a new era of California coastal luxury, where timeless Mediterranean inspiration meets contemporary refinement."}
          </p>
          
          <p className="text-lg leading-[1.8]">
            Seamlessly integrating architecture with nature, the design embraces Japanese-influenced 
            Wabi Sabi philosophy—celebrating organic textures, raw materials, and the beauty of 
            imperfection. Set within the exclusive, guard-gated enclave of Monarch Bay, the 5-bedroom, 
            5-bathroom estate captures sweeping views of the Pacific Ocean and Catalina Island through 
            floor-to-ceiling glass.
          </p>
          
          <p className="text-lg leading-[1.8]">
            Warm, elemental materials—including custom millwork, imported Italian stone, French oak, 
            and limestone—flow effortlessly throughout the open-concept living spaces. The home's 
            sculptural facade is wrapped in natural materials, offering a bold, tactile contrast 
            against the coastal terrain.
          </p>
          
          <p className="text-lg leading-[1.8]">
            The primary suite is a secluded haven with panoramic views, a spa-inspired bath with 
            sculptural soaking tub, and a custom walk-in closet. Each additional en-suite bedroom 
            is uniquely appointed with refined finishes and artistic detailing.
          </p>
          
          <p className="text-lg leading-[1.8]">
            A dedicated wine sanctuary, built-in entertainment spaces, and seamless indoor-outdoor 
            transitions enhance the home's livability. Outside, an infinity-edge pool, fire feature, 
            built-in BBQ, and multiple lounge areas create the perfect setting for gathering or 
            unwinding under the stars.
          </p>
          
          <p className="text-lg leading-[1.8] text-gray-800 font-normal">
            Designed by acclaimed architects, this residence is a masterclass in elevated coastal 
            living—where thoughtful architecture honors its environment with quiet sophistication. 
            An adjacent half-acre parcel is also available, offering the opportunity to preserve 
            the home's sense of space and views. The property includes approved plans for a 
            1,500-square-foot addition, providing the option to build a complementary retreat or 
            simply maintain the surrounding natural landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
