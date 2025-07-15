
import { PropertyData } from "@/services/propertyApiService";
import { useFormattedProperty } from "@/hooks/usePropertyConfig";

interface PropertyDescriptionProps {
  property?: PropertyData;
}

const PropertyDescription = ({ property }: PropertyDescriptionProps) => {
  const config = useFormattedProperty();
  return (
    <div className="space-y-16 pt-16 px-4 sm:px-6 lg:px-8">
      {/* Main Header */}
      <div className="text-center space-y-8">
        <h2 className="text-6xl md:text-7xl font-extralight text-black tracking-[-0.02em] leading-none">
          {property?.address || config.address}
          <span className="block text-2xl md:text-3xl text-gray-600 font-light mt-4">
            {property ? `${property.city}, ${property.state} ${property.zip_code}` : config.locationFormatted}
          </span>
        </h2>
      </div>

      {/* Property Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-8">
        <div className="text-center">
          <div className="text-4xl font-extralight text-black mb-2">
            {property?.price || config.priceFormatted}
          </div>
          <div className="text-sm text-gray-600 uppercase tracking-wide">Sales Price</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-light text-black mb-2">{property?.beds || config.bedrooms}</div>
          <div className="text-sm text-gray-600 uppercase tracking-wide">Bedrooms</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-light text-black mb-2">{property?.baths || config.bathrooms}</div>
          <div className="text-sm text-gray-600 uppercase tracking-wide">Bathrooms</div>
        </div>

        <div className="text-center">
          <div className="text-4xl font-extralight text-black mb-2">
            {property?.area || config.squareFootage}
          </div>
          <div className="text-sm text-gray-600 uppercase tracking-wide">Square Feet</div>
        </div>
      </div>

      {/* Main Content Area - Full Width */}
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8 text-gray-700 leading-[1.8] font-light">
          <p className="text-xl md:text-2xl leading-[1.6] text-gray-800">
            {property?.description || config.description}
          </p>
          
          <div className="space-y-6">
            <p className="text-lg leading-[1.8]">
              Seamlessly integrating architecture with nature, this exceptional residence embodies 
              the pinnacle of {config.locationFormatted} luxury living. Located in the prestigious 
              {config.location.neighborhood} community, this {config.bedroomsFormatted}, {config.bathroomsFormatted} 
              estate offers {config.squareFootageFormatted} of meticulously designed living space.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {config.keyFeatures.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-gray-400 mt-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">Additional Amenities</h3>
                <ul className="space-y-2">
                  {config.keyFeatures.slice(4).map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-gray-400 mt-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <p className="text-lg leading-[1.8]">
              The property's prime location offers unparalleled access to {config.location.keyAttraction} 
              and is moments away from premier destinations including {config.location.nearbyAmenities.slice(0, 3).join(', ')}. 
              This residence represents a rare opportunity to own a piece of {config.locationFormatted}'s 
              most coveted real estate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
