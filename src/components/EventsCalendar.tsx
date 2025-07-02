
import { Card, CardContent } from "@/components/ui/card";

const EventsCalendar = () => {
  const events = [
    {
      title: "Festival of Whales",
      month: "March",
      description: "54th Annual celebration of Gray Whale migration",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Maritime Festival",
      month: "September", 
      description: "Historic tall ships and maritime heritage celebration",
      gradient: "from-slate-500 to-slate-600"
    },
    {
      title: "Turkey Trot",
      month: "November",
      description: "47th Annual Thanksgiving morning championship race",
      gradient: "from-amber-500 to-amber-600"
    },
    {
      title: "Holiday Boat Parade",
      month: "December",
      description: "Dana Point Harbor's illuminated maritime procession",
      gradient: "from-gray-500 to-gray-600"
    }
  ];

  return (
    <div className="text-center">
      <h2 className="text-4xl font-light text-black mb-16 text-center tracking-wide">Exclusive Community Events</h2>
      <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto mb-12 text-center leading-relaxed">
        Join prestigious annual celebrations and cultural festivities in the heart of Dana Point.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((event, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white overflow-hidden group">
            <CardContent className="p-8 text-center relative">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${event.gradient}`}></div>
              <div className="text-4xl font-extralight text-gray-800 mb-6 tracking-wide">{event.month}</div>
              <h3 className="text-xl font-medium text-black mb-4">{event.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventsCalendar;
