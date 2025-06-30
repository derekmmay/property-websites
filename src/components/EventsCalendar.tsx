
import { Card, CardContent } from "@/components/ui/card";

const EventsCalendar = () => {
  const events = [
    {
      title: "Festival of Whales",
      month: "March",
      description: "54th Annual celebration of Gray Whale migration",
      gradient: "ocean-gradient"
    },
    {
      title: "Maritime Festival",
      month: "September", 
      description: "Historic tall ships and maritime heritage celebration",
      gradient: "luxury-gradient"
    },
    {
      title: "Turkey Trot",
      month: "November",
      description: "47th Annual Thanksgiving morning championship race",
      gradient: "gold-gradient"
    },
    {
      title: "Holiday Boat Parade",
      month: "December",
      description: "Dana Point Harbor's illuminated maritime procession",
      gradient: "platinum-gradient"
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-4xl font-light mb-12 text-slate-800 text-center">Exclusive Community Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((event, index) => (
          <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8 text-center relative">
              <div className={`absolute top-0 left-0 right-0 h-1 ${event.gradient}`}></div>
              <div className="text-3xl font-extralight text-slate-700 mb-4 font-playfair">{event.month}</div>
              <h3 className="text-lg font-medium text-slate-800 mb-4 font-playfair">{event.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventsCalendar;
