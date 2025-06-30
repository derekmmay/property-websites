
import { Card, CardContent } from "@/components/ui/card";

const EventsCalendar = () => {
  const events = [
    {
      title: "Festival of Whales",
      month: "March",
      description: "54th Annual celebration of Gray Whale migration"
    },
    {
      title: "Maritime Festival",
      month: "September", 
      description: "Historic tall ships and maritime heritage celebration"
    },
    {
      title: "Turkey Trot",
      month: "November",
      description: "47th Annual Thanksgiving morning 5K/10K race"
    },
    {
      title: "Holiday Boat Parade",
      month: "December",
      description: "Dana Point Harbor's festive lighted boat parade"
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-light mb-8 text-gray-800">Community Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <Card key={index} className="border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-light text-blue-900 mb-2">{event.month}</div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventsCalendar;
