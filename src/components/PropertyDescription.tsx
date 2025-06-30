
const PropertyDescription = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-light text-gray-800">Extraordinary Ocean Living</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="Luxury living room with ocean view"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
            alt="Modern luxury kitchen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="prose prose-lg text-gray-600">
        <p>
          126 Monarch Bay Drive represents the pinnacle of luxury coastal living within Dana Point's 
          most exclusive guard-gated community. This custom architectural masterpiece, originally 
          built in 1979 and extensively remodeled in 2003, offers 5,452 square feet of sophisticated 
          living space across three levels.
        </p>
        <p>
          The home's elevated position captures breathtaking panoramic views of the Pacific Ocean 
          and Catalina Island from virtually every major room. An extensive 1,500 square foot addition 
          created a grand primary suite, seamlessly blending timeless coastal elegance with modern luxury.
        </p>
        <p>
          Exceptional amenities include a gourmet kitchen with premium Sub-Zero, Bosch, and Thermador 
          appliances, a custom 1,200-bottle wine room, and a spacious entertainment area opening to 
          sun-drenched decks. The resort-style backyard features lush landscaping, spa, built-in BBQ, 
          outdoor fireplace, and a unique five-hole putting green.
        </p>
      </div>
      
      <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2153&q=80"
          alt="Luxury outdoor patio with ocean view"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PropertyDescription;
