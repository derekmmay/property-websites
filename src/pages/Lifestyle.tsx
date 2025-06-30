import Navigation from "@/components/Navigation";
import EventsCalendar from "@/components/EventsCalendar";
import LuxuryDestinations from "@/components/LuxuryDestinations";
import Footer from "@/components/Footer";

const Lifestyle = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto py-20">
        <EventsCalendar />
        <LuxuryDestinations />
      </div>
      
      <Footer />
    </div>
  );
};

export default Lifestyle;
