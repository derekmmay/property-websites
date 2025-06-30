
import React, { useState } from 'react';
import InteractiveMap from './InteractiveMap';
import { Button } from '@/components/ui/button';

const PropertyMap = () => {
  const [useInteractiveMap, setUseInteractiveMap] = useState(false);
  
  // Coordinates for Dana Point city center
  const latitude = 33.4734;
  const longitude = -117.7018;
  
  if (useInteractiveMap) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-black mb-4 tracking-wide">Property Location</h2>
            <p className="text-gray-600 font-light">Interactive map of 126 Monarch Bay Drive, Dana Point</p>
            <Button 
              variant="outline" 
              onClick={() => setUseInteractiveMap(false)}
              className="mt-4"
            >
              Switch to Static Map
            </Button>
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
  }
  
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-black mb-4 tracking-wide">Property Location</h2>
          <p className="text-gray-600 font-light">126 Monarch Bay Drive, Dana Point</p>
          <Button 
            variant="outline" 
            onClick={() => setUseInteractiveMap(true)}
            className="mt-4"
          >
            Switch to Interactive Map
          </Button>
        </div>
        <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.8!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI4JzI0LjIiTiAxMTfCsDQzJzM3LjIiVw!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus&maptype=roadmap&style=feature:all|saturation:-100|lightness:20`}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) contrast(120%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="126 Monarch Bay Property Location"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyMap;
