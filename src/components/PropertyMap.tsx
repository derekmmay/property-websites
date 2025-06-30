
import React from 'react';
import InteractiveMap from './InteractiveMap';

const PropertyMap = () => {
  // Coordinates for Dana Point city center
  const latitude = 33.4734;
  const longitude = -117.7018;
  
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-black mb-4 tracking-wide">Property Location</h2>
          <p className="text-gray-600 font-light">Interactive map of 126 Monarch Bay Drive, Dana Point</p>
        </div>
        <InteractiveMap 
          latitude={latitude}
          longitude={longitude}
          zoom={15}
          className="w-full h-96 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default PropertyMap;
