
import { GraduationCap } from "lucide-react";
import SchoolCard from "./SchoolCard";

const ElementarySchools = () => {
  const schools = [
    {
      name: "Monarch Beach Elementary",
      type: "Public • Grades K-5",
      distance: "0.7 miles",
      rating: "9.8",
      badges: [
        { text: "Academics: A+", variant: "secondary" as const },
        { text: "STEM Excellence" }
      ],
      description: "Consistently ranked among California's top elementary schools, offering innovative STEAM programs and personalized learning experiences."
    },
    {
      name: "Sea View Elementary",
      type: "Public • Grades K-6",
      distance: "1.2 miles",
      rating: "9.5",
      badges: [
        { text: "Arts: A+", variant: "secondary" as const },
        { text: "Technology" }
      ],
      description: "Award-winning programs in creative arts, environmental science, and technology integration with exceptional support for gifted students."
    }
  ];

  return (
    <div className="mb-24">
      <div className="flex items-center justify-center mb-16">
        <GraduationCap className="w-8 h-8 text-black mr-4" />
        <h3 className="text-4xl font-light text-black">Elementary Education</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {schools.map((school, index) => (
          <SchoolCard
            key={index}
            name={school.name}
            type={school.type}
            distance={school.distance}
            rating={school.rating}
            badges={school.badges}
            description={school.description}
            colorAccent="blue"
          />
        ))}
      </div>
    </div>
  );
};

export default ElementarySchools;
