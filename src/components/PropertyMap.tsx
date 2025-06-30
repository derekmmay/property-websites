
import React from 'react';

const PropertyMap = () => {
  // Coordinates for Dana Point city center (definitely on land!)
  const latitude = 33.4734;
  const longitude = -117.7018;
  
  return (
    <div className="w-full h-96 bg-gray-200">
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
  );
};

export default PropertyMap;
