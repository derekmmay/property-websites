import { Waves, Plane, ShoppingBag, UtensilsCrossed, Cross } from "lucide-react";

const TravelTimes = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-light text-black mb-16 text-center tracking-wide">Seamless Connectivity</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Waves className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-light text-black mb-4">Beach Access</h3>
            <div className="text-3xl font-extralight text-black mb-4">2 min</div>
            <p className="text-gray-600 font-light leading-relaxed">Private beach access, world-class surfing, and exclusive waterfront activities just steps away.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Cross className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-light text-black mb-4">Medical Center</h3>
            <div className="text-3xl font-extralight text-black mb-4">15 min</div>
            <p className="text-gray-600 font-light leading-relaxed">Access to Hoag Hospital Newport Beach and world-class healthcare facilities for peace of mind.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Plane className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-light text-black mb-4">John Wayne Airport</h3>
            <div className="text-3xl font-extralight text-black mb-4">20 min</div>
            <p className="text-gray-600 font-light leading-relaxed">Orange County's premier airport with direct flights to major business hubs and luxury destinations.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-light text-black mb-4">Fashion Island Mall</h3>
            <div className="text-3xl font-extralight text-black mb-4">25 min</div>
            <p className="text-gray-600 font-light leading-relaxed">Newport Beach's luxury shopping destination featuring high-end boutiques and exclusive designer stores.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <UtensilsCrossed className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-light text-black mb-4">Michelin Star Dining</h3>
            <div className="text-3xl font-extralight text-black mb-4">30 min</div>
            <p className="text-gray-600 font-light leading-relaxed">World-renowned culinary experiences and award-winning restaurants throughout Orange County.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Plane className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-light text-black mb-4">LAX International</h3>
            <div className="text-3xl font-extralight text-black mb-4">60 min</div>
            <p className="text-gray-600 font-light leading-relaxed">Global connectivity through Los Angeles International Airport with worldwide luxury travel options.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTimes;